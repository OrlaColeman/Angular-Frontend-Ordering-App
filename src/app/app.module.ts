import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { ErrorComponent } from './error/error.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StickyComponent } from './sticky/sticky.component';
import { SelectionPageComponent } from './selection-page/selection-page.component';
import { TestComponent } from './test/test.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CorryComponent } from './corry/corry.component';
import { NumberSelectionComponent } from './number-selection/number-selection.component';
import { HttpClientModule} from '@angular/common/http';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ListMeatsComponent } from './list-meats/list-meats.component';
import { ProductComponent } from './product/product.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { AboutUsHomeComponent } from './about-us-home/about-us-home.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { MarysFishComponent } from './marys-fish/marys-fish.component';
import { TotalProduceComponent } from './total-produce/total-produce.component';
import { PallasComponent } from './pallas/pallas.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    CustomerComponent,
    ErrorComponent,
    StickyComponent,
    SelectionPageComponent,
    TestComponent,
    AboutUsComponent,
    CorryComponent,
    NumberSelectionComponent,
    SignUpComponent,
    ListMeatsComponent,
    ProductComponent,
    ProductQuantityComponent,
    AboutUsHomeComponent,
    AccountDetailsComponent,
    NavbarComponent,
    MarysFishComponent,
    TotalProduceComponent,
    PallasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ httpInterceptorProviders],
  bootstrap: [AppComponent, WelcomeComponent, LoginComponent, NavbarComponent]
})
export class AppModule { }
