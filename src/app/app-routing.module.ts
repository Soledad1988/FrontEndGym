import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoustumerComponent } from './Components/coustumer/coustumer.component';
import { AppComponent } from './app.component';
import { PayComponent } from './Components/pay/pay.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'customer', component: CoustumerComponent },
  { path: 'pay/:id', component: PayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
