import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegistrationService } from '../../service/registration.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
newPassword:string=''
token:string ='';
constructor(private fb:FormBuilder,private service:RegistrationService,private route:Router,private router:ActivatedRoute){

this.token=this.router.snapshot.queryParamMap.get('token') || '';
}

  onResetPassword(){
    if (!this.token) {
      console.error('Token not provided');
      return;
    }
this.service.resetPassword(this.token,this.newPassword).subscribe((res)=>{
  console.log('password reset done',res)
  alert('password reset successfully try to login')
  this.route.navigate(['/sign-in']);

},error=>{
  console.log(error.error.message);
})
  }
}
