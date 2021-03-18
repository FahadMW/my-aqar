import { HttpClient } from '@angular/common/http';
import { Component, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { combineLatest, forkJoin, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Category, City, Direction, District, ElasticWebListing, ListCategoriesGQL, ListCitiesGQL, ListDirectionGQL, ListDistrictsGQL, ListGQL, SortInput, WhereInput } from 'src/generated/graphql';
import { AppService } from './app.service';
import { Flat } from './flat.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public flats: Flat[] | undefined;
  public aqarCount: number = 0;
  public form: FormGroup;
  public categories$: Observable<Category[]> | undefined;
  public cities$: Observable<City[]> | undefined;
  public directions$: Observable<Direction[]> | undefined;
  public districts$: Observable<District[]> | undefined;
  public sortFields: Array<keyof SortInput>;
  public loading: boolean = false;
  public loginDialogRef: MatDialogRef<any, any> | undefined;
  public username: string | null;

  constructor(
    private appService: AppService,
    private listCategoriesGQL: ListCategoriesGQL,
    private listCitiesGQL: ListCitiesGQL,
    private listDirectionGQL: ListDirectionGQL,
    private listDistrictsGQL: ListDistrictsGQL,
    private listGQL: ListGQL,
    private dialog: MatDialog,
  ) {
    this.username = localStorage.getItem('username');
    this.form = new FormGroup({
      category: new FormControl(),
      city_id: new FormControl(),
      direction_id: new FormControl(),
      district_id: new FormControl(),
      rent_period: new FormControl(),
      family: new FormControl(),
      beds: new FormControl(),
      age: new FormControl(),
      priceGte: new FormControl(),
      priceLte: new FormControl(),
      sortBy: new FormControl(),
      sortType: new FormControl(),
      rating: new FormControl(),
      viewed: new FormControl(),
      showHide: new FormControl(),
      contact: new FormControl(),
      favorite: new FormControl(),
    });
    
    const inputChanges = (source: Observable<any>) => source.pipe(debounceTime(100), distinctUntilChanged());
    this.categories$ = this.listCategoriesGQL.fetch().pipe(map(result => result.data.Web?.categories as Category[]));
    this.cities$ = this.form.get('category')?.valueChanges.pipe(
      inputChanges,
      switchMap(categoryId => !this.isEmpty(categoryId) && categoryId >=0 ? this.listCitiesGQL.fetch({category: categoryId}).pipe(map(result => result.data.Web?.cities as City[])) : of([])),
      tap((cities) => {
        if (!this.isEmpty(this.form.get('city_id')?.value))
          if (this.form.get('city_id')?.value >= 0 && cities.findIndex(c => c.city_id == this.form.get('city_id')?.value) == -1)
            this.form.get('city_id')?.reset()
      }),
    );
    this.directions$ = this.form.get('city_id')?.valueChanges.pipe(
      inputChanges,
      switchMap(cityId => !this.isEmpty(cityId) && cityId >= 0 ? this.listDirectionGQL.fetch({city_id: cityId}).pipe(map(result => result.data.Web?.directions as Direction[])) : of([])),
      tap((directions) => {
        if (!this.isEmpty(this.form.get('direction_id')?.value))
          if (this.form.get('direction_id')?.value >= 0 && directions.findIndex(d => d.direction_id == this.form.get('direction_id')?.value) == -1)
            this.form.get('direction_id')?.reset();
      }),
    );

    this.districts$ = combineLatest([this.form.get('city_id')?.valueChanges, this.form.get('direction_id')?.valueChanges]).pipe(
      map((res: any) => ([res[0], res[1]])),
      switchMap(([cityId, directionId]) => {
        return !this.isEmpty(cityId) && cityId >= 0 ? this.listDistrictsGQL.fetch({category: this.form.get('category')?.value, city_id: cityId, direction_id: directionId}).pipe(map(result => result.data.Web?.districts as District[])) : of([])
      }),
      tap((districts) => {
        if (!this.isEmpty(this.form.get('district_id')?.value)) {
          const selectedDistricts = (this.form.get('district_id')?.value as number[])
          const unionDistricts = selectedDistricts.filter(d1 => districts.findIndex(d2 => d2.district_id == d1) > -1);
          if (selectedDistricts.length != unionDistricts.length)
            this.form.get('district_id')?.setValue(unionDistricts);
        }
      }),
    );

    this.sortFields = ['price', 'create_time', 'last_update', 'age','has_img', 'has_video'];
  }

  ngOnInit() {
    setTimeout(() => {
      this.form.patchValue({
        category: 1,
        city_id: 21,
        direction_id: null,
        district_id: [600,632,504,706,578,532,452,464,450,416,396,522,664,704,438,598,596,624,454,514,582,574,538],
        family: ['1'],
        rent_period: '3',
        beds: ['3'],
        age: 3,
        priceGte: 40000,
        priceLte: 28000,
        rating: null,
        sortBy: 'price',
        sortType: 'desc'
      });
    }, 0);
  }

  search() {
    this.loading = true;
    let where: WhereInput = {};
    if (this.form.get('category')?.value) where.category = {eq: this.form.get('category')?.value};
    if (this.form.get('city_id')?.value) where.city_id = {eq: this.form.get('city_id')?.value};
    if (this.form.get('direction_id')?.value) where.direction_id = {eq: this.form.get('direction_id')?.value};
    if (this.form.get('district_id')?.value) where.district_id = {inar: this.form.get('district_id')?.value};
    if (this.form.get('family')?.value) where.family = {inar: this.form.get('family')?.value};
    if (this.form.get('rent_period')?.value) where.rent_period = {eq: this.form.get('rent_period')?.value};
    if (this.form.get('beds')?.value) where.beds = {inar: this.form.get('beds')?.value};
    if (this.form.get('age')?.value) where.age = {lte: this.form.get('age')?.value};
    if (this.form.get('priceGte')?.value) where.price = {...where.price, lte: this.form.get('priceGte')?.value};
    if (this.form.get('priceLte')?.value) where.price = {...where.price, gte: this.form.get('priceLte')?.value};

    let sort: SortInput = {};
    if (this.form.get('sortBy')?.value) sort[this.form.get('sortBy')?.value as keyof SortInput] = this.form.get('sortType')?.value || 'asc';

    let size = 70;
    let maxSize = 500;
    this.flats = [];

    of(this.username).pipe(switchMap(username => username ? this.appService.list(username) : of({}))).pipe(
      map(res => {
        const filtered = Object.entries(res).filter(([id, flat]) => {
          return  (
            (!where.category?.eq || flat.category == where.category?.eq) &&
            (!where.city_id?.eq || flat.city_id == where.city_id?.eq) &&
            (!where.direction_id?.eq || flat.direction_id == where.direction_id?.eq) &&
            (!where.district_id?.inar || where.district_id?.inar && where.district_id?.inar?.findIndex(f => f == flat.district_id) > -1) &&
            (!where.family?.inar || where.family?.inar && where.family?.inar?.findIndex(f => f == flat.family) > -1) &&
            (!where.rent_period?.eq || flat.rent_period == where.rent_period?.eq) &&
            (!where.beds?.inar || where.beds?.inar && where.beds?.inar?.findIndex(f => f == flat.beds) > -1) &&
            (!where.price?.lte || flat.price && where.price?.lte && (flat.price <= where.price?.lte)) &&
            (!where.price?.gte || flat.price && where.price?.gte && (flat.price >= where.price?.gte))
          )
        }
      );
      return filtered.reduce((p: {[id: string]: Flat}, [id, flat]) => {
        p[id] = flat;
        return p;
      }, {});
      }),
      switchMap(storedFlats =>
        this.listGQL.fetch({from: 0, size: size, where: where, sort})
        .pipe(
          switchMap(res => {
            const total = res.data.Web && res.data.Web.find && res.data.Web.find.total && (res.data.Web.find.total < maxSize) ? res.data.Web.find.total : maxSize;
            const pages = Array.from(new Array(Math.ceil(total/70) - 1));
            return forkJoin([of(res), ...pages.map((_, i) => this.listGQL.fetch({from: (i+1)*size, size: size, where: where, sort}))]);
          }),
          map(res => res.map(r => r.data.Web?.find?.listings as Flat[])),
          map(res => new Array().concat(...res)),
          map(res => res.map((flat: Flat) => {
            flat = {
              ...flat,
              rating: storedFlats[flat.id as number] && storedFlats[flat.id as number].rating ? storedFlats[flat.id as number].rating : 0,
              seen: storedFlats[flat.id as number] ? true : false,
              hide: storedFlats[flat.id as number] && storedFlats[flat.id as number].hide ? storedFlats[flat.id as number].hide : false,
              contact: storedFlats[flat.id as number] && storedFlats[flat.id as number].contact ? storedFlats[flat.id as number].contact : 0,
              favorite: storedFlats[flat.id as number] && storedFlats[flat.id as number].favorite ? storedFlats[flat.id as number].favorite : 0
            }
            delete storedFlats[flat.id as number];
            return flat;
          })),
          map(res => {
            return [
              ...res.map(flat => ({...flat, canceled: false})),
              ...Object.values(storedFlats).map(flat => ({...flat, canceled: true}))
            ]
          }),
          map(res => {
            return res.sort((a, b) => b.rating - a.rating).sort((a, b) => (a.seen === b.seen ? 0 : a.seen ? 1 : -1)).sort((a, b) => (a.canceled === b.canceled ? 0 : a.canceled ? 1 : -1))
          }),
          map(res => {
            return res.filter(flat => 
              {
                return ((this.isEmpty(this.form.get('showHide')?.value) && !flat.hide) &&
                (this.isEmpty(this.form.get('contact')?.value) || this.form.get('contact')?.value == flat.contact) &&
                (this.isEmpty(this.form.get('favorite')?.value) || this.form.get('favorite')?.value == flat.favorite))
              }
            )
          })
        )
      )
    )
    .subscribe(res => {
      this.flats = res;
      this.loading = false;
    }, (error) => {
      this.loading = false;
    });
  }

  rate(rating: number, flat: Flat) {
    if (!this.username) return;
    if (rating == flat.rating) rating = 0;
    return this.appService.update(this.username, {...flat, rating}).subscribe(res => {
      flat.rating = rating;
    });
  }

  hide(hide: boolean, flat: Flat) {
    if (!this.username) return;
    return this.appService.update(this.username, {...flat, hide}).subscribe(res => {
      flat.hide = hide;
      this.flats = this.flats?.filter(flat => this.isEmpty(this.form.get('showHide')?.value) && !flat.hide)
    });
  }

  contact(contact: number, flat: Flat) {
    if (!this.username) return;
    return this.appService.update(this.username, {...flat, contact}).subscribe(res => {
      flat.contact = contact;
      this.flats = this.flats?.filter(flat => this.isEmpty(this.form.get('contact')?.value) || this.form.get('contact')?.value == flat.contact)
    });
  }

  favorite(favorite: number, flat: Flat) {
    if (!this.username) return;
    return this.appService.update(this.username, {...flat, favorite}).subscribe(res => {
      flat.favorite = favorite;
      this.flats = this.flats?.filter(flat => this.isEmpty(this.form.get('favorite')?.value) || this.form.get('favorite')?.value == flat.favorite)
    });
  }

  openLoginDialog(template: TemplateRef<any>) {
    this.loginDialogRef = this.dialog.open(template);
  }

  login(input: HTMLInputElement) {
    if (!input.value.trim()) return;
    this.username = input.value.trim();
    localStorage.setItem('username', this.username);
    this.loginDialogRef?.close();
    this.flats = undefined;
  }

  logout() {
    localStorage.removeItem('username');
    this.username = null;
    this.flats = undefined;
  }

  isEmpty(value: string) {
    return value === null || value === undefined || value === '';
  }
}