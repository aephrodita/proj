package org.example.service;

import lombok.AllArgsConstructor;
import org.example.dto.SeanceDto;
import org.example.entity.*;
import org.example.repository.SeanceRepository;
import org.example.repository.TicketRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class SeanceService {
    private final SeanceRepository repository;
    private final TicketRepository repositoryTicket;
    private final MovieService movieService;
    private final HallService hallService;
    private final PlaceService placeService;
    public String addSeance(SeanceDto dto){
        int y = 0, seat = 1;
        Seance seance = new Seance();
        Hall hall = hallService.getHallById(dto.getHall());
        Movie movie = movieService.getMovieById(dto.getMovie());
        seance.setHall(hall);
        seance.setMovie(movie);
        repository.save(seance);
        List<Place> places = placeService.findPlacesInHall(hall.getId());
        for(Place place : places){
            if(place.getY() != y){
                seat = 1;
                y++;
            }
            if(place.getZ() == 1){
                Ticket ticket = new Ticket();
                ticket.setSeance(seance);
                ticket.setX(place.getX());
                ticket.setY(place.getY());
                ticket.setSeat(seat);
                ticket.setRow(place.getY()+1);
                repositoryTicket.save(ticket);
                seat++;
            }
        }
        return "added";
    }
    public List<Seance> getAllSeance(){
        return repository.findAll();
    }
    public Seance getOneSeance(long seanceId) {
        return repository.findById(seanceId);
    }
    public List<Seance> findSeanceByMovieId(long movieId) {
        return repository.findByMovieId(movieId);
    }
    public Seance getSeanceById(Long id){
        return repository.getById(id);
    }
}
