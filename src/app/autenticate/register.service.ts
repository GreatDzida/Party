import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Hero } from 'app/main/Hero';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegisterService {
//   getHeroes(): Promise<Hero[]> {
//     return Promise.resolve(HEROES);
//   }
constructor(private http:Http)
{

}
  // See the "Take it slow" appendix
//   getHeroesSlowly(): Promise<Hero[]> {
//     return new Promise(resolve => {
//       // Simulate server latency with 2 second delay
//       setTimeout(() => resolve(this.getHeroes()), 2000);
//     });
    registerUser(url:string) : Promise<Hero>
    {
       return this.http.get(url).toPromise().then(response => response.json() as Hero);
        
    }
  }