export class Reserve {  
    idReserve: number; 
    idHouse: number;
    usernameGuest: string;
    usernameHost: string;
    fechaInit: Date;
    fechaEnd: Date;
    notaGuest: number;
    notaHost: number;
    

    constructor(){
       
    }


    createReserve(idHouse: number, usernameGuest: string, usernameHost: string, fechaInit: Date, fechaEnd: Date){
        this.idHouse=idHouse;
        this.usernameGuest=usernameGuest;
        this.usernameHost=usernameHost;
        this.fechaInit=fechaInit;
        this.fechaEnd=fechaEnd;
        
    }

}   