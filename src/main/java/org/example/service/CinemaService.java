package org.example.service;

import lombok.AllArgsConstructor;
import org.example.dto.CinemaDto;
import org.example.entity.Cinema;
import org.example.entity.Movie;
import org.example.repository.CinemaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CinemaService {
    private final CinemaRepository repository;

    public String addCinema(CinemaDto dto){
        if(!dto.getName().isBlank() && dto.getName().length() > 2){
            Cinema cinema = new Cinema();
            cinema.setName(dto.getName());
            cinema.setAddress(dto.getAddress());
            cinema.setCity_name(dto.getCity_name());
            cinema.setDescription(dto.getDescription());
            repository.save(cinema);
        }
        return "added";
    }

    public List<Cinema> getAllCinema(){
        return repository.findAll();
    }
    public Cinema getOneCinema(long cinemaId){
        return repository.findById(cinemaId);
    }
    public Cinema getCinemaById(Long id){
        return repository.getById(id);
    }
}
