package org.example.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "hall")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Hall {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private long id;
    @Column(name = "name")
    private String name;
    @ManyToOne
    @JoinColumn(name = "cinema_id", referencedColumnName = "id")
    private Cinema cinema;
    @Column(name = "row")
    private int row;
    @Column(name = "seat")
    private int seat;
}
