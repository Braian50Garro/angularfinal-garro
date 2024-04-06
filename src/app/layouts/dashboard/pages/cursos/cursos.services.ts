import { Injectable } from "@angular/core";
import { delay, finalize, of } from "rxjs";
import { Curso } from "./models";
import { LoadingService } from "../../../../core/services/loading.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../environments/environment";
let cursos:Curso[]=[

    {
        id: 1,
        fullName:'Pedro González',
        curseName:'Naturalez',
        createdAt:new Date(),
    },

    {
        id: 2,
        fullName:'Miriam Gómez',
        curseName:'Sociales',
        createdAt:new Date(),
    },
];


@Injectable( )
export class CursosService{

    constructor(private loadingService:LoadingService, private httpClient:HttpClient){}

getCursos(){
this.loadingService.setIsLoading(true);
return this.httpClient.get<Curso[]>(`${environment.apiURL}/cursos`).pipe(delay(1200),finalize(()=>this.loadingService.setIsLoading(false)));

}

createCurso(data: Curso){
    cursos = [...cursos,{...data, id: cursos.length + 1}];
    return this.getCursos();
}

deleteCursoById(id:number){
cursos =cursos.filter((el)=> el.id != id);
return this.getCursos();
}
uptdateCursoById(id:number, data: Curso){
    cursos = cursos.map((el) => (el.id === id ? {...el, ...data} :el ));
    return this.getCursos();
}
}