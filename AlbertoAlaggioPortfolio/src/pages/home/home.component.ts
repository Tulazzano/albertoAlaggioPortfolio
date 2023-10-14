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

  public numberOfImages = 29;
  public currenIndex = 1;
  public imagesArray = new Array<Images>();
  public int = interval(1000);
  public subscription: any;
  
  public createImgArray(length : number){
    for(let i = 0; i < length ; i++){
      this.imagesArray.push(
        new Images(i , i + '.jpg')
      )
    }
  }

  public stopScrollingImg(){
    this.subscription.unsubscribe()
  }

  ngOnInit(): void {
    this.subscription = this.int.subscribe(
      () => {
        if(this.currenIndex == this.numberOfImages -1){
          this.currenIndex = 0;
        }else{
          this.currenIndex ++;
        }
      }
    )
    this.stopScrollingImg()
  }

  ngOnDestroy(): void {
    this.stopScrollingImg();
  }


  constructor(){
    this.createImgArray(this.numberOfImages)
  }
  
}
