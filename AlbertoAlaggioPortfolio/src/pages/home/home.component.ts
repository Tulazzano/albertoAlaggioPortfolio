import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';

export class Images {
  public index : number;
  public src : string;

  constructor(index = 0, src = ''){
    this.index = index;
    this.src = src;
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy{

  public numberOfImages = 5;
  public currenIndex = 1;
  public imagesArray = new Array<Images>();
  public int = interval(4000);
  public subscription: any;
  public isNowScrolling = true;
  
  public createImgArray(length : number){
    for(let i = 0; i < length ; i++){
      this.imagesArray.push(
        new Images(i , i + '.jpg')
      )
    }
  }

  autoSwitchImages(){
    if(this.isNowScrolling){
      this.stopScrollingImg();
    }else{
      this.startScrollingImg();
    }
    this.isNowScrolling = !this.isNowScrolling;
  }

  public stopScrollingImg(){
    this.subscription.unsubscribe()
  }

  public startScrollingImg(){
    this.subscription = this.int.subscribe(
      () => {
        if(this.currenIndex == this.numberOfImages -1){
          this.currenIndex = 0;
        }else{
          this.currenIndex ++;
        }
      }
    )
  }

  ngOnInit(): void {
    this.startScrollingImg()
  }

  ngOnDestroy(): void {
    this.stopScrollingImg();
  }


  constructor(){
    this.createImgArray(this.numberOfImages)
  }
  
}
