import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'customimage',
  templateUrl: './customimage.component.html',
  styleUrls: ['./customimage.component.css']
})
export class CustomimageComponent implements AfterViewInit {

  @Input() src: string | undefined;

  @ViewChild('activeImg') activeImg: any;

  seeImage() {

    this.activeImg.nativeElement.className = "image active"
    setInterval(() => {
    this.activeImg.nativeElement.className = "image "
    setInterval(() => this.activeImg.nativeElement.className = "image active", 3000)
  }, 500)
  }

  ngAfterViewInit(): void {
    this.seeImage()
  }

}

