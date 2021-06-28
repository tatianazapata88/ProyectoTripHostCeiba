import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'app/shared/services/login.service';
import { User } from 'app/user/User';
import Swal from 'sweetalert2';
import { House } from './house';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  
  public  house: House = new House()
 /* available: any;
  phoneHost: any;
  houseCountry: any;
  houseCity: any;
  houseAddress: any;
  username: any;
  idHouse: any;
  photo: any;
  respuesta: House;*/
  
  
  constructor(private service: LoginService, private datosLogin: LoginService, private router: Router) { }

  ngOnInit()  {
    let recuperarStorage = JSON.parse( localStorage.getItem("datosSesion"));
   
    let username =recuperarStorage.username;
   // let password = this.service.password;
   this.service.getHouse(username).subscribe(data => {
      
      if(data===null){
        
      /*this.service.getLogin(username, password).subscribe(data => {
      respuesta=data;
      var usuario: User;
      usuario=respuesta;*/
     
      this.house.username=this.service.user.username;
      this.house.houseCountry=this.service.user.userCountry;
      this.house.houseCity=this.service.user.userCity;
      this.house.houseAddress=this.service.user.address;
        
      
     }  
    else{
      this.house=data;
      //this.house
     /* var casa: House;
      casa=respuesta;
      this.idHouse=casa.idHouse
      this.username=casa.username;
      this.available=casa.available;
      this.phoneHost=casa.phoneHost;
      this.houseCountry=casa.houseCountry;
      this.houseCity=casa.houseCity;
      this.houseAddress=casa.houseAddress;
      this.photo=casa.photo;*/
      
    } 
    
    })
    
  }

  public(){
    /*let username = this.username;
    let phoneHost = this.phoneHost;
    let houseCountry = this.houseCountry;
    let houseCity = this.houseCity;
    let houseAddress = this.houseAddress;
    let available = this.available;
    let photo = this.photo;*/
   
    /*if (this.house.phoneHost === undefined || this.house.houseCountry === undefined || this.house.houseCity === undefined || this.houseAddress === undefined || this.available === undefined || this.photo === undefined) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes diligenciar todos los campos',

      })
    }
    else {

     let casa = new House();
      casa.create(username, phoneHost, houseCountry, houseCity, houseAddress, available, photo)
      casa.login(username)
      console
     this.service.getHouse(username).subscribe(data => {
        if (data === null) {
          console.log(casa)*/
          this.service.saveHouse(this.house).subscribe(data => {
            console.log(data);
            this.house=data;

          }, error => alert(error));
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Publicaste la casa correctamente!',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['/admin/house']);
       /* }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No puedes publicar ',

          })
        }*/

      //)
    
  }




 

  uploadHouse(){
    this.service.updateHouse(this.house).subscribe(data => {
      console.log(data);
      this.house=data
    }, error => alert(error));
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Actualizado correctamente',
      showConfirmButton: false,
      timer: 1500
    });
    
    /*let idHouse = this.idHouse;
    let username = this.username;
    let phoneHost = this.phoneHost;
    let houseCountry =this.houseCountry;
    let houseCity = this.houseCity;
    let houseAddress = this.houseAddress;
    let available = this.available;
    let photo = this.photo
    console.log(username)
    
    let casa = new House();
    casa.idHouse=idHouse
    casa.username=username;
    casa.phoneHost=phoneHost;
    casa.houseCountry=houseCountry;
    casa.houseCity=houseCity;
    casa.houseAddress=houseAddress;
    casa.available=available;
    casa.photo=photo;
    console.log(casa);
    console.log(casa.idHouse);
    this.service.getHouse(username).subscribe(data => {
      if (data === null) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Primero debes actualizar ',

        })
      }
      else {
        this.service.updateHouse(casa).subscribe(data => {
          console.log(data);
        }, error => alert(error));
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Actualizado correctamente',
          showConfirmButton: false,
          timer: 1500
        });

      }

    }
  )*/
}
    
}

  

  

