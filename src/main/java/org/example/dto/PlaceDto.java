package org.example.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class PlaceDto {
    private long id;
    private int x;
    private int y;
    private int z;
    private long hall;
}
