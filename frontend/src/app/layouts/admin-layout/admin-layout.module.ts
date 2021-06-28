import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule,} from '@angular/forms';
import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RateComponent } from 'app/rate/rate.component';
import { MapsComponent } from 'app/maps/maps.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { HomeComponent } from 'app/home/home.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCOot306VxUoTqzKp8sm6GRosVADoWf1Ao'})
  ],
  declarations: [
   
    MapsComponent,
      
    
   
  ]
})

export class AdminLayoutModule {}
