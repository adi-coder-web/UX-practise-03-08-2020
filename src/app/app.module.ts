import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MyContainer } from './myContainer/myContainer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './myContainer/topnav/topnav.component';
import { Txtsec1Component } from './myContainer/txtsec1/txtsec1.component';
import { Txtsec2Component } from './myContainer/txtsec2/txtsec2.component';
import { HeaderComponent } from './myContainer/header/header.component';
import { EventbindinComponent } from './eventbindin/eventbindin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SplicePushComponent } from './splice-push/splice-push.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CardComponent } from './card/card.component';
import { ChildComponent } from './child/child.component';

const appRoutes:Routes=[
  {path:"",redirectTo:"login",pathMatch:"full"},  
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"product",component:ProductsComponent},
  {path:"contact",component:ContactComponent},
  
  {path:"**",component:PagenotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MyContainer,
    TopnavComponent,
    Txtsec1Component,
    Txtsec2Component,
    HeaderComponent,
    EventbindinComponent,
    SplicePushComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    LoginComponent,
    PagenotfoundComponent,
    CardComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
