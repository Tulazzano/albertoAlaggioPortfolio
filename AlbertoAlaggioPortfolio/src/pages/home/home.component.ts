import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';

export class Images {
  public index: number;
  public src: string;

  constructor(index = 0, src = '') {
    this.index = index;
    this.src = src;
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public numberOfImages = 5;
  public currenIndex = 1;
  public imagesArray = new Array<Images>();
  public int = interval(4000);
  public subscription: any;
  public isNowScrolling = true;

  public createImgArray(length: number) {
    for (let i = 0; i < length; i++) {
      this.imagesArray.push(
        new Images(i, i + '.JPG')
      )
    }
  }

  autoSwitchImages() {
    if (this.isNowScrolling) {
      this.stopScrollingImg();
    } else {
      this.startScrollingImg();
    }
    this.isNowScrolling = !this.isNowScrolling;
  }

  public stopScrollingImg() {
    this.subscription.unsubscribe()
  }

  public startScrollingImg() {
    this.subscription = this.int.subscribe(
      () => {
        if (this.currenIndex == this.numberOfImages - 1) {
          this.currenIndex = 0;
        } else {
          this.currenIndex++;
        }
      }
    )
  }

  openContacts() {
    const contactsContainer: HTMLElement | null = document.querySelector('.contacts-container');
    const contacts: HTMLElement | null = document.querySelector('.contacts');
    const contactsElem: NodeListOf<HTMLElement> | null = document.querySelectorAll('.contacts li');
    //Toggle nav
    contacts!.classList.toggle('contacts-active');
    contactsContainer!.classList.toggle('contacts-container-active');

    //animate Links
    contactsElem.forEach((elem, index) => {
      if (elem.style.animation) {
        elem.style.animation = '';
      } else {
        var width = document.body.clientWidth;
        elem.style.animation = `contactFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    })
  };

  openBio() {
    const bioContainer: HTMLElement | null = document.querySelector('.bio-container');
    const bio: HTMLElement | null = document.querySelector('.bio');
    //Toggle nav
    bio!.classList.toggle('bio-active');
    bioContainer!.classList.toggle('bio-container-active');

    if (bio!.style.animation) {
      bio!.style.animation = '';
    } else {
      bio!.style.animation = `bioFade 1s ease forwards 0.5s`;
    }
  }

  ngOnInit(): void {
    this.startScrollingImg()
  }

  ngOnDestroy(): void {
    this.stopScrollingImg();
  }


  constructor() {
    this.createImgArray(this.numberOfImages)
  }

}
