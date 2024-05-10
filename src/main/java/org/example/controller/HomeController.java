package org.example.controller;

import io.swagger.v3.oas.annotations.Operation;
import lombok.AllArgsConstructor;
import org.example.aspect.ToLogOurApp;
import org.example.dto.*;
import org.example.entity.*;
import org.example.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/")
@AllArgsConstructor
public class HomeController {
    private final UserService userService;
    @Autowired
    private final MovieService movieService;
    private final TicketService ticketService;
    private final CinemaService cinemaService;
    private final HallService hallService;
    private final SeanceService seanceService;
    private final PlaceService placeService;

    @GetMapping("/admin")
    @Operation(summary = "Доступен только авторизованным пользователям с ролью ADMIN")
    @PreAuthorize("hasRole('ADMIN')")
    public String exampleAdmin() {
        return "Hello, admin!";
    }

    @GetMapping("/user")
    public List<User> getAllUsers() {
        return userService.getAllUser();
    }

    @GetMapping("/movie")
    public List<Movie> getAllMovies(){
        return movieService.getAllMovie();
    }

    @GetMapping("/movie/{movieId}")
    public Movie getMovie(@PathVariable long movieId){
        return movieService.getOneMovie(movieId);
    }

    @PostMapping("/movie")
    @ToLogOurApp
    public String addMovie(@RequestBody MovieDto movieDto){
        return movieService.addMovie(movieDto);
    }

    @PutMapping("/movie/{movieId}/edit")
    @ToLogOurApp
    public String updateMovie(@PathVariable long movieId, @RequestBody MovieDto movieDto){
        return movieService.updateMovie(movieId, movieDto);
    }

    @DeleteMapping("/movie/{movieId}")
    @ToLogOurApp
    public String deleteMovie(@PathVariable long movieId){
        return movieService.deleteMovie(movieId);
    }

    @GetMapping("/ticket")
    public List<Ticket> getAllTicket(){
        return ticketService.getAllTicket();
    }

    @GetMapping("/ticket/{ticketId}")
    public Ticket getTicket(@PathVariable long ticketId){
        return ticketService.getOneTicket(ticketId);
    }

    @PutMapping("/ticket/{ticketId}/user/{userId}")
    public String butTicket(@PathVariable long ticketId, @PathVariable long userId){
        return ticketService.buyTicket(ticketId, userId);
    }

    @PostMapping("/ticket")
    @ToLogOurApp
    public String addTicket(@RequestBody TicketDto ticketDto){
        return ticketService.addTicket(ticketDto);
    }

    @GetMapping("/cinema")
    public List<Cinema> getAllCinema(){
        return cinemaService.getAllCinema();
    }

    @GetMapping("/cinema/{cinemaId}")
    public Cinema getCinema(@PathVariable long cinemaId){
        return cinemaService.getOneCinema(cinemaId);
    }

    @PostMapping("/cinema")
    @ToLogOurApp
    public String addCinema(@RequestBody CinemaDto cinemaDto){
        return cinemaService.addCinema(cinemaDto);
    }

    @GetMapping("/hall")
    public List<Hall> getAllHalls(){
        return hallService.getAllHalls();
    }

    @GetMapping("/hall/{hallId}")
    public Hall getHall(@PathVariable long hallId){
        return hallService.getOneHall(hallId);
    }

    @PostMapping("/hall")
    @ToLogOurApp
    public String addHall(@RequestBody HallDto hallDto){
        return hallService.addHall(hallDto);
    }

    @GetMapping("/seance")
    public List<Seance> getAllSeance(){
        return seanceService.getAllSeance();
    }

    @GetMapping("/seance/{seanceId}")
    public Seance getSeance(@PathVariable long seanceId){
        return seanceService.getOneSeance(seanceId);
    }

    @GetMapping("/movie/seance/{movieId}")
    public List<Seance> getSeanceByMovieId(@PathVariable long movieId){
        return seanceService.findSeanceByMovieId(movieId);
    }

    @GetMapping("/seance/ticket/{seanceId}")
    public List<Ticket> getTicketBySeanceId(@PathVariable long seanceId){
        return ticketService.findTicketBySeanceId(seanceId);
    }

    @PostMapping("/seance")
    @ToLogOurApp
    public String addSeance(@RequestBody SeanceDto seanceDto){
        return seanceService.addSeance(seanceDto);
    }

    @GetMapping("/place")
    public List<Place> getAllPlace(){
        return placeService.getAllPlace();
    }

    @GetMapping("/place/{hallId}")
    public List<Place> getHallPlace(@PathVariable long hallId){
        return placeService.findPlacesInHall(hallId);
    }

    @PostMapping("/placehall1")
    @ToLogOurApp
    public String addPlaceRoom1(@RequestBody PlaceDto placeDto){
        return placeService.addPlaceHall1(placeDto);
    }

    @PostMapping("/placehall2")
    @ToLogOurApp
    public String addPlaceRoom2(@RequestBody PlaceDto placeDto){
        return placeService.addPlaceHall2(placeDto);
    }
}
