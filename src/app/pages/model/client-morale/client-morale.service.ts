import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientMorale } from '../../entities/clientMorale';

@Injectable({
  providedIn: 'root'
})
export class ClientMoraleService {

  constructor( private http: HttpClient) { }


  getClientMorales(): Observable<ClientMorale[]>{
    return this.http.get<[ClientMorale]>("http://localhost:8080/clientMorales")
  }
}
