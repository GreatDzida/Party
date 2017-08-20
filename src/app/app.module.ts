import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main/main.component';
// import { RouterModule }   from '@angular/router';
import { AppRoutingModule }     from './app-routing.module';
import { AutenticateComponent } from './autenticate/autenticate.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AutenticateComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    NgbModule.forRoot(),
    HttpModule,
//     RouterModule.forRoot([
//   {
//     path: 'main',
//     component: MainComponent
//   }
// ])
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
