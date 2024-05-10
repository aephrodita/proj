package org.example.repository;

import org.example.entity.Cinema;
import org.example.entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CinemaRepository extends JpaRepository<Cinema, Long> {
    Cinema findById(long cinemaId);
}
