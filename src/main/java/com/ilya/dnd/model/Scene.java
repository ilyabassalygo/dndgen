package com.ilya.dnd.model;

import com.ilya.dnd.model.event.Event;

import java.util.List;

public class Scene {
    private List<Event> events;

    public Scene() {
    }

    public Scene(List<Event> events) {
        this.events = events;
    }

    public List<Event> getEvents() {
        return events;
    }

    public void setEvents(List<Event> events) {
        this.events = events;
    }
}
