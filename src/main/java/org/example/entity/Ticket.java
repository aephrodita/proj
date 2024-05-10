package org.example.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "ticket")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Ticket {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private long id;
    @ManyToOne //manytomany
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;
    @ManyToOne
    @JoinColumn(name = "seance_id", referencedColumnName = "id")
    private Seance seance;
    @Column(name = "x")
    private int x;
    @Column(name = "y")
    private int y;
    @Column(name = "seat")
    private int seat;
    @Column(name = "row")
    private int row;
}
