import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [ROUTER_PROVIDERS]
})
export class AppComponent {
  title = 'Party Time!!!';

  constructor(private router: Router)
  {

  }
  Autenticate()
  {
       var path = "/main";
       window.location.href = path;
  }

  CreateAcount()
  {
     var path = "/test.html";
  //window.location.href = path;
   window.open("test.html", "_blank");
    // this.router.navigate(['./main']);
  }
}


// @Component({
//     selector: 'loginForm',
//     templateUrl: 'login.html',
//     providers: [ROUTER_PROVIDERS]
// })

// export class LoginComponent implements OnInit {

//     constructor(private router: Router) { }

//     ngOnInit() {
//         this.router.navigate(['./SomewhereElse']);
//     }

// }