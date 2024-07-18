package org.example.repository;

import org.example.entity.Movie;
import org.example.entity.Place;
import org.example.entity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long> {
    Ticket findById(long ticketId);
    List<Ticket> findBySeanceId(long seanceId);
    List<Ticket> findByUserId(long userId);
}
