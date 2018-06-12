package com.ilya.dnd.repository;

import com.ilya.dnd.model.Monster;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Repository
public class MonsterRepositroyImpl implements MonsterRepository {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Monster> findAll() {
        TypedQuery<Monster> query =
                entityManager.createQuery("SELECT m FROM Monster m", Monster.class);

        return query.getResultList();
    }

    @Override
    public Monster find(long id) {
        return entityManager.find(Monster.class, id);
    }

    @Override
    public Monster update(Monster monster) {
        Monster updatedMonster = this.find(monster.getMonsterId());
        initializeMonster(updatedMonster, monster);
        monster.getActions().forEach(action -> action.setMonster(updatedMonster));
        monster.getLegendaryActions().forEach(legendaryAction -> legendaryAction.setMonster(updatedMonster));
        monster.getSpecialAbilities().forEach(specialAbility -> specialAbility.setMonster(updatedMonster));
        monster.getReactions().forEach(reaction -> reaction.setMonster(updatedMonster));
        return updatedMonster;
    }

    @Override
    public void save(Monster monster) {
        monster.getActions().forEach(action -> action.setMonster(monster));
        monster.getLegendaryActions().forEach(legendaryAction -> legendaryAction.setMonster(monster));
        monster.getSpecialAbilities().forEach(specialAbility -> specialAbility.setMonster(monster));
        monster.getReactions().forEach(reaction -> reaction.setMonster(monster));
        entityManager.persist(monster);
    }

    @Override
    public void delete(long id) {
        entityManager.remove(this.find(id));
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
