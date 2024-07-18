package org.example.controller;

import lombok.AllArgsConstructor;
import org.example.aspect.ToLogOurApp;
import org.example.dto.SeanceDto;
import org.example.entity.Seance;
import org.example.entity.Ticket;
import org.example.service.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/")
@AllArgsConstructor
public class SeanceController {
    private final UserService userService;
    private final MovieService movieService;
    private final TicketService ticketService;
    private final CinemaService cinemaService;
    private final HallService hallService;
    private final SeanceService seanceService;
    private final PlaceService placeService;

    // Список всех сеансов
    @GetMapping("/seance")
    public List<Seance> getAllSeance() {
        // Возвращает список всех сеансов
        return seanceService.getAllSeance();
    }

    // Получение информации о конкретном сеансе по его ID
    @GetMapping("/seance/{seanceId}")
    public Seance getSeance(@PathVariable long seanceId) {
        // Возвращает информацию о сеансе с заданным ID
        return seanceService.getOneSeance(seanceId);
    }

    // Добавление нового сеанса (доступно только для администраторов)
    @PostMapping("/admin/seance")
    @ToLogOurApp
    public String addSeance(@RequestBody SeanceDto seanceDto) {
        // Добавляет новый сеанс и возвращает сообщение о результате
        return seanceService.addSeance(seanceDto);
    }

    // Получение списка билетов для конкретного сеанса по его ID
    @GetMapping("/seance/ticket/{seanceId}")
    public List<Ticket> getTicketBySeanceId(@PathVariable long seanceId) {
        // Возвращает список билетов для сеанса с заданным ID
        return ticketService.findTicketBySeanceId(seanceId);
    }
}
