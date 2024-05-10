package org.example.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class SeanceDto {
    private long id;
    private long hall;
    private long movie;
}
