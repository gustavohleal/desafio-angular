import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private http:HttpClient,
    private router: Router
  ) { }

  private baseUrl = environment.apiURL;
  private headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
  
  private requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders  (this.headerDict), 
  };

  getFormOptions(){
    let url = `${this.baseUrl}/formulario`;
    return this.http.get(url, this.requestOptions)
      .pipe(
        map(data=>data)
      )    
  }

  getFileURL(name:string){
    let url = `${this.baseUrl}/arquivo/${name}`;

    return url;
  }
}
