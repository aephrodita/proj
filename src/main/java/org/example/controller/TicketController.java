package org.example.controller;

import lombok.AllArgsConstructor;
import org.example.aspect.ToLogOurApp;
import org.example.dto.TicketDto;
import org.example.entity.Ticket;
import org.example.service.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/")
@AllArgsConstructor
public class TicketController {
    private final UserService userService;
    private final MovieService movieService;
    private final TicketService ticketService;
    private final CinemaService cinemaService;
    private final HallService hallService;
    private final SeanceService seanceService;
    private final PlaceService placeService;

    // Список всех билетов
    @GetMapping("/ticket")
    public List<Ticket> getAllTicket() {
        // Возвращает список всех билетов
        return ticketService.getAllTicket();
    }

    // Получение информации о конкретном билете по его ID
    @GetMapping("/ticket/{ticketId}")
    public Ticket getTicket(@PathVariable long ticketId) {
        // Возвращает информацию о билете с заданным ID
        return ticketService.getOneTicket(ticketId);
    }

    // Покупка билета (привязка билета к пользователю)
    @PutMapping("/ticket/{ticketId}/user/{userId}")
    public String buyTicket(@PathVariable long ticketId, @PathVariable long userId) {
        // Привязывает билет к пользователю и возвращает сообщение о результате
        return ticketService.buyTicket(ticketId, userId);
    }

    // Возврат билета
    @PutMapping("/ticket/{ticketId}")
    public String returnTicket(@PathVariable long ticketId) {
        // Возвращает билет и возвращает сообщение о результате
        return ticketService.returnTicket(ticketId);
    }

    // Добавление нового билета (доступно только для администраторов)
    @PostMapping("/ticket")
    @ToLogOurApp
    public String addTicket(@RequestBody TicketDto ticketDto) {
        // Добавляет новый билет и возвращает сообщение о результате
        return ticketService.addTicket(ticketDto);
    }
}
