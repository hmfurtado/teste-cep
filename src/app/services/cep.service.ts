import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CepModel } from '../models/Cep.model';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  apiUrl = 'https://viacep.com.br/ws/';
  jsonUrl = '/json';

  constructor(private http: HttpClient) { }

  public getCep(cep: number): Observable<CepModel> {
    return this.http.get<CepModel>(this.apiUrl + cep + this.jsonUrl);
  }
}
