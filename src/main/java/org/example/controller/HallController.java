package org.example.controller;

import lombok.AllArgsConstructor;
import org.example.aspect.ToLogOurApp;
import org.example.dto.HallDto;
import org.example.entity.Hall;
import org.example.service.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/")
@AllArgsConstructor
public class HallController {
    private final UserService userService;
    private final MovieService movieService;
    private final TicketService ticketService;
    private final CinemaService cinemaService;
    private final HallService hallService;
    private final SeanceService seanceService;
    private final PlaceService placeService;

    // Список всех залов
    @GetMapping("/hall")
    public List<Hall> getAllHalls() {
        // Возвращает список всех залов
        return hallService.getAllHalls();
    }

    // Получение информации о конкретном зале по его ID
    @GetMapping("/hall/{hallId}")
    public Hall getHall(@PathVariable long hallId) {
        // Возвращает информацию о зале с заданным ID
        return hallService.getOneHall(hallId);
    }

    // Добавление нового зала (доступно только для администраторов)
    @PostMapping("/admin/hall")
    @ToLogOurApp
    public String addHall(@RequestBody HallDto hallDto) {
        // Добавляет новый зал и возвращает сообщение о результате
        return hallService.addHall(hallDto);
    }
}
