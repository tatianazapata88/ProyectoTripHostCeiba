package com.ias.backend.domain;


import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "notas_casas")
public class RatingHouse {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id_rating", nullable=false)
    private int idRating;

    @Column(name="id_reserve", nullable=false)
    private int idReserve;

    @Column(name="id_house", nullable=false)
    private int idHouse;

    @Column(name="id_guest", nullable=false)
    private int idGuest;

    @Column(name="fecha_rating", nullable=false)
    @Temporal(TemporalType.DATE)
    private Date fechaRating;

    @PrePersist
    public void PrePersist(){
        fechaRating = new Date();
    }

    @Column(name="comment_guest", nullable=false)
    private String commentGuest;

    @Column(name="photo_exp", nullable=false)
    private String photoExp;

    @Column
    private float note;

    public int getIdRating() {
        return idRating;
    }

    public void setIdRating(int idRating) {
        this.idRating = idRating;
    }

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

    public int getIdGuest() {
        return idGuest;
    }

    public void setIdGuest(int idGuest) {
        this.idGuest = idGuest;
    }

    public Date getFechaRating() {
        return fechaRating;
    }

    public void setFechaRating(Date fechaRating) {
        this.fechaRating = fechaRating;
    }

    public String getCommentGuest() {
        return commentGuest;
    }

    public void setCommentGuest(String commentGuest) {
        this.commentGuest = commentGuest;
    }

    public String getPhotoExp() {
        return photoExp;
    }

    public void setPhotoExp(String photoExp) {
        this.photoExp = photoExp;
    }

    public float getNote() {
        return note;
    }

    public void setNote(float note) {
        this.note = note;
    }

    
    
    
}
