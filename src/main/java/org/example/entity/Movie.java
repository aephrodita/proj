package org.example.entity;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonKey;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
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
    @NotNull
    @Column(name = "id")
    private long id;
    @NotNull
    @Column(name = "name")
    private String name;
    @Column(name = "category")
    private String category;
    @Column(name = "age_restriction")
    private double age_restriction;
    @Column(name = "rating")
    private double rating;
    @OneToMany(mappedBy = "movie")
    @JsonIgnore
    private List<Seance> seanceList;
}
