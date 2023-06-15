import { AboutUsComponent } from './Pages/About Us/about-us/about-us.component';
import { HomeComponent } from './Pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Pages/landing/landing.component';
import { FeaturesComponent } from './Pages/features/features/features.component';
import { ServicesComponent } from './Pages/ourServices/services/services.component';
import { ContactComponent } from './Pages/contact/contact/contact.component';
import { RegistrationComponent } from './Pages/Register/registration/registration.component';
import { LoginComponent } from './Pages/logIn/login/login.component';
import { DeliveryComponent } from './Pages/delivery/delivery.component';
import { UserDetailsComponent } from './Pages/user-details/user-details.component';
import { AuthGuard } from './auth.guard';
import { SecurityComponent } from './security/security.component';
import { SignInTokenComponent } from './Pages/sign-in-token/sign-in-token.component';
import { AccessDataLoadComponent } from './Pages/access-data-load/access-data-load.component';
import { DriverComponent } from './Pages/driver/driver.component';
import { UserPageComponent } from './Pages/user-page/user-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: "home", component: HomeComponent },
  {path: 'landing', component: LandingComponent},
  {path: "login", component:LoginComponent},
  {path:'aboutUs', component: AboutUsComponent},
  {path:'features', component: FeaturesComponent},
  {path:'services', component: ServicesComponent},
  {path:'contact', component: ContactComponent},
  {path:'registration', component: RegistrationComponent},
  {path:'delivery', component: DeliveryComponent},
  {path:'driver', component: DriverComponent},
  {path:'security', component: SecurityComponent},
  {path:'signInToken', component: SignInTokenComponent},
  {path:'accessData', component:AccessDataLoadComponent},
  {path:'userPage', component:UserPageComponent, canActivate: [AuthGuard]},
  {path:'userDetails', component: UserDetailsComponent, canActivate: [AuthGuard] },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
