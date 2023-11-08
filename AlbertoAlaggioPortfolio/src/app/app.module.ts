import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../pages/home/home.component';
import { CustomimageComponent } from '../components/customimage/customimage.component';
import { DesktopHomeComponent } from '../components/desktop-home/desktop-home.component';
import { MobileHomeComponent } from '../components/mobile-home/mobile-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MobileHomeComponent,
    DesktopHomeComponent,
    CustomimageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
