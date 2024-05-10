package org.example.service;

import lombok.AllArgsConstructor;
import org.example.dto.MovieDto;
import org.example.entity.Movie;
import org.example.repository.MovieRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class MovieService {
    private final MovieRepository repository;

    public String addMovie(MovieDto dto){
        Movie movie = new Movie();
        movie.setName(dto.getName());
        movie.setName_kaz(dto.getName_kaz());
        movie.setName_rus(dto.getName_rus());
        movie.setDescription(dto.getDescription());
        movie.setProduction(dto.getProduction());
        movie.setDirector(dto.getDirector());
        movie.setAge_restriction(dto.getAge_restriction());
        movie.setRating(dto.getRating());
        movie.setVotes(0);
        repository.save(movie);

        return "added";
    }

    public String updateMovie(long movieId, MovieDto updatedMovie) {
        Movie existingMovie = repository.findById(movieId);
        existingMovie.setName(updatedMovie.getName());
        existingMovie.setName_kaz(updatedMovie.getName_kaz());
        existingMovie.setName_rus(updatedMovie.getName_rus());
        existingMovie.setDescription(updatedMovie.getDescription());
        existingMovie.setProduction(updatedMovie.getProduction());
        existingMovie.setDirector(updatedMovie.getDirector());
        existingMovie.setAge_restriction(updatedMovie.getAge_restriction());
        existingMovie.setRating(updatedMovie.getRating());
        repository.save(existingMovie);
        return "updated";
    }

    public String deleteMovie(long movieId) {
        Movie movie = repository.findById(movieId);
        repository.delete(movie);
        return "deleted";
    }

    public List<Movie> getAllMovie(){
        return repository.findAll();
    }

    public Movie getOneMovie(long movieId){
        return repository.findById(movieId);
    }

    public Movie getMovieById(Long id){
        return repository.getById(id);
    }
}
