import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/Category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  URL = 'http://localhost:8080/category';

  constructor(private httpClient: HttpClient) { }

  createCategory(category: Category): Observable<Category> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<Category>(this.URL, category, { headers });
  }

  getCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.URL);
  }
}
