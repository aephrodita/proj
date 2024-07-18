package org.example.service;

import lombok.AllArgsConstructor;
import org.example.dto.CinemaDto;
import org.example.dto.MovieDto;
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
            repository.save(cinema);
        }
        return "added";
    }

    public String updateCinema(long cinemaId, CinemaDto updatedCinema) {
        Cinema existingCinema = repository.findById(cinemaId);
        existingCinema.setName(updatedCinema.getName());
        existingCinema.setAddress(updatedCinema.getAddress());
        existingCinema.setCity_name(updatedCinema.getCity_name());
        repository.save(existingCinema);
        return "updated";
    }

    public String deleteCinema(long cinemaId) {
        Cinema cinema = repository.findById(cinemaId);
        repository.delete(cinema);
        return "deleted";
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
