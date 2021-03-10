import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { concat, forkJoin, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  public search = {districts: [600,632,536,570,504,664,598,522,404,514,610,404,706,482,704,416,620,532,396,614,454,438,582,464,526,450,494,574,596,538], rentPeriod: 3, beds: 3, age: 3, priceGte: 30000, priceLte: 40000};

  constructor(private http: HttpClient, private apollo: Apollo) {}

  list() {
    return forkJoin([
      // this.http.get<{[id: string]: Flat}>(`${environment.baseUrl}/rating`),
      // this.http.get<{[id: string]: boolean}>(`${environment.baseUrl}/seen`),
      this.http.get<{[id: string]: Flat}>(`${environment.baseUrl}/flats`),
    ]).pipe(
      switchMap(([storedFlats]) => {
      return this.listAgar().pipe(
        switchMap((find: Find) => {
          const total = find && find.total ? find.total : 0;
          const observables = [of(find.listings)];
          const pages = Array.from(new Array(Math.ceil(total/70) - 1));
          console.log(pages);
          
          pages.forEach((page, i) => {
            observables.push(this.listAgar(i+1).pipe(map(find => find.listings)));
            console.log(i+1);
          });

          return forkJoin(observables).pipe(map((res: any[]) => [].concat(...res)));
  
        }),
        map(res => res.map((flat: Flat) => {
          flat = {...flat, rating: storedFlats[flat.id] && storedFlats[flat.id].rating ? storedFlats[flat.id].rating : 0, seen: storedFlats[flat.id] ? true : false}
          delete storedFlats[flat.id];
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
        tap(flats => {
          console.log(storedFlats);
          
          let seen$: any[] = [];
          flats.forEach((flat: Flat) => {
            seen$.push(this.http.post(`${environment.baseUrl}/flats`, flat));
          });
          concat(...seen$).subscribe();
        })
      )
    }));
  }

  listAgar(page = 0, size = 70) {
    // return this.http.get<Flat[]>(`assets/mock.json`);
    return this.apollo.query({
      query: gql`
        {
          Web {
            find(
              where: {
                category: { eq: 1 }
                district_id: { inar: ${JSON.stringify(this.search.districts)} }
                rent_period: { eq: ${this.search.rentPeriod} }
                beds: { eq: ${this.search.beds} }
                family: { eq: 1 }
                age: { lte: ${this.search.age} }
                price: { gte: ${this.search.priceGte}, lte: ${this.search.priceLte} }
              }
              sort: { create_time: desc, has_img: desc }
              size: ${size}
              from: ${page * 70}
            ) {
              listings {
                id
                imgs
                has_video
                videos {
                  video
                  thumbnail
                  orientation
                }
                address
                content
                price
                refresh
                category
                path
                title
                rent_period
                district
                direction
                city
                direction_id
                district_id
                city_id
                user_id
                uri
                status
                ac
                age
                apts
                area
                backyard
                basement
                beds
                car_entrance
                content
                driver
                duplex
                extra_unit
                family
                family_section
                fb
                fl
                furnished
                ketchen
                lift
                livings
                maid
                meter_price
                playground
                pool
                price
                rent_period
                rooms
                stairs
                stores
                street_direction
                street_width
                tent
                trees
                type
                vb
                wc
                wells
                premium
                native {
                  logo
                  title
                  image
                  description
                  external_url
                }
                location {
                  lat
                  lng
                }
                videos {
                  video
                  thumbnail
                  orientation
                }
              }
              total
            }
          }
        }
      `,
    }).pipe(
      map((res: any) => {
        let listings: any[] = [];
        let total: number = 0;
        if (res && res.data && res.data.Web && res.data.Web.find && res.data.Web.find.listings && res.data.Web.find.listings.length > 0) {
          listings = res.data.Web.find.listings as Flat[];
        }

        if (res && res.data && res.data.Web && res.data.Web.find && res.data.Web.find.total) {
          total = res.data.Web.find.total;
        }

        return {listings, total};
      })
    );
  }

  updateFlat(flat: Flat) {
    return this.http.post(`${environment.baseUrl}/flats`, flat);
  }

  listDistricts() {
    return this.http.get<any[]>(`assets/districts.json`);
  }
}


export interface Find {
  listings: Flat[];
  total: number;
}

export interface Flat {
  __typename: string;
  id: number;
  imgs: string[];
  has_video: number;
  videos?: any;
  address: string;
  content: string;
  price: number;
  refresh: number;
  category: number;
  path: string;
  title: string;
  rent_period: number;
  district: string;
  direction: string;
  city: string;
  direction_id: number;
  district_id: number;
  city_id: number;
  user_id: number;
  uri: string;
  status?: any;
  ac: number;
  age: number;
  apts?: any;
  area?: any;
  backyard?: any;
  basement?: any;
  beds: number;
  car_entrance: number;
  driver?: any;
  duplex?: any;
  extra_unit: number;
  family: number;
  family_section?: any;
  fb?: any;
  fl: number;
  furnished: number;
  ketchen: number;
  lift: number;
  livings: number;
  maid?: any;
  meter_price?: any;
  playground?: any;
  pool?: any;
  rooms?: any;
  stairs?: any;
  stores?: any;
  street_direction?: any;
  street_width?: any;
  tent?: any;
  trees?: any;
  type?: any;
  vb?: any;
  wc: number;
  wells?: any;
  premium: number;
  native?: any;
  location: Location;

  rating: number;
  seen: boolean;
  canceled: boolean;
}

interface Location {
  __typename: string;
  lat: number;
  lng: number;
}