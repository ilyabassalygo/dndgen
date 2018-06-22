package com.ilya.dnd.model.event;

import com.ilya.dnd.dto.MonsterDto;

import java.util.List;

public class BattleEvent extends Event {
    private List<MonsterDto> monsters;

    public BattleEvent() {
    }

    public BattleEvent(int experience, int reward, String description, List<MonsterDto> monsters) {
        super(experience, reward, description);
        this.monsters = monsters;
    }

    public List<MonsterDto> getMonsters() {
        return monsters;
    }

    public void setMonsters(List<MonsterDto> monsters) {
        this.monsters = monsters;
    }

    @Override
    public String toString() {
        return super.toString() + "BattleEvent{" +
                "monsters=" + monsters +
                '}';
    }
}
