import { ProductService } from './Service/productservice';
import { PhotoService } from './Service/photo.service';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MegaMenuModule} from 'primeng/megamenu';
import { HomeComponent } from './Pages/home/home.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AutoTextFeildComponent } from './components/auto-text-feild/auto-text-feild.component';
import { CalenderComponent } from './components/calender/calender.component';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectComponent } from './components/cascade-select/cascade-select.component';
import { CascadeSelectModule } from "primeng/cascadeselect";
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { ChipsComponent } from './components/chips/chips.component';
import { DropdownModule } from 'primeng/dropdown';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputTextAreaComponent } from './components/input-text-area/input-text-area.component';
import { PasswordComponent } from './components/password/password.component';
import { PasswordModule } from "primeng/password";
import { DividerModule } from "primeng/divider";
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { AutoPlayGalleryComponent } from './components/auto-play-gallery/auto-play-gallery.component';
import {GalleriaModule} from 'primeng/galleria';
import {CarouselModule} from 'primeng/carousel';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {SliderModule} from 'primeng/slider';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ProgressBarModule} from 'primeng/progressbar';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './Pages/landing/landing.component';
import { StyleClassModule } from 'primeng/styleclass';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { AutoGalleryComponent } from './components/auto-gallery/auto-gallery.component';
import { AboutUsComponent } from './Pages/About Us/about-us/about-us.component';
import { FeaturesComponent } from './Pages/features/features/features.component';
import { ContactComponent } from './Pages/contact/contact/contact.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { RegistrationComponent } from './Pages/Register/registration/registration.component';
import { DeliveryComponent } from './Pages/delivery/delivery.component';
import { UsersService } from './Service/users.service';
import { CardModule } from 'primeng/card';
import { DriverComponent } from './Pages/driver/driver.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { UserProfileCarouselComponent } from './components/user-profile-carousel/user-profile-carousel.component';
import { LocalStorageService } from './Service/local-storage.service';
import { AuthInterceptor } from './auth.interceptor';
import { Login3Component } from './Pages/login3/login3.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { DeliveryFormComponent } from './Pages/delivery-form/delivery-form.component';
import { AuthenticationService } from './Service/authentication.service';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AutoTextFeildComponent,
    CalenderComponent,
    CascadeSelectComponent,
    CheckboxComponent,
    ChipsComponent,
    DropDownComponent,
    HomeComponent,
    InputTextComponent,
    InputTextAreaComponent,
    PasswordComponent,
    RadioButtonComponent,
    AutoPlayGalleryComponent,
    LandingComponent,
    AutoGalleryComponent,
    AboutUsComponent,
    FeaturesComponent,
    ContactComponent,
    ImageUploadComponent,
    RegistrationComponent,
    DeliveryComponent,
    DriverComponent,
    AccordionComponent,
    DialogComponent,
    UserProfileCarouselComponent,
    Login3Component,
    ProfileComponent,
    DeliveryFormComponent,
    
    
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    ButtonModule,
    MegaMenuModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    HttpClientModule,
    CalendarModule,
    CascadeSelectModule,
    CheckboxModule,
    ChipsModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    PasswordModule,
    DividerModule,
    RadioButtonModule,
    GalleriaModule,
    TableModule,
    SliderModule,
    DialogModule,
    ContextMenuModule,
    ToastModule,
    ProgressBarModule,
    CarouselModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    ConfirmDialogModule,
    MenubarModule,
    PanelModule,
    ChartModule,
    StyleClassModule,
    CommonModule,
    FileUploadModule, 
    ReactiveFormsModule,
    CardModule,
    CommonModule,
    AccordionModule


  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap:    [ AppComponent ],


  providers: [ 
    PhotoService, 
    ProductService, 
    ConfirmationService, 
    MessageService, 
    UsersService,
    LocalStorageService,
    AuthenticationService,
  
{  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}
    
   ]


})

export class AppModule { }
