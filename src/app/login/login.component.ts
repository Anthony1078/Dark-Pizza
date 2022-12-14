import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMessage = 'Credenciales incorrectas';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(private authService: AuthService, private router:Router) {}


  ngOnInit(): void {
  }

  handleLogin() {
    //console.log("click");

    /*
    this.authService.login(this.username, this.password).subscribe((result) => {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Credenciales correctas';

      // redirigimos
      setTimeout(() => {
        this.router.navigate(['inicio']);
      }, 1000);


    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
    */

      if( this.username == "operador" && this.password=="operador" ){
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.successMessage = 'Credenciales correctas';

        // redirigimos
        setTimeout(() => {
          this.router.navigate(['inicio']);
        }, 1000);

      }else{

        this.invalidLogin = true;
        this.loginSuccess = false;

      }


  }

}
