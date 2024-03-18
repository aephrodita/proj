package org.example.service;

import lombok.AllArgsConstructor;
import org.example.dto.RoomDto;
import org.example.entity.Cinema;
import org.example.entity.Room;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RoomRepository {
//    private final RoomRepository repository;
//    private final CinemaService cinemaService;
//    public String addRoom(RoomDto dto){
//        if(!dto.getName().isBlank() && dto.getName().length() > 2){
//            Room room = new Room();
//            room.setName(dto.getName());
//            Cinema cinema = cinemaService.getCinemaById(dto.getCinema());
//            room.setCinema(cinema);
//            repository.save(room);
//        }
//        return "added";
//    }
//
//    public Room getRoomById(Long id){
//        return repository.getById(id);
//    }
}
