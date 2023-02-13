import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';

//Changement de locale pour le mettre en Francais (on a d'abord ajouter le LOCAL_ID dans l'import des elements de @angular/core)
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { FaceSnapHeaderComponent } from './face-snap-header/face-snap-header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
/////////////////////////////////////////////

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    FaceSnapListComponent,
    FaceSnapHeaderComponent,
    LandingPageComponent,
    SingleFaceSnapComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }, // on ajote notre Locale de langue FR dans le tableau de providers
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  //on ajoute notre constructeur de LOCAL et on met le locale de langue FR par defaut
  constructor() {
    registerLocaleData(fr.default);
  }
  /////////////////////////////////
}
