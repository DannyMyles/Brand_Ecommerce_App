import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  private user: User = {
    name: 'Muhadi Dancun',
    email: 'm@gamil.ocm',
    gender: 'Female',
    id:11,
  };
  // inject the service that we created
  constructor(private userService: UserService) {}

  // Get all users
  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => {console.log('Data', data);
      (error:any) =>{ console.log(error)}
      () =>{console.log("Done fetching Users")}
    });
  }
  // get single user
  onGetUser(): void {
    this.userService.getUser().subscribe(
      (data) => {console.log('Data', data);
      (error:any) =>{ console.log(error)}
      () =>{console.log("Done fetching USer")}
    });
  }

  // create/post a user
  onCreateUser(): void {
    this.userService.createUser(this.user).subscribe(
      (data) => {console.log('Data', data);
      (error:any) =>{ console.log(error)}
      () =>{console.log("User created Successfully!")}
    });
  }
   // create/post a user
   onUpdateUser(): void {
    this.userService.createUser(this.user).subscribe(
      (data) => {console.log('Data', data);
      (error:any) =>{ console.log(error)}
      () =>{console.log("User created Successfully!")}
    });
  }
  ngOnInit(): void {
    this.onGetUsers();
    // this.onGetUser();
    this.onCreateUser();
    this.onUpdateUser
  }
}
