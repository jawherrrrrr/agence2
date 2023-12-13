import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {
  cars = [
    { id: 1, name: 'Car1', imageUrl: 'https://example.com/car1.jpg' },
    { id: 2, name: 'Car2', imageUrl: 'https://example.com/car2.jpg' },
    { id: 3, name: 'Car3', imageUrl: 'https://example.com/car3.jpg' },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showDetails(carId: number) {
    this.router.navigate(['/detail', carId]);
  }
}