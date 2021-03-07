import { Component } from '@angular/core';
import { AppService, Flat } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aqar';

  public flats: Flat[] = [];
  public aqarCount: number = 0;

  constructor(
    private appService: AppService,
  ) {}

  ngOnInit() {
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
