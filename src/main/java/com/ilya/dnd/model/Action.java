package com.ilya.dnd.model;

import javax.persistence.*;

@Entity
@Table(name = "action")
public class Action extends Ability {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @ManyToOne
    @JoinColumn(name = "monster_id")
    private Monster monster;

    public Action() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Monster getMonster() {
        return monster;
    }

    public void setMonster(Monster monster) {
        this.monster = monster;
    }

    @Override
    public String toString() {
        return super.toString() + " Action{" +
                "id=" + id +
                ", monster=" + monster +
                '}';
    }
}
