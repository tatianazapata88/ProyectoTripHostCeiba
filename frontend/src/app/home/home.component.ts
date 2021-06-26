import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { House } from 'app/house/house';
import { LoginService } from 'app/shared/services/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public  houses: House = new House()
  photo: any
  //houses: any;
  idHouse: any;
  houseCity: any;
  houseCountry: any;
    
  constructor(private service: LoginService, private router: Router) { }

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
  
  /*housereserve(){
  var idcasa = document.getElementById("idhouse");
  console.log('este es el id house cuando hago click es : '+house2)
  this.service.getIdHouse(house2)
  this.router.navigate(['/admin/reserve']);
  }*/
  

}
