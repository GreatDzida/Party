import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Hero} from 'app/main/Hero'
import {RegisterService} from 'app/autenticate/register.service'
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-autenticate',
  templateUrl: './autenticate.component.html',
  styleUrls: ['./autenticate.component.css'],
  providers: [RegisterService]

})
export class AutenticateComponent implements OnInit {

   public registerUser = new RegisterUser(); 
   private heroesUrl = 'http://localhost:60196/api/values/5';
   hero : Hero =
   {
     name: 'test'
   }

   constructor(private http:Http,private registerService:RegisterService) {    

  }

  ngOnInit() {
   this.registerUser.Name = "Piotr";
  }


  Autenticate()
  {
    // this.http.get(this.heroesUrl).toPromise().then(response => response.json() as Hero).then(hero => this.hero  = hero);
       var path = "/main";
       //alert(this.registerUser.Surname);

       window.location.href = path;
  }

  CreateAcount()
  {
    //  var path = "/test.html";
  //window.location.href = path;
  //  window.open("test.html", "_blank");
    // this.router.navigate(['./main']);
    // this.http.get(this.heroesUrl).toPromise().then(response => response.json() as Hero).then(hero => this.hero  = hero);
    this.registerService.registerUser(this.heroesUrl).then(hero => this.hero = hero);
  }

}

export class RegisterUser
{
  Name:string;
  Surname:string;
  Phone:string;
  Email:string;
  BirthDate:Date;
  Password:string;
  Gender:string;
}
