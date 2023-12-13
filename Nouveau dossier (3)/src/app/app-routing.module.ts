import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { DetailsComponent } from './details/details.component';
import { ContactComponent } from './contact/contact.component';
import { VoitureComponent } from './voiture/voiture.component';
import { AccueilComponent } from './accueil/accueil.component';
const routes: Routes = [
  {path: 'accueil', component:AccueilComponent},
  { path: 'inscription', component: InscriptionComponent },
  { path: 'details/:id', component: DetailsComponent }, 
  { path: 'contact', component: ContactComponent },
  { path: 'voiture', component: VoitureComponent },
]

@NgModule({
  declarations:[],
  imports:[
  CommonModule,
   RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }