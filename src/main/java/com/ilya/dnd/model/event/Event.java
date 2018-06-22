package com.ilya.dnd.model.event;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")
@JsonSubTypes({@JsonSubTypes.Type(value = BattleEvent.class, name = "BattleEvent")})
public class Event {
    private int experience;
    //TODO refactor
    private int reward;
    private String description;

    public Event() {
    }

    public Event(int experience, int reward, String description) {
        this.experience = experience;
        this.reward = reward;
        this.description = description;
    }

    public int getExperience() {
        return experience;
    }

    public void setExperience(int experience) {
        this.experience = experience;
    }

    public int getReward() {
        return reward;
    }

    public void setReward(int reward) {
        this.reward = reward;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Event{" +
                "experience=" + experience +
                ", reward=" + reward +
                ", description='" + description + '\'' +
                '}';
    }
}
