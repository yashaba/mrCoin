import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { ChartComponent } from './components/chart/chart.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
    
  },
  {
    path: 'contacts',
    component: ContactPageComponent,
  },
  {
    path: 'contacts/details',
    component: ContactDetailsPageComponent
   },
   {
    path: 'contacts/details/:id',
    component: ContactDetailsPageComponent
    },
    {
      path: 'signup',
      component: SignUpPageComponent
    },
    {
      path: 'charts',
      component: StatisticsPageComponent
    }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
