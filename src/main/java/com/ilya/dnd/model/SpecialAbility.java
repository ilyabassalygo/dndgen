package com.ilya.dnd.model;

import javax.persistence.*;

@Entity
@Table(name = "special_ability")
public class SpecialAbility extends Ability{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @ManyToOne
    @JoinColumn(name = "monster_id", nullable = false)
    private Monster monster;

    public SpecialAbility() {
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
}
