import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-hobbies',
  templateUrl: './my-hobbies.component.html',
  styleUrls: ['./my-hobbies.component.css']
})
export class MyHobbiesComponent {
constructor(private route:Router){

}

  cooking(){
this.route.navigate(['/hobby'])
  }
  scripture(){
    this.route.navigate(['/scripture']);
  }
}
