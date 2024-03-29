import { Injectable } from '@angular/core';
import { User } from '../../layouts/dashboard/pages/users/models';
import {  of,delay, Observable, tap } from 'rxjs';
import { AlertsService } from './alerts.service';

const ROLES_DB:string[]=['Profesor', 'Alumno']

let USERS_DB:User[]=[

  {
    id: 1,
    firstName:'Micaela',
    lastName:'Perez',
    dni: 306498878,
    email:'Perez@mail.com',
    password:'654985',
    role:'Profesor'
  },
  {
    id: 2,
    firstName:'Esteban',
    lastName:'Baez',
    dni:386484545,
    email:'Baez@mail.com',
    password:'656547',
    role:'Alumno'
  },

];

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private alerts:AlertsService) { }

  getRoles():Observable<string[]>{
    return of(ROLES_DB).pipe(delay(1000))
  }

getUsers(){
  return of(USERS_DB).pipe(delay(2000));
}
createUSer(payload:User){
USERS_DB.push(payload);
return this.getUsers();
}


deleteUser(userID:number) {
 USERS_DB = USERS_DB.filter((user) => user.id !== userID);
 return this.getUsers().pipe(tap(()=> this.alerts.showSuccess('Realizado', 'Se elimino correctamente')));
}

}
