import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reserve } from 'app/reserve/reserve';
import { LoginService } from 'app/shared/services/login.service';


@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
    reserves: any;
    ;

  constructor(private service: LoginService, private router: Router) { }

  ngOnInit() {
        this.service.getReservebyUsernameHost(this.service.user.username).subscribe(data => {
        this.reserves = new Reserve;
        this.reserves=data; 
        
         console.log(data)
        })
  }

  ver(idHouse1){
    console.log('este es el id house cuando hago click es : '+idHouse1)
    this.service.getIdHouse(idHouse1)
    this.router.navigate(['/admin/reserve']);
  }

  eliminar(idHouse2){
      
  }

}
