import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from '../../../../../environments/environment';
import {CreateInscriptionData , Inscription } from "./model";


@Injectable({ providedIn: 'root' }) 
export class InscriptionService {
    constructor(private http: HttpClient) {}

createInscription(data: CreateInscriptionData
){
    return this.http.post<Inscription>(`${environment.apiURL}/inscription`, data)
}

}

