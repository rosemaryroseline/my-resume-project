import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignInComponent } from './Sign-up__Sign-in/sign-in/sign-in.component';
import { MainResumeComponent } from './main-resume/homes.component';
import { MyHobbiesComponent } from './AboutUs/my-hobbies/my-hobbies.component';
import { ContactComponent } from './contact/contact.component';
import { QualificationComponent } from './Career/qualification/qualification.component';
import { MyTechnicalSkillsComponent } from './Career/my-technical-skills/my-technical-skills.component';
import { CareerComponent } from './Career/career/career.component';
import { AboutComponent } from './AboutUs/about/about.component';
import { ForgotPasswordComponent } from './Sign-up__Sign-in/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Sign-up__Sign-in/reset-password/reset-password.component';
import { AuthServiceGuard } from './service/auth-service.guard';
import { ExperienceComponent } from './Career/experience/experience.component';


const routes: Routes = [{path:'sign-in',component:SignInComponent,
},
{path:'sign-in/forgot-password',component:ForgotPasswordComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:MainResumeComponent},
  {path:'my-hobbies',component:MyHobbiesComponent,
    // children:[{path:'hobby',component:HobbiesDetailsComponent}]
  },
  {path:'qualification',component:QualificationComponent},
  {path:'skills',component:MyTechnicalSkillsComponent},
  {path:'career',component:CareerComponent},
  {path:'about',component:AboutComponent},
  {path:'experience',component:ExperienceComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
