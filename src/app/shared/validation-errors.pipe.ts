import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors} from '@angular/forms';

@Pipe({
  name: 'validationErrors'
})
export class ValidationErrorsPipe implements PipeTransform {

  transform(errors?:ValidationErrors | null, ...args: unknown[]): unknown {

    console.log(errors);
  
    if (!!errors){
    

    if(errors['required']) return ('Este campo es requerido');
    if(errors['email']) return ('No es un email valido');
      
   } return null;

  }

}
