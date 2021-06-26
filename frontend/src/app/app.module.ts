import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { NavbarinexComponent } from './shared/navbarinex/navbarinex.component';
import { GuestComponent } from './guest/guest.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { SignComponent } from './sign/sign.component';
import { HouseComponent } from './house/house.component';
import { ReserveComponent } from './reserve/reserve.component';
import { LoginService } from './shared/services/login.service';
import { AuthService } from './shared/services/auth.service';
import { BarRatingModule } from 'ngx-bar-rating';
import { RateComponent } from './rate/rate.component';
import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { UserComponent } from './user/user.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    NgbModule,
   ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    NavbarinexComponent,
    GuestComponent,
    CalculadoraComponent,
    SignComponent,
    HomeComponent,
    HouseComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    UserComponent,
    ReserveComponent,
    RateComponent 
    
    ],
  providers: [LoginService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
