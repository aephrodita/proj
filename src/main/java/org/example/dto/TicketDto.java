package org.example.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class TicketDto {
    private Long id;
    private long user;
    private long seance;
    private long x;
    private long y;
    private long seat;
    private long row;
}