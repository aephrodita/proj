package org.example.entity;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonKey;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Table(name = "movie")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Movie {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private long id;
    @Column(name = "name")
    private String name;
    @Column(name = "name_kaz")
    private String name_kaz;
    @Column(name = "name_rus")
    private String name_rus;
    @Column(name = "description")
    private String description;
    @Column(name = "production")
    private String production;
    @Column(name = "director")
    private String director;
    @Column(name = "age_restriction")
    private double age_restriction;
    @Column(name = "rating")
    private double rating;
    @Column(name = "votes")
    private int votes;
    @OneToMany(mappedBy = "movie")
    @JsonIgnore
    private List<Seance> seanceList;
}
