import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DownloadComponent } from './download/download.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturesComponent } from './features/features.component';
import { ContactComponent } from './contact/contact.component';
import { IntroComponent } from './intro/intro.component';
import { ScreenshotsComponent } from './screenshots/screenshots.component';


@NgModule({
  declarations: [
    AppComponent,
    DownloadComponent,
    HeaderComponent,
    FooterComponent,
    FeaturesComponent,
    ContactComponent,
    IntroComponent,
    ScreenshotsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
