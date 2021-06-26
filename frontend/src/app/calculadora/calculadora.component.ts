import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'app/shared/services/calculator.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  sumando1:number;
  sumando2:number;
  resultado: any;
  showResult: boolean;
  
  constructor(private service:CalculatorService) { }

  ngOnInit(): void {
    this.showResult=false;
  }

  sumar(){
    this.showResult=true;
    let numero1 = this.sumando1;
    let numero2 = this.sumando2;
    
    

    console.log("Holi")
    console.log(numero1,numero2)
    
    this.service.getsuma(numero1,numero2).subscribe(data=>
      this.resultado=data);
   

   
    
  }


}
