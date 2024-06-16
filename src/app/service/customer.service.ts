import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  URL = 'http://localhost:8080/customer';

  constructor(private httpClient: HttpClient) { }

  createCustomer(customer: Customer): Observable<Customer> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<Customer>(this.URL, customer, { headers });
  }

  getCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.URL);
  }

  update(idCustomer:number, customer: Customer):Observable<Customer>{
    return this.httpClient.put<Customer>(this.URL+'/'+idCustomer, customer);
  }

  deleteCustomer(idCustomer: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.URL}/${idCustomer}`);
  }

}
