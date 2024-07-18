package org.example.service;

import lombok.AllArgsConstructor;
import org.example.dto.TicketDto;
import org.example.entity.*;
import org.example.repository.TicketRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class TicketService {
    private final TicketRepository repository;
    private final UserService userService;

    public String addTicket(TicketDto dto){
        try {
            //
        }catch (Exception e){
            return "not added " + e.getMessage();
        }
        return "added";
    }

    public String buyTicket(long ticketId, long userId){
        Ticket existingTicket = repository.findById(ticketId);
        User user = userService.getUserById(userId);
        existingTicket.setUser(user);
        repository.save(existingTicket);
        return "buyed";
    }

    public String returnTicket(long ticketId){
        Ticket existingTicket = repository.findById(ticketId);
        existingTicket.setUser(null);
        repository.save(existingTicket);
        return "ticket is returned";
    }

    public List<Ticket> findTicketByUserId(long userId) {
        return repository.findByUserId(userId);
    }
    public List<Ticket> getAllTicket(){
        return repository.findAll();
    }
    public Ticket getOneTicket(long ticketId){
        return repository.findById(ticketId);
    }
    public List<Ticket> findTicketBySeanceId(long seanceId) {
        return repository.findBySeanceId(seanceId);
    }

    public Ticket getTicketById(Long id){
        return repository.getById(id);
    }
}
