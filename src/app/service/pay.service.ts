import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PayService {

  URL = 'http://localhost:8080/fee';

  constructor(private httpClient: HttpClient) { }

  assignFeeToCustomer(customerId: number, feeData: any): Observable<any> {
    return this.httpClient.post<any>(`${this.URL}/assign/${customerId}`, feeData);
  }
}
