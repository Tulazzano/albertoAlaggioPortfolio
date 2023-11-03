import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../pages/home/home.component';
import { CustomimageComponent } from '../components/customimage/customimage.component';
import { DesktopHomeComponent } from 'src/components/desktop-home/desktop-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
