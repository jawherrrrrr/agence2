import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailComponent implements OnInit {
  cars = [
    { id: 1, name: 'Car1', model: 'Passat', year: 2022, color: 'Red', price: '50d', imageUrl: 'url_to_image1' },
    { id: 2, name: 'Car2', model: 'BM', year: 2021, color: 'Black', price: '80d', imageUrl: 'url_to_image2' },
    { id: 3, name: 'Car3', model: 'ModelZ', year: 2023, color: 'Green', imageUrl: 'url_to_image3' },
  ];

  showDetails = false; // Ajout de cette variable pour contrôler l'affichage des détails

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}