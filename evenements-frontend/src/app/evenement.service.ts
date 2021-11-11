import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evenement } from './evenement';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  constructor(private http: HttpClient) { }
  

  private baseUrl = "http://localhost:8083/evenements";



  headers = new HttpHeaders( {
    authorization : 'Basic ' + window.btoa("youssef:p@ssword!"),
});



  getEvenements(): Observable<Evenement[]>{
    return this.http.get<Evenement[]>(`${this.baseUrl}/`, {headers:this.headers});
  }


  addEvenement(evenement: Evenement): Observable<Evenement> {
    return this.http.post<Evenement>(`${this.baseUrl}/add`, evenement, {headers:this.headers});
  }

}
