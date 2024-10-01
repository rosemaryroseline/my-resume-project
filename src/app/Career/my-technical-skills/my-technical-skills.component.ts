import { Component } from '@angular/core';

@Component({
  selector: 'app-my-technical-skills',
  templateUrl: './my-technical-skills.component.html',
  styleUrls: ['./my-technical-skills.component.css']
})
export class MyTechnicalSkillsComponent {
  message:string=''
  click(event:Event):void{
this.message='coming soon...!'
  }
}
