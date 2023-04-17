import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarsService } from 'src/app/services/cars.service';

interface Colors {
  value: string;
  viewValue: string;
}

interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form-add-car',
  templateUrl: './form-add-car.component.html',
  styleUrls: ['./form-add-car.component.css'],
})
export class FormAddCarComponent implements OnInit {
  carForm!: FormGroup;
  colors: Colors[] = [
    { value: 'black', viewValue: 'Black' },
    { value: 'white', viewValue: 'White' },
    { value: 'green', viewValue: 'Green' },
  ];
  types: Type[] = [
    { value: 'sedan', viewValue: 'Sedan' },
    { value: 'hatch-back', viewValue: 'Hatch-Back' },
    { value: 'hybrid', viewValue: 'Hybrid' },
  ];
  constructor(
    private _fb: FormBuilder,
    private _carService: CarsService,
    private _window: DialogRef<FormAddCarComponent>
  ) {}

  ngOnInit(): void {
    this.carForm = this._fb.group({
      model: '',
      year: '',
      number: '',
      color: '',
      isNew: '',
      type: '',
      vEngine: '',
      id: '',
    });
  }

  addCar(): void {
    if (this.carForm.valid) {
      this._carService.createNewCar(this.carForm.value).subscribe({
        next: () => {
          alert('Success!');
          this._window.close();
        },

        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
