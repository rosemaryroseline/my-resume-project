import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../../service/registration.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
myform!:FormGroup

constructor(private rout:Router,private fb:FormBuilder,private service:RegistrationService){
this.myform=this.fb.group({
  email:['']
})
}
onForgotPassword(){
  const email=this.myform.value.email
  this.service.forgotPassword(email).subscribe((res)=>{
    console.log(res,'forgot password...........')
    alert('Please check your email for password reset instructions');
    this.rout.navigate(['/sign-in'])
  })
}
}
