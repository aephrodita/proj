package org.example.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class MovieDto {
    private Long id;
    private String name;
    private String category;
    private double age_restriction;
    private double rating;
}
