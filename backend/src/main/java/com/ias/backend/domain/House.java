package com.ias.backend.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "casas")
public class House {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id_house")
    private int idHouse;

    private String username;
    @Column(name="phone_host")
    private String phoneHost;
    @Column(name="house_country")
    private String houseCountry;
    @Column(name="house_city")
    private String houseCity;
    @Column(name="house_address")
    private String houseAddress;
    
    private int available;
    private String photo;
   
    
      


    public int getIdHouse() {
        return idHouse;
    }





    public void setIdHouse(int idHouse) {
        this.idHouse = idHouse;
    }





    public String getUsername() {
        return username;
    }





    public void setUsername(String username) {
        this.username = username;
    }





    public String getPhoneHost() {
        return phoneHost;
    }





    public void setPhoneHost(String phoneHost) {
        this.phoneHost = phoneHost;
    }





    public String getHouseCountry() {
        return houseCountry;
    }





    public void setHouseCountry(String houseCountry) {
        this.houseCountry = houseCountry;
    }





    public String getHouseCity() {
        return houseCity;
    }





    public void setHouseCity(String houseCity) {
        this.houseCity = houseCity;
    }





    public String getHouseAddress() {
        return houseAddress;
    }





    public void setHouseAddress(String houseAddress) {
        this.houseAddress = houseAddress;
    }





    public int getAvailable() {
        return available;
    }





    public void setAvailable(int available) {
        this.available = available;
    }





    public String getPhoto() {
        return photo;
    }





    public void setPhoto(String photo) {
        this.photo = photo;
    }
  
}
