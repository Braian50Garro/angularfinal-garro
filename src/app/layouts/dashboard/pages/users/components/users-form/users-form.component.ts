import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrl: './users-form.component.scss'
})
export class UsersFormComponent {
  userForm:FormGroup

@Output()
userSubmitted = new EventEmitter();
  
constructor(private fb:FormBuilder){
  this.userForm =this.fb.group({
    firstName:this.fb.control('', Validators.required),
    lastName:this.fb.control('', Validators.required),
    dni:this.fb.control('',Validators.required),
    email:this.fb.control('', Validators.required),
    password:this.fb.control('', Validators.required),
    role:this.fb.control(''),
  });
}
  onSubmit():void{
    if (this.userForm.invalid){
      this.userForm.markAllAsTouched();
    }else{
      this.userSubmitted.emit(this.userForm.value);
      this.userForm.reset();
    }
    
  }

}