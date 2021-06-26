package com.ias.backend.domain;


import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "reservas")
public class Reserve {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id_reserve")
    private int idReserve;

    @Column(name="id_house")
    private int idHouse;

    @Column(name="username_guest")
    private String usernameGuest;

    @Column(name="username_host")
    private String usernameHost;

    @Column(name="fecha_init")
    @Temporal(TemporalType.DATE)
    private Date fechaInit;

    @Column(name="fecha_end")
    @Temporal(TemporalType.DATE)
    private Date fechaEnd;

    public int getIdReserve() {
        return idReserve;
    }

    public void setIdReserve(int idReserve) {
        this.idReserve = idReserve;
    }

    public int getIdHouse() {
        return idHouse;
    }

    public void setIdHouse(int idHouse) {
        this.idHouse = idHouse;
    }

    public String getUsernameGuest() {
        return usernameGuest;
    }

    public void setUsernameGuest(String usernameGuest) {
        this.usernameGuest = usernameGuest;
    }

    public String getUsernameHost() {
        return usernameHost;
    }

    public void setUsernameHost(String usernameHost) {
        this.usernameHost = usernameHost;
    }

    public Date getFechaInit() {
        return fechaInit;
    }

    public void setFechaInit(Date fechaInit) {
        this.fechaInit = fechaInit;
    }

    public Date getFechaEnd() {
        return fechaEnd;
    }

    public void setFechaEnd(Date fechaEnd) {
        this.fechaEnd = fechaEnd;
    }

    

    
   


   
   
}
