import { Curso } from "../../cursos/models";
import { User } from "../../users/models";

export interface Inscription{
    id : string | number
    userId :string | number;
    cursoId:string | number;
    user?:User;
    curso?:Curso;
}

export interface CreateInscriptionData{
    userId:string | number | null ;
    cursoId:string | number | null ;
}