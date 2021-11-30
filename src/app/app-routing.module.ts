import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccomodationComponent } from './accomodation/accomodation.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { OffersComponent } from './offers/offers.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { RestaurantComponent } from './food-and-beverage/restaurant/restaurant.component';
import { BarsComponent } from './food-and-beverage/bars/bars.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { ResortActivitiesComponent } from './lifestyle/resort-activities/resort-activities.component';
import { WelnessAndSpaComponent } from './lifestyle/welness-and-spa/welness-and-spa.component';
const routes: Routes = [
  { path: 'accomodation', component: AccomodationComponent },
  { path: 'celebrations', component: CelebrationsComponent },
  { path: 'food-and-beverage', component: FoodAndBeverageComponent },
  { path: 'foodandbeverage',
    redirectTo: 'food-and-beverage',
    pathMatch: 'full' },
  { path: 'lifestyle', component: LifestyleComponent },
  { path: 'weddings', component: WeddingsComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  {path: 'forgot', component: ForgotComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'restaurant', component: RestaurantComponent},
  {path: 'bars', component: BarsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'excursions', component: ExcursionsComponent},
  {path: 'resort-activities', component: ResortActivitiesComponent},
  {path: 'welness-and-spa', component: WelnessAndSpaComponent},
  { path: '', component: HomeComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
