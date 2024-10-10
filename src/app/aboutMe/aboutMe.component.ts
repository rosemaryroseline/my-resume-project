import { Component } from '@angular/core';
import { RegistrationService } from '../service/registration.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-aboutMe',
  templateUrl: './aboutMe.component.html',
  styleUrls: ['./aboutMe.component.css']
})
export class HomeComponent {
  message:string=" "
  constructor(private service:RegistrationService,private http:HttpClient){

  }
  ngOnInit():void{
this.http.get('http://localhost:1275/api/user',{
  withCredentials:true
})
.subscribe((res:any)=>{
  this.message=`Hi ${res.name}`;
},(err)=>{
  this.message='You are not logged in'
})
  }

  downloadresume(){
    this.service.downloadFile().subscribe((blob)=>{
      //triggered to download the file
      const a=document.createElement('a');
      //it tells browser to create temporary  the url to download file
      const objectUrl=URL.createObjectURL(blob)
      // This tells the browser that clicking this link will open or download the blob
      a.href=objectUrl
      //downloads file
      a.download='myresume.pdf'
      //the movement we trigger to click it will start download file
      a.click();
      //free up memory which is created by the browser temperory purpose
      URL.revokeObjectURL(objectUrl);
      
    })

  }
}
