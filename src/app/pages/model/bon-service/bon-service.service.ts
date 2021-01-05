import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { retry } from 'rxjs/operators';
import { AppComponent } from 'app/app.component';
import { BonService } from '../../entities/bonService';


@Injectable({
  providedIn: 'root'
})
export class BonServiceService {
public  httpBackEndServer = "http://localhost:8080/"; ;
  constructor( private http : HttpClient) { }

/** GET BonServices from the server */
  getBonServices(): Observable<BonService[]>{
    return this.http.get<[BonService]>(this.httpBackEndServer + 'bonservices')
  }

/** POST: Add BonService to  the database */
addBonService(bonService : BonService): Observable<any>{
    return  this.http.post(this.httpBackEndServer + 'bonservice', bonService);
}

/** GET bonservice by id. Will 404 if id not found */
getBonService(id:number):Observable<BonService>{
  const url = `${this.httpBackEndServer + 'audience/?id='}${id}`;
  return this.http.get<BonService>(url);

}
/** DELETE: delete The BonService from the server */
deleteBonService(bonService: BonService | number):Observable <BonService>{
  const id = typeof bonService === 'number' ? bonService : bonService.id;
  const url = `${this.httpBackEndServer + 'bonservice/?id='}${id}`;
  return this.http.delete<BonService>(url)

}

/** PUT: update The BonService on the server */
updateBonService(bonService : BonService): Observable<any> {
  return this.http.put(this.httpBackEndServer + 'bonservice', bonService)
}

/** Get BonServices whose number contains search term  */
searchBonServices(term : string): Observable<BonService[]> {
  return this.http.get<BonService[]>(this.httpBackEndServer+`bonservicesearch/?numBS=${term}` )
}

}

