import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact, register } from './registration';
import{map} from 'rxjs'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient,private route:Router) { }
 url='http://localhost:2341/register';
 urll='http://localhost:2341/login';
 urlverify='http://localhost:2341/emailVerify';
 urlContact='http://localhost:5231/contact';
 urlfile='http://localhost:6512/downloadFile';
private  urlscripture='http://localhost:6512/read';

  registration(register:register):Observable<any>{
    console.log('data saved',register)
return this.http.post<any>(this.url,register);

  }
  Login(loginData:{email:string,password:string}):Observable<any>{
console.log('logined',loginData)
return this.http.post<any>(this.urll,loginData)
  }

  emailVerification(email:string):Observable<boolean>{
    return this.http.get<boolean>(`${this.urlverify}?email=${email}`)
    
  }

  contactList(data:Contact):Observable<any>{
return this.http.post<any>(this.urlContact,data)
  }

  public downloadFile(): Observable<Blob> {

    return this.http.get(this.urlfile, {
      observe: 'response',
      responseType: 'blob'
    }).pipe(
      map((response: HttpResponse<Blob>) => response.body as Blob)  
    );
  }
  scripturesFile(type: string): Observable<any> {
    return this.http.get(`${this.urlscripture}?type=${type}`, { responseType: 'text' });
  }
  

}
