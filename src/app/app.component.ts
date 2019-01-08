import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';


interface ApiResponse {
  status: string
  response: any[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  grounds = [];
  users = [];

  constructor(public api: ApiService) {}

  ngOnInit() {
    this.api.getGrounds().subscribe((apiResponse: ApiResponse) => {
      this.grounds = apiResponse.response;
      console.log(this);
    }, error => {
      console.log({error})
    });

    this.api.getUsers().subscribe( (userResponse: any) => {
      this.users = userResponse;
      console.log(this.users);
    } , error => {
      console.log(error);
    });
  }

}
