import { ChangeDetectorRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainResumeComponent } from './main-resume/homes.component';
import { MyHobbiesComponent } from './AboutUs/my-hobbies/my-hobbies.component';
import { SignInComponent } from './Sign-up__Sign-in/sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule}from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { QualificationComponent } from './Career/qualification/qualification.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MyTechnicalSkillsComponent } from './Career/my-technical-skills/my-technical-skills.component';
import { CareerComponent } from './Career/career/career.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './AboutUs/about/about.component';
import { ForgotPasswordComponent } from './Sign-up__Sign-in/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Sign-up__Sign-in/reset-password/reset-password.component';
import { HomeComponent } from './aboutMe/aboutMe.component';
import { ExperienceComponent } from './Career/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    MainResumeComponent,
    MyHobbiesComponent,
    SignInComponent,
    ContactComponent,
    QualificationComponent,
    
    MyTechnicalSkillsComponent,
         CareerComponent,
         FooterComponent,
         AboutComponent,
         ForgotPasswordComponent,
         ResetPasswordComponent,
         HomeComponent,
         ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CarouselModule ,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
