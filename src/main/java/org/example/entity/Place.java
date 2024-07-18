package org.example.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "place")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Place {
    @Id
    @GeneratedValue()
    @Column(name = "id")
    private long id;
    @Column(name = "x")
    private int x;
    @Column(name = "y")
    private int y;
    @Column(name = "z")
    private int z;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "hall_id")
    private Hall hall;
}
