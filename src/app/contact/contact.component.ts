import { Component } from '@angular/core';
import { RegistrationService } from '../service/registration.service';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { Contact } from '../service/registration';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
valid!:FormGroup
myContact:Contact[]=[]
constructor(private service:RegistrationService,private fb:FormBuilder){

}
static customEmailValidator(control: AbstractControl): { [key: string]: any } | null {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const valid = emailRegex.test(control.value);
  return valid ? null : { 'emailInvalid': true };
}
ngOnInit(){
this.valid=this.fb.group({
  name:['',[Validators.required,Validators.minLength(5)]],
  email:['',[Validators.required,ContactComponent.customEmailValidator]],
  message:['',[Validators.required,]]
})
}

  onSubmit(){
    const data:Contact=this.valid.value;
    this.service.contactList(data).subscribe((res)=>{
      console.log(res,'data recievd success')
      this.myContact.push=(this.valid.value);
    })
  }
}
