import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  voitures = [
    { id: '1', nom: 'Voiture 1', image: 'file:///C:/Users/dell/agence/src/app/kia.jpeg', details: 'hvv'},
    { id: '2', nom: 'Voiture 2', image: 'C:\Users\dell\agence\src\assets\porsche.png', details: 'hvv'},
    { id: '3', nom: 'Voiture 3', image: 'C:\Users\dell\agence\src\assets\ferrari.jpg', details: 'hvv'},
    { id: '4', nom: 'Voiture 4', image: 'C:\Users\dell\agence\src\assets\mercedes.jpg', details: 'hvv'},
    { id: '5', nom: 'Voiture 5', image: 'C:\Users\dell\agence\src\assets\bmw.jpg', details: 'hvv'},
    { id: '6', nom: 'Voiture 6', image: 'C:\Users\dell\agence\src\assets\lambo.jpeg', details: 'hvv'},

  ];

  ajouterVoiture() {
    console.log('Voiture ajoutée !');
  }
}