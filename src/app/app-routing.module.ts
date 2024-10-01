import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainResumeComponent } from './main-resume/main-resume.component';
import { MyHobbiesComponent } from './AboutUs/my-hobbies/my-hobbies.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './sign-in/guard/auth.guard';
import { QualificationComponent } from './Career/qualification/qualification.component';
import { MyTechnicalSkillsComponent } from './Career/my-technical-skills/my-technical-skills.component';
import { CareerComponent } from './Career/career/career.component';
import { HobbiesDetailsComponent } from './AboutUs/hobbies-details/hobbies-details.component';
import { AboutComponent } from './AboutUs/about/about.component';
import { ScripturesComponent } from './AboutUs/scriptures/scriptures.component';


const routes: Routes = [{path:'sign-in',component:SignInComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:MainResumeComponent},
  {path:'my-hobbies',component:MyHobbiesComponent,
    // children:[{path:'hobby',component:HobbiesDetailsComponent}]
  },
  {path:'qualification',component:QualificationComponent},
  {path:'skills',component:MyTechnicalSkillsComponent},
  {path:'career',component:CareerComponent},
  {path:'about',component:AboutComponent},
  {path:'hobby',component:HobbiesDetailsComponent},
  {path:'scripture',component:ScripturesComponent},

  {path:'contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
