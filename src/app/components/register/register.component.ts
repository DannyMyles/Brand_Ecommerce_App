import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username  ='';
  email  = '';
  password = '';
  phone = '';
  fullName = '';
  gender = '';
  blacklisted = false;
  enableCampaign  = true;
  isAdmin  = false
  constructor(private authService : AuthService, private router: Router) { }

  registerData = {
      username: this.username,
      email:this.email,
      password:this.password,
      phone:this.phone,
      gender:this.gender,
      fullName:this.fullName,
      blacklisted: this.blacklisted,
      enableCampaign: this.enableCampaign,
      isAdmin: this.isAdmin
  }
  ngOnInit(): void {
  }

  registerUser(){
    this.authService.register(this.registerData).subscribe((response)=>{
      console.log('Registration successful:', response);
      // this.router.navigate(['/dashboard'])
    }, (error)=>{
      console.log('Error while registration: ', error);
    }
    
    )
  }
}
