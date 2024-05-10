package org.example.dto;

import jakarta.persistence.Column;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class MovieDto {
    private Long id;
    private String name;
    private String name_kaz;
    private String name_rus;
    private String description;
    private String production;
    private String director;
    private double age_restriction;
    private double rating;
    private int votes;
}
