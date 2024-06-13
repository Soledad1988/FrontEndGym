import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importa BrowserAnimationsModule
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { CoustumerComponent } from './Components/coustumer/coustumer.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { CustomerService } from './service/customer.service';

@NgModule({
  declarations: [
    AppComponent,
    CoustumerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Agrega BrowserAnimationsModule aquí
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule, // Agrega tu módulo de Angular Material aquí
    MatIconModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
