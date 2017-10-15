import { Component, OnInit } from '@angular/core';
import {Hero} from './hero'
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {

  private heroesUrl = 'http://localhost:60196/api/values/5';
  hero : Hero =
  {
    name:'Nazwa'
  }
  constructor(private http: Http) {
     this.http.get(this.heroesUrl).toPromise().then(response => response.json() as Hero).catch(this.handleError)
     .then(hero => this.hero = hero);
    //this.hero.name = "test";
    
    
   }

   private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

  ngOnInit() {
    
  }

}
