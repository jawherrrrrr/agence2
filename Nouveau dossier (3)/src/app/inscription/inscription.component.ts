import { Component } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  nom: string = '';
  prenom: string = '';
  dateNaissance: string = '';
  email: string = '';

  sInscrire() {
    console.log('Formulaire soumis avec succès!');
    console.log('Nom:', this.nom);
    console.log('Prénom:', this.prenom);
    console.log('Date de naissance:', this.dateNaissance);
    console.log('Adresse e-mail:', this.email);
  }
}