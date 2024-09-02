import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { CoustumerComponent } from './Components/coustumer/coustumer.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { CustomerService } from './service/customer.service';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PayComponent } from './Components/pay/pay.component';
import {MatButtonModule} from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

//animacion
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './Components/home/home.component';
import { DetailsComponent } from './Components/details/details.component';
import { RoutinComponent } from './Components/routin/routin.component';
@NgModule({
  declarations: [
    AppComponent,
    CoustumerComponent,
    PayComponent,
    HomeComponent,
    DetailsComponent,
    RoutinComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Agrega BrowserAnimationsModule aquí
    ToastrModule.forRoot( {positionClass: 'toast-bottom-center'}),
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    ScrollingModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  
  ],
  providers: [CustomerService],

  bootstrap: [AppComponent]
})
export class AppModule { }
