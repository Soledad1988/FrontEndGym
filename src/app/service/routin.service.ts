import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Routine } from '../models/Routine';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutinService {
  
  URL = 'http://localhost:8080/routine';

  constructor(private httpClient: HttpClient) { }

  createRoutine(routine: Routine): Observable<Routine> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<Routine>(this.URL, routine, { headers });
  }

  getRoutine(): Observable<Routine[]> {
    return this.httpClient.get<Routine[]>(this.URL);
  }

  assignCategoryToRoutine(idCategory: number, routine: Routine): Observable<Routine> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<Routine>(`${this.URL}/assign/${idCategory}`, routine, { headers });
  }
}
