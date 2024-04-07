import { Injectable } from "@angular/core";
import { delay, finalize, of ,mergeMap} from "rxjs";
import { Curso } from "./models";
import { LoadingService } from "../../../../core/services/loading.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../environments/environment";


let cursos:Curso[]=[

];


@Injectable( )
export class CursosService{

    constructor(private loadingService:LoadingService, private httpClient:HttpClient){}

getCursos(){
this.loadingService.setIsLoading(true);
return this.httpClient.get<Curso[]>(`${environment.apiURL}/cursos`).pipe(delay(1200),
finalize(()=>this.loadingService.setIsLoading(false)));

}

createCurso(payload: Curso){
    return this.httpClient.post<Curso>(`${environment.apiURL}/cursos` ,payload)
    .pipe(mergeMap(() => this.getCursos()));
}

deleteCursoById(cursoID:number){

    return this.httpClient.delete<Curso>
    (`${environment.apiURL}/cursos/${cursoID}`)
    .pipe(mergeMap(() => this.getCursos()));
    }
    

updateCursoById(id: number, data: Curso) {
    return this.httpClient.put<Curso>(`${environment.apiURL}/cursos/${id}`, data)
        .pipe(
            mergeMap(() => this.getCursos())
        );
}
}
