import { AfterViewChecked, Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
  selector: 'mobile-home',
  templateUrl: './mobile-home.component.html',
  styleUrls: ['./mobile-home.component.css']
})
export class MobileHomeComponent {

  public numberOfImages = 28;
  public currenIndex = 0;
  public imagesArray = new Array<Images>();
  public int = interval(3000);
  public subscription: any;
  public isNowScrolling = true;
  public bioOpened: boolean = false;
  public contactsOpened: boolean = false;

  @ViewChild('imgContainer') imgContainer: any;

  public createImgArray(length: number) {
    for (let i = 0; i < length; i++) {
      let num =i+1;
      this.imagesArray.push(
        new Images(i, num + '.JPG')
      )
    }
  }

  autoSwitchImages() {
    if (this.isNowScrolling) {
      this.stopScrollingImg();
    } else {
      if (this.currenIndex == this.numberOfImages - 1) {
        this.currenIndex = 0;
      } else {
        this.currenIndex++;
      }
      this.startScrollingImg();
    }
    this.isNowScrolling = !this.isNowScrolling;
  }

  addSwitchImagesEvent() {
    let button = document.querySelector("#imgCont");
    button!.addEventListener("mousedown", event => {
      console.log(event)
    });
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
    this.contactsOpened = !this.contactsOpened
    const contactsContainer: HTMLElement | null = document.querySelector('.contacts-container');
    const contacts: HTMLElement | null = document.querySelector('.contacts');
    const contactsElem: NodeListOf<HTMLElement> | null = document.querySelectorAll('.contacts li');
    //Toggle nav
    contacts!.classList.toggle('contacts-active');
    contactsContainer!.classList.toggle('contacts-container-active');

    //animate Links
    contactsElem.forEach((elem) => {
      if (!this.contactsOpened) {
        elem.style.animation = ``;
        elem.style.animation = `contactFadeOut 1s ease forwards 0s`;
      } else {
        elem.style.animation = ``;
        elem.style.animation = `contactFade 1s ease forwards 0.5s`;
      }
    })
  };

  openBio() {
    this.bioOpened = !this.bioOpened
    const bioContainer: HTMLElement | null = document.querySelector('.bio-container');
    const bio: HTMLElement | null = document.querySelector('.bio');
    //Toggle nav
    bio!.classList.toggle('bio-active');
    bioContainer!.classList.toggle('bio-container-active');

    if (!this.bioOpened) {
      bio!.style.animation = ``;
      bio!.style.animation = `bioFadeOut 1s ease forwards 0s`;
    } else {
      bio!.style.animation = ``;
      bio!.style.animation = `bioFade 1s ease forwards 0.5s`;
    }
  }



  ngOnInit(): void {
    var w = window.innerWidth;
    console.log(w)
    this.startScrollingImg();
    const imgBtn: HTMLElement | null = document.querySelector('#imgBtn');
    imgBtn!.addEventListener('pointerdown', () => this.autoSwitchImages(), false);
    imgBtn!.addEventListener('pointerup', () => this.autoSwitchImages(), false);
    imgBtn!.addEventListener('contextmenu', event => event.preventDefault());
  }

  ngOnDestroy(): void {
    this.stopScrollingImg();
  }

  ngAfterViewChecked(): void {
    if (this.imgContainer.nativeElement.clientHeight > 200) {
      const top = this.imgContainer.nativeElement.offsetTop
      const imgCont: HTMLElement | null = document.getElementById('imgCont');
      const imgBtn: HTMLElement | null = document.getElementById('imgBtn');
      imgCont!.style.setProperty('height', (this.imgContainer.nativeElement.clientHeight).toString() + 'px');
      imgBtn!.style.setProperty('height', (this.imgContainer.nativeElement.clientHeight).toString() + 'px');
      imgBtn!.style.setProperty('top', top.toString() + 'px');
    }

  }

  constructor() {
    this.createImgArray(this.numberOfImages)
  }

}
