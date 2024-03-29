import { TestBed } from "@angular/core/testing"
import { CursosService } from "./cursos.services"

describe('Pruebas de CursosService',() =>{

    let cursosService:CursosService;


    beforeEach(() =>{
        TestBed.configureTestingModule({
            providers:[CursosService]
        })

        cursosService =TestBed.inject(CursosService);
    })

it ('CursosService debe estar definido', () =>{
    expect(cursosService).toBeTruthy();
})

})