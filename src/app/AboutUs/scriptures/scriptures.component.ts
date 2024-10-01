import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { RegistrationService } from 'src/app/registration.service';
@Component({
  selector: 'app-scriptures',
  templateUrl: './scriptures.component.html',
  styleUrls: ['./scriptures.component.css']
})
export class ScripturesComponent {
fileContent:string='';
showMessage:boolean=true;
constructor(private service:RegistrationService){

}

  Isaiah(){
this.fetchScripture('Isaiah')
  }
  Proverbs(){
    this.fetchScripture('Proverbs')

  }
  John(){
    this.fetchScripture('John')

  }
  Jeremiah(){
    this.fetchScripture('Jeremiah')

  }
  Deuteronomy(){
    this.fetchScripture('Deuteronomy')

  }
  fetchScripture(type:string){
this.service.scripturesFile(type).subscribe(res=>{
console.log('reading file');
this.fileContent=res
this.showMessage=false;
console.log('closed')
console.log('read');
})
  }
}
