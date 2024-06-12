import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  URL = 'http://localhost:8080/customer';

  constructor(private httpClient: HttpClient) { }

  createCutomer(customer: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(`${this.URL}`, customer, { headers });
  }

  getCustomer():Observable<any>{
    return this.httpClient.get(this.URL);
  }

}
