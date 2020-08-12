import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { ContactPreviewComponent } from './components/contact-preview/contact-preview.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ChartComponent } from './components/chart/chart.component';
import { ContactFilterComponent } from './components/contact-filter/contact-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MovesComponent } from './components/moves/moves.component';
import { ElModule } from 'element-angular'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AvatarModule } from 'ngx-avatar';
// import {Chart} from 'chart.js';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    ContactDetailsPageComponent,
    StatisticsPageComponent,
    ContactPreviewComponent,
    ContactListComponent,
    ChartComponent,
    ContactFilterComponent,
    SignUpPageComponent,
    HeaderComponent,
    FooterComponent,
    MovesComponent,
    // Chart
    
    

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleChartsModule,
    ElModule.forRoot(),
    SweetAlert2Module.forRoot(),
    AvatarModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
