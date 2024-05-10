package org.example.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class HallDto {
    private Long id;
    private String name;
    private long cinema;
    private int row;
    private int seat;
}
