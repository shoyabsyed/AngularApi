import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }

  public getGrounds(){
    return this.httpClient.get("http://playaat.com/api/grounds/cricket");
  }

  public getUsers(){
    return this.httpClient.get("https://jsonplaceholder.typicode.com/users");
  }
}

// export class ApiService {

//   httpClient;

//   constructor(httpClient: HttpClient) {
//     this.httpClient  = httpClient;
//   }

//   getGrounds(){
//     this.httpClient
//   }
// }
