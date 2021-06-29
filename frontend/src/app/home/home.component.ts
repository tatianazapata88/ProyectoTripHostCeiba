import { Component, OnInit } from '@angular/core';
import { House } from 'app/house/house';
import { Reserve } from 'app/reserve/reserve';
import { LoginService } from 'app/shared/services/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public reserve: Reserve= new Reserve()
  public  houses: House = new House()
  photo: any
  idHouse: any;
  houseCity: any;
  houseCountry: any;
  fechaInit: any;
  fechaEnd: any;
   
  constructor(private service: LoginService) { }

  ngOnInit() {
    this.service.getHouseAvailable(1).subscribe(data => {
    
     this.houses=data; 
     
      console.log(data)
     })
  }  

  searchdis(){
  
  this.service.getHouseByAvailableAndhouseCityAndhouseCountry(1,this.houseCity,this.houseCountry).subscribe(data => {
    this.houses=data;

  })
  }

}
 