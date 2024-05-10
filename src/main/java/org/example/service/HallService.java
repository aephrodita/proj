package org.example.service;

import lombok.AllArgsConstructor;
import org.example.dto.HallDto;
import org.example.entity.Cinema;
import org.example.entity.Hall;
import org.example.entity.Movie;
import org.example.repository.HallRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class HallService {
    private final HallRepository repository;
    private final CinemaService cinemaService;
    public String addHall(HallDto dto){
        if(!dto.getName().isBlank() && dto.getName().length() > 2){
            Hall hall = new Hall();
            hall.setName(dto.getName());
            Cinema cinema = cinemaService.getCinemaById(dto.getCinema());
            hall.setCinema(cinema);
            hall.setRow(dto.getRow());
            hall.setSeat(dto.getSeat());
            repository.save(hall);
        }
        return "added";
    }
    public List<Hall> getAllHalls(){
        return repository.findAll();
    }
    public Hall getOneHall(long hallId) {
        return repository.findById(hallId);
    }

    public Hall getHallById(Long id){
        return repository.getById(id);
    }


}
