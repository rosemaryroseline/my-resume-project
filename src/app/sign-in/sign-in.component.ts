import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { register } from '../registration';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  isSignInMode=true
  // isLogedIn:boolean=false
  myform!:FormGroup
  emailExistMessage:string | null=null;
email=''
fullName=''
password=''

registeredData:any[]=[];
register:register[]=[]
constructor(private service:RegistrationService,private fb:FormBuilder){

}
ngOnInit(){
  this.myform=this.fb.group({
    email:[''],
    fullName:[''],
    password:[''],
   
  })
}
toggleSignInSignUp(){
this.isSignInMode=!this.isSignInMode
}
onSignin(){
// console.log('sign in',this.email,this.password)
const signin={email:this.email,password:this.password}
this.service.Login(signin).subscribe((res)=>{
  console.log('login success',res)
  this.registeredData.push(this.email,this.password);
})
}

onSignup(){
  // this.isLogedIn=true
// console.log('signup',this.email,this.fullname,this.password)
const signup:register=this.myform.value
this.service.registration(signup).subscribe((res)=>{
console.log('register success',res)
this.register.push(this.myform.value);
},(error)=>{
  if(error.status===400){
    alert(error.error.message,);
    console.log('user already exist');
  }
})
}

onEmailInput(){
  const email=this.myform.get('email')?.value;
  if(email){
this.service.emailVerification(email).subscribe((exists)=>{
  this.emailExistMessage=exists?'Email Already Exist':null;
},(error)=>{
  console.log('error while checking',error)
})
  }else{
    this.emailExistMessage=null;
  }
}
// checkLoginStatus(): boolean {
//   // return this.isLogedIn;
// }

}
