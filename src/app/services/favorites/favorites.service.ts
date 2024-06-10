import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private apiUrl: string = environment.API_URL;
  private headersApi: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headersApi = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
  }

  addFavorite(favorite: any): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/favorite`, favorite, {
      headers: this.headersApi,
    });
  }

  getFavoriteRecipes(): Observable<any[]> {
    const id = localStorage.getItem('id');
    return this.http.get<any[]>(`${this.apiUrl}/favorite/account/${id}`, {
      headers: this.headersApi,
    });
  }

  deleteFavorite(idRecipe: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/favorite/${idRecipe}`, {
      headers: this.headersApi,
    });
  }
}
