import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { Contact } from '../registration';

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
customEmailValidator(control: AbstractControl): { [key: string]: any } | null {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const valid = emailRegex.test(control.value);
  return valid ? null : { 'emailInvalid': true };
}
ngOnInit(){
this.valid=this.fb.group({
  Name:['',[Validators.required,Validators.minLength(5)]],
  Email:['',[Validators.required,this.customEmailValidator]],
  Message:['',[Validators.required,]]
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
