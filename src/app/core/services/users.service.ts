import { Injectable } from '@angular/core';
import { User } from '../../layouts/dashboard/pages/users/models';
import {  of,delay, Observable, tap, catchError, mergeMap } from 'rxjs';
import { AlertsService } from './alerts.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

const ROLES_DB:string[]=['PROFESSOR', 'STUDENT']

let USERS_DB:User[]=[

];

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private alerts:AlertsService , private httpClient:HttpClient) { }

  getRoles():Observable<string[]>{
    return of(ROLES_DB).pipe(delay(1000))

  }

getUsers(){

return this.httpClient.get<User[]>
(`${environment.apiURL}/users`)
.pipe(delay(1200));
}
createUSer(payload:User){
return this.httpClient
.post<User>(`${environment.apiURL}/users`, payload)
.pipe(mergeMap(() => this.getUsers()));
}


deleteUser(userID:number) {
 return this.httpClient.delete<User>
 (`${environment.apiURL}/users/${userID}`)
 .pipe(mergeMap(() => this.getUsers()));
}


getAllMaterias():Observable<User[]>{
  return this.httpClient.get<User[]>(
    `${environment.apiURL}/users?role=STUDENT`
  )
}


}