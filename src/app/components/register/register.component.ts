import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string ='';
  email: string = '';
  password: string= '';
  phone: string= '';
  fullName: string= '';
  gender: string= '';
  blacklisted:boolean = false;
  enableCampaign: boolean = true;
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  register(){
    let userData = {
      username: this.username,
      email:this.email,
      password:this.password,
      phone:this.phone,
      gender:this.gender,
      fullName:this.fullName,
      blacklisted: this.blacklisted,
      enableCampaign: this.enableCampaign

    }
    this.authService.register(userData).subscribe((response)=>{
      console.log('Registration successful:', response);
    }, (error)=>{
      console.log('Error while registration: ', error);
    }
    
    )
  }
  saveRegister(){

  }
}
