package com.ias.backend.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "usuarios")
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
     private int id;
    
    private String username;
    private String password;
    private String name;

    @Column(name="user_country")
    private String userCountry;

    @Column(name="user_city")
    private String userCity;
    
    private String address;
    private int rol;
    
  

    public int getId() {
        return id;
    }



    public void setId(int id) {
        this.id = id;
    }



    public String getUsername() {
        return username;
    }



    public void setUsername(String username) {
        this.username = username;
    }



    public String getPassword() {
        return password;
    }



    public void setPassword(String password) {
        this.password = password;
    }



    public String getName() {
        return name;
    }



    public void setName(String name) {
        this.name = name;
    }



    public String getUserCountry() {
        return userCountry;
    }



    public void setUserCountry(String userCountry) {
        this.userCountry = userCountry;
    }



    public String getUserCity() {
        return userCity;
    }



    public void setUserCity(String userCity) {
        this.userCity = userCity;
    }



    public String getAddress() {
        return address;
    }



    public void setAddress(String address) {
        this.address = address;
    }



    public int getRol() {
        return rol;
    }



    public void setRol(int rol) {
        this.rol = rol;
    }
  
}
