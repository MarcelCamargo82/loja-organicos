import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private apiUrl = 'http://localhost:5000/produtos'; // URL da API Flask

  constructor(private http: HttpClient) {}

  // Método para obter os produtos da API
  getProdutos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
