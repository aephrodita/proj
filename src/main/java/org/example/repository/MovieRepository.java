package org.example.repository;

import org.example.entity.Movie;
import org.example.entity.Place;
import org.example.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
    Movie findById(long movieId);
}
