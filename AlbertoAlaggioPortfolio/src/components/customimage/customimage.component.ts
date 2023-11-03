import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'customimage',
  templateUrl: './customimage.component.html',
  styleUrls: ['./customimage.component.css']
})
export class CustomimageComponent implements AfterViewInit {

  @Input() src: string | undefined;
  @Input() isNowScrolling: boolean | undefined;

  @ViewChild('activeImg') activeImg: any;

  seeImage() {

    this.activeImg.nativeElement.className = "image active"
    setInterval(() => {
      this.activeImg.nativeElement.className = "image "
      setInterval(() => {
        if (this.isNowScrolling) {
          this.activeImg.nativeElement.className = "image active"
        }
      }, 2030)
    }, 500)
  }

  ngAfterViewInit(): void {

    this.seeImage()
  }
}

