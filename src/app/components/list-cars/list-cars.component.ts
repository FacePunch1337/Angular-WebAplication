import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css'],
})
export class ListCarsComponent implements OnInit {
  constructor(private _carService: CarsService) {}
  ngOnInit(): void {
    this._carService.getAllCars().subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err),
    });
  }
}
