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
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminPageComponent } from './Admin/admin-page/admin-page.component';
import { DispatchComponent } from './Admin/dispatch/dispatch.component';
import { PaymentComponent } from './Admin/payment/payment.component';
import { DeliveryFormComponent } from './Pages/delivery-form/delivery-form.component';
import { DriverProfileComponent } from './Pages/driver-profile/driver-profile.component';
import { DriverDeliveryComponent } from './Pages/driver-delivery/driver-delivery.component';
import { FileUploadComponent } from './Pages/file-upload/file-upload.component';
import { DriverDispatchComponent } from './Pages/driver-dispatch/driver-dispatch.component';
import { DriverPaymentComponent } from './Pages/driver-payment/driver-payment.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: "home", component: HomeComponent },
  {path: 'landing', component: LandingComponent},
  {path:'aboutUs', component: AboutUsComponent},
  {path:'features', component: FeaturesComponent},
  {path:'services', component: ServicesComponent},
  {path:'contacts', component: ContactComponent},
  {path:'registration', component: RegistrationComponent},
  {path:'signUp', component: SignUpComponent},
  {path:'delivery', component: DeliveryComponent, canActivate: [AuthGuard]},
  {path:'driver', component: DriverComponent},
  {path:'login', component:Login3Component},
  {path:'fileUpload', component:FileUploadComponent},
  {path:'adminLogin', component:AdminLoginComponent},
  {path:'adminPage', component:AdminPageComponent, canActivate: [AuthGuard] },
  {path:'dispatch', component:DispatchComponent, canActivate: [AuthGuard] },
  {path:'payment', component:PaymentComponent, canActivate: [AuthGuard] },
  {path:'adminPage/:deliveryNo', component:AdminPageComponent, canActivate: [AuthGuard] },
  {path:'dispatch/:deliveryNo', component:DispatchComponent, canActivate: [AuthGuard] },
  {path:'driverDispatch/:dispatchName', component:DriverDispatchComponent, canActivate: [AuthGuard] },
  {path:'driverPayment/:deliveryNo', component:DriverPaymentComponent, canActivate: [AuthGuard] },
  {path:'payment/:deliveryNo', component:PaymentComponent, canActivate: [AuthGuard] },
  {path:'profile', component:ProfileComponent, canActivate: [AuthGuard] },
  {path:'driverProfile', component:DriverProfileComponent, canActivate: [AuthGuard] },
  {path:'openDelivery/:name', component:DeliveryFormComponent, canActivate: [AuthGuard] },
  {path:'driverDelivery', component:DriverDeliveryComponent, canActivate: [AuthGuard] },







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
