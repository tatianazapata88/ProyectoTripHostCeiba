export class House {
    idHouse: number;
    username: string;
    phoneHost: string;
    houseCountry:    string;
    houseCity: string;
    houseAddress: string;
    available: number;
    photo: string;
    constructor(){
       
    }

    login(username: string){
        
        this.username=username;
        
    }
    

    create(username: string, phoneHost: string, houseCountry: string, houseCity: string, houseAddress: string, available: number, photo: string){
        this.username=username;
        this.phoneHost=phoneHost;
        this.houseCountry=houseCountry;
        this.houseCity=houseCity;
        this.houseAddress=houseAddress;
        this.available=available;
        this.photo=photo;
    }
}