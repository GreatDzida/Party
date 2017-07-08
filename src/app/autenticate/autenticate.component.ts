import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autenticate',
  templateUrl: './autenticate.component.html',
  styleUrls: ['./autenticate.component.css']
})
export class AutenticateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
