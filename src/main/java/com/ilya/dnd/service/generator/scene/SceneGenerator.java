package com.ilya.dnd.service.generator.scene;

import com.ilya.dnd.exception.GenerationException;
import com.ilya.dnd.exception.ServiceException;
import com.ilya.dnd.model.Scene;
import com.ilya.dnd.model.event.Event;
import com.ilya.dnd.service.generator.event.BattleEventGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class SceneGenerator {

    @Autowired
    private BattleEventGenerator battleEventGenerator;

    public Scene generateBattleScene(int level, String difficulty) throws ServiceException {
        try {
            Scene scene = new Scene();
            List<Event> events = new ArrayList<>();
            events.add(battleEventGenerator.generateBattleEvent(level, difficulty));
            scene.setEvents(events);

            return scene;
        } catch (GenerationException e){
            throw new ServiceException("Error while generating scene " + e.getMessage());
        }
    }
}
