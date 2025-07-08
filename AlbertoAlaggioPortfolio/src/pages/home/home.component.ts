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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewChecked, OnDestroy {

  public mobile: boolean = true;


  ngOnInit(): void {
    var w = window.innerWidth;
    this.mobile = w < 500
  }

  ngOnDestroy(): void {

  }

  ngAfterViewChecked(): void {


  }

  constructor() {
  }

}
