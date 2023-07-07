import { AboutUsComponent } from './Pages/About Us/about-us/about-us.component';
import { HomeComponent } from './Pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Pages/landing/landing.component';
import { FeaturesComponent } from './Pages/features/features/features.component';
import { ServicesComponent } from './Pages/ourServices/services/services.component';
import { ContactComponent } from './Pages/contact/contact/contact.component';
import { RegistrationComponent } from './Pages/Register/registration/registration.component';
import { DeliveryComponent } from './Pages/delivery/delivery.component';
import { DriverComponent } from './Pages/driver/driver.component';
import { Login3Component } from './Pages/login3/login3.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: "home", component: HomeComponent },
  {path: 'landing', component: LandingComponent},
  {path:'aboutUs', component: AboutUsComponent},
  {path:'features', component: FeaturesComponent},
  {path:'services', component: ServicesComponent},
  {path:'contact', component: ContactComponent},
  {path:'registration', component: RegistrationComponent},
  {path:'delivery', component: DeliveryComponent, canActivate: [AuthGuard]},
  {path:'driver', component: DriverComponent},
  {path:'login3', component:Login3Component},
  {path:'profile', component:ProfileComponent, canActivate: [AuthGuard] },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
