import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { clientPhysique } from '../../entities/clientPhysique';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AppComponent } from 'app/app.component'

@Injectable({
  providedIn: 'root'
})
export class ClientPhysiqueService {
  public  httpBackEndServer = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  /** GET ClientPhysiques from the server */
  getClientPhysiques(): Observable<clientPhysique[]>{
    return this.http.get<[clientPhysique]>(this.httpBackEndServer + 'clientPhysiques')
  }


}
