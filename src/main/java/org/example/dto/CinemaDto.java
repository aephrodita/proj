package org.example.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CinemaDto {
    private Long id;
    private String name;
    private String address;
    private String city_name;
}
