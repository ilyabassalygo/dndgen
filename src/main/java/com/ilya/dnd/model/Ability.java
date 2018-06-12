package com.ilya.dnd.model;

import javax.persistence.*;

@MappedSuperclass
public class Ability {
    @Column(name = "name")
    private String name;
    @Column(name = "description")
    private String desc;
    @Column(name = "attack_bonus")
    private int attackBonus;
    @Column(name = "damage_dice")
    private String damageDice;
    @Column(name = "damage_bonus")
    private int damageBonus;

    public Ability() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public int getAttackBonus() {
        return attackBonus;
    }

    public void setAttackBonus(int attackBonus) {
        this.attackBonus = attackBonus;
    }

    public String getDamageDice() {
        return damageDice;
    }

    public void setDamageDice(String damageDice) {
        this.damageDice = damageDice;
    }

    public int getDamageBonus() {
        return damageBonus;
    }

    public void setDamageBonus(int damageBonus) {
        this.damageBonus = damageBonus;
    }

    @Override
    public String toString() {
        return "Ability{" +
                "name='" + name + '\'' +
                ", desc='" + desc + '\'' +
                ", attackBonus=" + attackBonus +
                ", damageDice='" + damageDice + '\'' +
                ", damageBonus=" + damageBonus +
                '}';
    }
}