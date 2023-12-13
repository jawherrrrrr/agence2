import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { DetailsComponent } from './details/details.component';
import { VoitureComponent } from './voiture/voiture.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
    declarations: [
    AppComponent,
    InscriptionComponent,
    DetailsComponent,
    VoitureComponent,
    AccueilComponent
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }