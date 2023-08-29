import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskUrl = environment.apiUrl

  // injecting httpclient in the Taskservice
  constructor( private http :HttpClient) { }

  // get users
  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(`${this.taskUrl}/tasks`);
  }

  // get single user
  getTask():Observable<Task>{
    return this.http.get<Task>(`${this.taskUrl}/tasks/1`)
  }

  // create a user (We pass in the user as the payload)
  createUser(user: Task):Observable<Task>{
   return this.http.post<Task>(`${this.taskUrl}/users`, user)
  }
  // When updating a user we pass in the whole request body including the id
  updateUser(user: Task):Observable<Task>{
    return this.http.put<Task>(`${this.taskUrl}/users/${user.id}`, user)
   }
}
