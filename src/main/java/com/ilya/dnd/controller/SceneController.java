package com.ilya.dnd.controller;

import com.ilya.dnd.exception.ServiceException;
import com.ilya.dnd.model.Scene;
import com.ilya.dnd.model.event.Event;
import com.ilya.dnd.service.generator.scene.SceneGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.el.MethodNotFoundException;

@RestController
@RequestMapping("/api/scene")
public class SceneController {

    @Autowired
    private SceneGenerator sceneGenerator;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<Scene> generateBattleScene(@RequestParam String level, @RequestParam String difficulty ){
        try {
            return new ResponseEntity<>(sceneGenerator.generateBattleScene(Integer.valueOf(level), difficulty), HttpStatus.OK);
        } catch (ServiceException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity saveScene(@RequestBody Event event) {
        throw new MethodNotFoundException("RIP");
    }
}
