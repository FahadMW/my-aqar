import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxIndexedDBModule } from 'ngx-indexed-db';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GraphQLModule,
    BrowserAnimationsModule,
    MatButtonModule, MatSelectModule, MatInputModule, MatProgressSpinnerModule, MatDialogModule,
    NgxIndexedDBModule.forRoot({
      name: 'aqarDB',
      version: 1,
      objectStoresMeta: [{
        store: 'flats',
        storeConfig: { keyPath: ['username', 'id'], autoIncrement: false },
        storeSchema: [
          // { name: 'name', keypath: 'name', options: { unique: false } },
          // { name: 'email', keypath: 'email', options: { unique: false } }    
        ]
      }]
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
