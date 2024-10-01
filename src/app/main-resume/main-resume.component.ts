import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-main-resume',
  templateUrl: './main-resume.component.html',
  styleUrls: ['./main-resume.component.css']
})
export class MainResumeComponent {

  constructor(private service:RegistrationService){

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
