import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoustumerComponent } from './Components/coustumer/coustumer.component';
import { AppComponent } from './app.component';
import { PayComponent } from './Components/pay/pay.component';

const routes: Routes = [
  { path: '', redirectTo: '/customer', pathMatch: 'full' },
  //{ path: 'customer', component: AppComponent },
  { path: 'customer', component: CoustumerComponent },
  { path: 'pay/:id', component: PayComponent },
  // Agrega otras rutas según tus necesidades
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
