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

  constructor(private http: HttpClient) { }



}
