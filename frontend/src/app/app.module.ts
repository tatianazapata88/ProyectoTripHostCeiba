import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { GuestComponent } from './guest/guest.component';
import { SignComponent } from './sign/sign.component';
import { HouseComponent } from './house/house.component';
import { ReserveComponent } from './reserve/reserve.component';
import { LoginService } from './shared/services/login.service';
import { AuthService } from './shared/services/auth.service';
import { RateComponent } from './rate/rate.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { UserComponent } from './user/user.component';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    NgbModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    
   ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    GuestComponent,
    SignComponent,
    HouseComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    UpgradeComponent,
    UserComponent,
    ReserveComponent,
    RateComponent, 
    HomeComponent
    ],
  providers: [LoginService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
