import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string ='';
  email: string = '';
  password: string= '';

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.username,this.email, this.password).subscribe(
      user => {
        // store user in the local storage
        localStorage.setItem('currentUser', JSON.stringify(user));

        // this.router.navigate(['/dashboard']);
      }
    );
  }
}
