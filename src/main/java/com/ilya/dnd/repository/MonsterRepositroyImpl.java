package com.ilya.dnd.repository;

import com.ilya.dnd.exception.EntityNotFoundException;
import com.ilya.dnd.exception.JpaException;
import com.ilya.dnd.model.Monster;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Transactional
@Repository
public class MonsterRepositroyImpl implements MonsterRepository {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Monster> findAll() throws JpaException {
        List<Monster> monsters = new ArrayList<>();
        try {
            TypedQuery<Monster> query =
                    entityManager.createQuery("SELECT m FROM Monster m", Monster.class);
            monsters = query.getResultList();
        } catch (Exception e) {
            throw new JpaException("Unexpected exception while findAll in MonsterRepository");
        }
        return monsters;
    }

    @Override
    public Monster find(long id) throws JpaException {
        Monster monster = null;
        try {
            monster = entityManager.find(Monster.class, id);
        } catch (Exception e) {
            throw new JpaException("Unexpected exception in find of MonsterRepository");
        }
        return monster;
    }

    @Override
    public Monster update(Monster monster) throws JpaException {
        Monster updatedMonster;
        try {
            updatedMonster = this.find(monster.getMonsterId());
            if (updatedMonster == null) {
                throw new EntityNotFoundException("Monster for update not found " + monster.getMonsterId());
            }
            initializeMonster(updatedMonster, monster);
            monster.getActions().forEach(action -> action.setMonster(updatedMonster));
            monster.getLegendaryActions().forEach(legendaryAction -> legendaryAction.setMonster(updatedMonster));
            monster.getSpecialAbilities().forEach(specialAbility -> specialAbility.setMonster(updatedMonster));
            monster.getReactions().forEach(reaction -> reaction.setMonster(updatedMonster));
        } catch (Exception e) {
            throw new JpaException("Unexpected exception in update of MonsterRepository");
        }
        return updatedMonster;
    }

    @Override
    public void save(Monster monster) throws JpaException {
        try {
            monster.getActions().forEach(action -> action.setMonster(monster));
            monster.getLegendaryActions().forEach(legendaryAction -> legendaryAction.setMonster(monster));
            monster.getSpecialAbilities().forEach(specialAbility -> specialAbility.setMonster(monster));
            monster.getReactions().forEach(reaction -> reaction.setMonster(monster));
            entityManager.persist(monster);
        } catch (Exception e) {
            throw new JpaException("Unexpected exception in save of MonsterRepository");
        }
    }

    @Override
    public void delete(long id) throws JpaException {
        try {
            entityManager.remove(this.find(id));
        } catch (Exception e) {
            throw new JpaException("Unexpected exception in delete of MonsterRepository");
        }
    }

    private void initializeMonster(Monster updatedMonster, Monster monster) {
        updatedMonster.setName(monster.getName());
        updatedMonster.setSize(monster.getSize());
        updatedMonster.setType(monster.getType());
        updatedMonster.setSubtype(monster.getSubtype());
        updatedMonster.setAlignment(monster.getAlignment());
        updatedMonster.setArmorClass(monster.getArmorClass());
        updatedMonster.setHitPoints(monster.getHitPoints());
        updatedMonster.setHitDice(monster.getHitDice());
        updatedMonster.setSpeed(monster.getSpeed());
        updatedMonster.setStrength(monster.getStrength());
        updatedMonster.setDexterity(monster.getDexterity());
        updatedMonster.setConstitution(monster.getConstitution());
        updatedMonster.setIntelligence(monster.getIntelligence());
        updatedMonster.setWisdom(monster.getWisdom());
        updatedMonster.setCharisma(monster.getCharisma());
        updatedMonster.setStrengthSave(monster.getStrengthSave());
        updatedMonster.setDexteritySave(monster.getDexteritySave());
        updatedMonster.setConstitutionSave(monster.getConstitutionSave());
        updatedMonster.setIntelligenceSave(monster.getIntelligenceSave());
        updatedMonster.setWisdomSave(monster.getWisdomSave());
        updatedMonster.setCharismaSave(monster.getCharismaSave());
        updatedMonster.setDamageVulnerabilities(monster.getDamageVulnerabilities());
        updatedMonster.setDamageResistances(monster.getDamageResistances());
        updatedMonster.setDamageImmunities(monster.getDamageImmunities());
        updatedMonster.setConditionImmunities(monster.getConditionImmunities());
        updatedMonster.setChallengeRating(monster.getChallengeRating());
        updatedMonster.setHistory(monster.getHistory());
        updatedMonster.setReligion(monster.getReligion());
        updatedMonster.setPerception(monster.getPerception());
        updatedMonster.setMedicine(monster.getMedicine());
        updatedMonster.setStealth(monster.getStealth());
        updatedMonster.setAcrobatics(monster.getAcrobatics());
        updatedMonster.setAthletics(monster.getAthletics());
        updatedMonster.setSleightOfHands(monster.getSleightOfHands());
        updatedMonster.setArcana(monster.getArcana());
        updatedMonster.setInvestigation(monster.getInvestigation());
        updatedMonster.setNature(monster.getNature());
        updatedMonster.setAnimalHandling(monster.getAnimalHandling());
        updatedMonster.setInsight(monster.getInsight());
        updatedMonster.setSurvival(monster.getSurvival());
        updatedMonster.setDeception(monster.getDeception());
        updatedMonster.setIntimidation(monster.getIntimidation());
        updatedMonster.setPersuasion(monster.getPersuasion());
        updatedMonster.setPerformance(monster.getPerformance());
        updatedMonster.setSenses(monster.getSenses());
        updatedMonster.setLanguages(monster.getLanguages());
    }
}
