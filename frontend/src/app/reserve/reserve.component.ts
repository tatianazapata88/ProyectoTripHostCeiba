import { Component, OnInit } from '@angular/core';
import { House } from 'app/house/house';
import { LoginService } from 'app/shared/services/login.service';
import { User } from 'app/user/User';
import Swal from 'sweetalert2';
import { Reserve } from './reserve';
import { ActivatedRoute } from '@angular/router';
import { Guest } from 'app/guest/guest';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  public  user: Guest = new Guest()
  public  house: House = new House()
  public  reserve: Reserve = new Reserve()
  //username: any;
  usernameGuest: any;
  idHouse: any;
  phoneHost: any;
  photo: any;
  houseCity: any;
  houseCountry: any;
  houseAddress: any;
  fechaEnd: any;
  fechaInit: any;
  idGuest: any;
  name: any;
  
  constructor(private service: LoginService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarHouse();
   
}

  cargarHouse(): void{
  this.activatedRoute.params.subscribe(params =>{
    let idHouse1 = params['idHouse']
    if(idHouse1){
      this.service.getHousebyId(idHouse1).subscribe((houses)=> this.house =houses)
    }
    
  })
  console.log('usuario de la casa '+this.house.username)
 
  }
  createReserveHouse(){
    this.reserve.idHouse=this.house.idHouse
    this.reserve.usernameHost=this.house.username;
    let recuperarStorage = JSON.parse( localStorage.getItem("datosSesion"));
    this.reserve.usernameGuest=recuperarStorage.username;
    this.reserve.fechaInit=this.fechaInit;
    this.reserve.fechaEnd=this.fechaEnd
    this.service.saveReserve(this.reserve).subscribe(data => {
      this.reserve=data
      console.log(data);
    }, error => alert(error));
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Reserva realizada correctamente',
      showConfirmButton: false,
      timer: 1500
    });
  /*  console.log("esto trae metodo reservce: "+this.service.usernameLogin)
    ;
    let reserva = new Reserve();
    reserva.createReserve(idHouseCre,usernameHostCre,usernameGuestCre,fechaInitCre,fechaEndCre)*/
      



  
    
  } 

  }
  
  
