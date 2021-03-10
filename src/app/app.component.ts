import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { GetDistrictRatingGQL, ListCategoriesGQL, ListCitiesGQL, ListDirectionGQL, ListDistrictsGQL } from 'src/generated/graphql';
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
    private listCategoriesGQL: ListCategoriesGQL,
    private listCitiesGQL: ListCitiesGQL,
    private listDirectionGQL: ListDirectionGQL,
    private listDistrictsGQL: ListDistrictsGQL,
    private getDistrictRatingGQL: GetDistrictRatingGQL,
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
    // this.listCategoriesGQL.watch().valueChanges.pipe(map(result => result.data.Web?.categories)).subscribe(res => {
    //   console.log(res);
    // })
    // this.listDirectionGQL.watch({category: 0, city_id: 0}).valueChanges.pipe(map(result => result.data.Web?.directions)).subscribe(res => {
    //   console.log(res);
    // })
    // this.listDistrictsGQL.watch({category: 0, city_id: 21}).valueChanges.pipe(map(result => result.data.Web?.districts)).subscribe(res => {
    //   console.log(res);
    // });
    this.getDistrictRatingGQL.watch({district_id: 570}).valueChanges.pipe(map(result => result.data.Rating)).subscribe(res => {
      console.log(res);
    });
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
