import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService, Flat } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public flats: Flat[] = [];
  public aqarCount: number = 0;
  public form: FormGroup;
  public districts: any[]= [];

  constructor(
    private appService: AppService,
  ) {
    this.form = new FormGroup({
      districts: new FormControl(),
      rentPeriod: new FormControl(),
      beds: new FormControl(),
      age: new FormControl(),
      priceGte: new FormControl(),
      priceLte: new FormControl(),
      rating: new FormControl(),
    });
    this.form.patchValue(this.appService.search);
    this.appService.listDistricts().subscribe(res => this.districts = res);
  }

  ngOnInit() {
    
  }

  search() {
    this.flats = [];
    this.aqarCount = 0;
    this.appService.search = this.form.value;
    this.appService.list().subscribe(res => {
      this.flats = res;
      this.aqarCount = res.filter(flat => !flat.canceled).length;
    });
  }

  rate(rating: number, flat: Flat) {
    if (rating == flat.rating) rating = 0;
    this.appService.updateFlat({...flat, rating: rating}).subscribe(res => {
      flat.rating = rating;
    });
  }
}
