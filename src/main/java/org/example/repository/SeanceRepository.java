package org.example.repository;

import org.example.entity.Movie;
import org.example.entity.Seance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SeanceRepository extends JpaRepository<Seance, Long> {
    Seance findById(long seanceId);
    List<Seance> findByMovieId(long movieId);
}
