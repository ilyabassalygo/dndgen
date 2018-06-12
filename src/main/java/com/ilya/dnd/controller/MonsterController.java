package com.ilya.dnd.controller;

import com.ilya.dnd.dto.MonsterDto;
import com.ilya.dnd.model.Monster;
import com.ilya.dnd.service.JsonIOConverter;
import com.ilya.dnd.service.MonsterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/api/monster")
public class MonsterController {

    @Autowired
    private MonsterService monsterService;

    @Autowired
    private JsonIOConverter jsonIOConverter;

    @RequestMapping(method = RequestMethod.GET)
    public List<MonsterDto> findMonsters() {
        return monsterService.findAllMonsters();
    }

    @RequestMapping(method = RequestMethod.GET, path = "/{id}")
    public MonsterDto findMonser(@PathVariable long id){
        return monsterService.findMonster(id);
    }

    @RequestMapping(method = RequestMethod.GET, path = "/convert")
    public List<MonsterDto> convertMonsters(){
        return jsonIOConverter.convertFileJson();
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity saveMonster(@RequestBody MonsterDto monsterDto) {
        monsterService.saveMonster(monsterDto);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity updateMonster(@RequestBody MonsterDto monsterDto) {
        monsterService.updateMonster(monsterDto);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.DELETE, path = "/{id}")
    public ResponseEntity deleteMonster(@PathVariable long id) {
        monsterService.deleteMonster(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}
