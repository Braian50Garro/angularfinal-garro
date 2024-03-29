import {  Injectable } from "@angular/core";
import { User } from "../dashboard/pages/users/models";
import { Router } from "@angular/router";
import { delay, map, of, tap } from "rxjs";
import { AlertsService } from "../../core/services/alerts.service";
import { LoadingService } from "../../core/services/loading.service";

interface LoginData {
    email:null | string;
    password:null | string
}

const MOCK_USER ={

    id:50,
    email:'prueba@mail.com',
    firstName: 'PRUEBANAME',
    dni:3212545,
    lastName: 'PRUEBALASTNAME',
    password: '321321',
    role: 'Profesor',
};

@Injectable({providedIn: 'root'})
export class AuthService {

authUser:User | null = null;

constructor(private router:Router,private alertsService:AlertsService,private loadingService:LoadingService) {}

private setAuthUser(mockUser:User):void{
    this.authUser = mockUser
    localStorage.setItem
    ('token', 'gjaojogñojofefwowemdpdspojgodfoodo545422');
}


    login(data:LoginData): void {
        
        

        if (data.email === MOCK_USER.email 
            && data.password === MOCK_USER.password)
            {
             
               this.setAuthUser(MOCK_USER);
                this.router.navigate(['dashboard', 'home']);
            }else {
                this.alertsService.showError('Email o password invalidos');
            }
   
    }
    logout():void {
        this.authUser = null;
        this.router.navigate(['auth', 'login'])
        localStorage.removeItem('token')
       }

       verifyToken(){
        return of (localStorage.getItem('token'))
        .pipe(delay(1000), map((response) => !!response ),
        tap(() =>{
            this.setAuthUser(MOCK_USER)
        }))
       }
      
}