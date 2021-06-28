import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reserve } from 'app/reserve/reserve';
import { LoginService } from 'app/shared/services/login.service';
import { title } from 'process';
import Swal from 'sweetalert2';
import { Rate } from './rate';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css' ] 
  


  
  
})
export class RateComponent implements OnInit {
   public  rate: Rate = new Rate()
   public  reserve: Reserve = new Reserve()
  tittle: any;
  comentarioGuest: any;
  idGuest: any;
  photoExpGuest: any;
  note: any;
  idLogin=this.service.user.id
  constructor(private service: LoginService, private activatedRoute: ActivatedRoute, private router: Router) { }
  

  ngOnInit(): void {
    this.cargarIdReserve();
    this.cargarIdHouse();
  
  }


  cargarIdReserve(): void{
    this.activatedRoute.params.subscribe(params =>{
      let idReserve1 = params['idReserve']
    
      if(idReserve1){
        this.rate.idReserve=idReserve1;
       

    
       }
       

    })
  }   
    
 cargarIdHouse() {
    this.service.getReservebyIdReserve(this.rate.idReserve).subscribe(data => {
      this.reserve=data
      this.rate.idHouse=this.reserve.idHouse
      if(this.reserve.usernameHost==this.service.user.username){
        this.tittle="Califica tu Huesped"
      }
      else{
        this.tittle="Califica la casa visitada"
      }
     
    })
  }
   

  calificar(){
   console.log('este es el usuario que califica´'+this.service.user.id)
    this.rate.idGuest=this.service.user.id;
    this.rate.commentGuest=this.comentarioGuest;
    this.rate.photoExp=this.photoExpGuest;
    this.rate.note=this.note

    this.service.saveRatingHouse(this.rate).subscribe(data => {
      this.rate=data

      
    }, error => alert(error));
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Califica tu experiencia',
      showConfirmButton: false,
      timer: 1500
    });
    this.service.getReservebyIdReserve(this.rate.idReserve).subscribe(data => {
      console.log(data);
      this.reserve=data})
      if(this.reserve.usernameHost==this.service.user.username){
      this.reserve.notaGuest=this.rate.note
      
      }
      else{
        this.reserve.notaHost=this.rate.note 
      }
    this.service.updateReserve(this.reserve).subscribe(data => {
      console.log(data);
      this.reserve=data
      console.log("este es la actualizacion de la reserva "+this.reserve)
    })
    this.router.navigate(['/admin/table']);


  }

}
