export class Guest {
    [x: string]: any;
    
    id: number;
    username: string;
    password: string;
    name:   string;
    userCountry:    string;
    userCity: string;
    address: string;
    rol: number;
    constructor(){
       
    }
    login(username: string, password: string){
        
        this.username=username;
        this.password=password;
    }

    roluser(username: string, password: string, rol: number){
        this.username=username;
        this.password=password;
        this.rol=rol;
    }

    create(username: string, password: string, name: string, userCountry: string, userCity: string, address: string, rol: number){
        this.username=username;
        this.password=password;
        this.name=name;
        this.userCountry=userCountry;
        this.userCity=userCity;
        this.address=address;
        this.rol=rol;
    }
}