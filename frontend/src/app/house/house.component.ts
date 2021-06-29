import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guest } from 'app/guest/guest';
import { LoginService } from 'app/shared/services/login.service';
import Swal from 'sweetalert2';
import { House } from './house';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  public  user: Guest = new Guest()
  public  house: House = new House()

  
constructor(private service: LoginService, private router: Router) { }

  ngOnInit()  {
    let recuperarStorage = JSON.parse( localStorage.getItem("datosSesion"));
     
   this.service.getHouse(recuperarStorage.username).subscribe(data => {
      
      if(data===null){
      this.house.username=recuperarStorage.username;
      this.house.houseCountry=recuperarStorage.userCountry;
      this.house.houseCity=recuperarStorage.userCity;
      this.house.houseAddress=recuperarStorage.address;
        
      
     }  
    else{
      this.house=data;
    } 
    
    })
    
  }

  public(){
    if(this.house.available&&this.house.phoneHost&&this.house.photo){
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
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Completar espacios vacios ',

      })

    }
   
  }



  uploadHouse(){
    if(this.house.available&&this.house.phoneHost&&this.house.photo){
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
  } 
  else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Completar espacios vacios ',

    })

  }
}
    
}

  

  

