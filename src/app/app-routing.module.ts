import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomerComponent } from './customer/customer.component';
import { ErrorComponent } from './error/error.component';
import { SelectionPageComponent } from './selection-page/selection-page.component';
import { TestComponent } from './test/test.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CorryComponent } from './corry/corry.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ListMeatsComponent } from './list-meats/list-meats.component';
import { AboutUsHomeComponent } from './about-us-home/about-us-home.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { MarysFishComponent } from './marys-fish/marys-fish.component';
import { TotalProduceComponent } from './total-produce/total-produce.component';
import { PallasComponent } from './pallas/pallas.component';

const routes: Routes = [

  {path: '', component: WelcomeComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'about-us-home', component: AboutUsHomeComponent},
  {path: 'customerAcc/:name', component: CustomerComponent},
  {path: 'customerAcc/:name/account', component: AccountDetailsComponent},
  {path: 'customerAcc/:name/selection',component: SelectionPageComponent},
  {path: 'customerAcc/:name/about-us', component: AboutUsComponent},
  {path: 'customerAcc/corry/:name', component: CorryComponent},
  {path: 'customerAcc/marysFish/:name', component: MarysFishComponent},
  {path: 'customerAcc/totalProduce/:name', component: TotalProduceComponent},
  {path: 'customerAcc/pallas/:name', component: PallasComponent},
  {path: 'test', component: ListMeatsComponent}, 
  {path: '**', component: ErrorComponent}
];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
