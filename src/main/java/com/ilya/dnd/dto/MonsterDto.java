package com.ilya.dnd.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ilya.dnd.model.Monster;

import java.util.List;

public class MonsterDto {
    private long id;
    private String name;
    private String size;
    private String type;
    private String subtype;
    private String alignment;
    @JsonProperty("armor_class")
    private int armorClass;
    @JsonProperty("hit_points")
    private int hitPoints;
    @JsonProperty("hit_dice")
    private String hitDice;
    private String speed;

    private int strength;
    private int dexterity;
    private int constitution;
    private int intelligence;
    private int wisdom;
    private int charisma;

    @JsonProperty("strength_save")
    private int strengthSave;
    @JsonProperty("dexterity_save")
    private int dexteritySave;
    @JsonProperty("constitution_save")
    private int constitutionSave;
    @JsonProperty("intelligence_save")
    private int intelligenceSave;
    @JsonProperty("wisdom_save")
    private int wisdomSave;
    @JsonProperty("charisma_save")
    private int charismaSave;

    @JsonProperty("damage_vulnerabilities")
    private String damageVulnerabilities;
    @JsonProperty("damage_resistances")
    private String damageResistances;
    @JsonProperty("damage_immunities")
    private String damageImmunities;
    @JsonProperty("condition_immunities")
    private String conditionImmunities;

    @JsonProperty("challenge_rating")
    private String challengeRating;

    private int history;
    private int religion;
    private int perception;
    private int medicine;
    private int stealth;
    private int acrobatics;
    private int athletics;
    @JsonProperty("sleight_of_hands")
    private int sleightOfHands;
    private int arcana;
    private int investigation;
    private int nature;
    @JsonProperty("animal_handling")
    private int animalHandling;
    private int insight;
    private int survival;
    private int deception;
    private int intimidation;
    private int persuasion;
    private int performance;

    private String senses;
    private String languages;

    @JsonProperty("special_abilities")
    private List<SpecialAbilityDto> specialAbilities;
    private List<ActionDto> actions;
    @JsonProperty("legendary_actions")
    private List<LegendaryActionDto> legendaryActions;
    private List<ReactionDto> reactions;

    public MonsterDto() {
    }

    public MonsterDto(Monster monster) {
        this.setId(monster.getMonsterId());
        this.name = monster.getName();
        this.size = monster.getSize();
        this.type = monster.getType();
        this.subtype = monster.getSubtype();
        this.alignment = monster.getAlignment();
        this.armorClass = monster.getArmorClass();
        this.hitPoints = monster.getHitPoints();
        this.hitDice = monster.getHitDice();
        this.speed = monster.getSpeed();
        this.strength = monster.getStrength();
        this.dexterity = monster.getDexterity();
        this.constitution = monster.getConstitution();
        this.intelligence = monster.getIntelligence();
        this.wisdom = monster.getWisdom();
        this.charisma = monster.getCharisma();
        this.strengthSave = monster.getStrengthSave();
        this.dexteritySave = monster.getDexteritySave();
        this.constitutionSave = monster.getConstitutionSave();
        this.intelligenceSave = monster.getIntelligenceSave();
        this.wisdomSave = monster.getWisdomSave();
        this.charismaSave = monster.getCharismaSave();
        this.damageVulnerabilities = monster.getDamageVulnerabilities();
        this.damageResistances = monster.getDamageResistances();
        this.damageImmunities = monster.getDamageImmunities();
        this.conditionImmunities = monster.getConditionImmunities();
        this.challengeRating = monster.getChallengeRating();
        this.history = monster.getHistory();
        this.religion = monster.getReligion();
        this.perception = monster.getPerception();
        this.medicine = monster.getMedicine();
        this.stealth = monster.getStealth();
        this.acrobatics = monster.getAcrobatics();
        this.athletics = monster.getAthletics();
        this.sleightOfHands = monster.getSleightOfHands();
        this.arcana = monster.getArcana();
        this.investigation = monster.getInvestigation();
        this.nature = monster.getNature();
        this.animalHandling = monster.getAnimalHandling();
        this.insight = monster.getInsight();
        this.survival = monster.getSurvival();
        this.deception = monster.getDeception();
        this.intimidation = monster.getIntimidation();
        this.persuasion = monster.getPersuasion();
        this.performance = monster.getPerformance();
        this.senses = monster.getSenses();
        this.languages = monster.getLanguages();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getSubtype() {
        return subtype;
    }

    public void setSubtype(String subtype) {
        this.subtype = subtype;
    }

    public String getAlignment() {
        return alignment;
    }

    public void setAlignment(String alignment) {
        this.alignment = alignment;
    }

    public int getArmorClass() {
        return armorClass;
    }

    public void setArmorClass(int armorClass) {
        this.armorClass = armorClass;
    }

    public int getHitPoints() {
        return hitPoints;
    }

    public void setHitPoints(int hitPoints) {
        this.hitPoints = hitPoints;
    }

    public String getHitDice() {
        return hitDice;
    }

    public void setHitDice(String hitDice) {
        this.hitDice = hitDice;
    }

    public String getSpeed() {
        return speed;
    }

    public void setSpeed(String speed) {
        this.speed = speed;
    }

    public int getStrength() {
        return strength;
    }

    public int getPerformance() {
        return performance;
    }

    public void setPerformance(int performance) {
        this.performance = performance;
    }

    public void setStrength(int strength) {
        this.strength = strength;
    }

    public int getDexterity() {
        return dexterity;
    }

    public void setDexterity(int dexterity) {
        this.dexterity = dexterity;
    }

    public int getConstitution() {
        return constitution;
    }

    public void setConstitution(int constitution) {
        this.constitution = constitution;
    }

    public int getIntelligence() {
        return intelligence;
    }

    public void setIntelligence(int intelligence) {
        this.intelligence = intelligence;
    }

    public int getWisdom() {
        return wisdom;
    }

    public void setWisdom(int wisdom) {
        this.wisdom = wisdom;
    }

    public int getCharisma() {
        return charisma;
    }

    public void setCharisma(int charisma) {
        this.charisma = charisma;
    }

    public int getStrengthSave() {
        return strengthSave;
    }

    public void setStrengthSave(int strengthSave) {
        this.strengthSave = strengthSave;
    }

    public int getDexteritySave() {
        return dexteritySave;
    }

    public void setDexteritySave(int dexteritySave) {
        this.dexteritySave = dexteritySave;
    }

    public int getConstitutionSave() {
        return constitutionSave;
    }

    public void setConstitutionSave(int constitutionSave) {
        this.constitutionSave = constitutionSave;
    }

    public int getIntelligenceSave() {
        return intelligenceSave;
    }

    public void setIntelligenceSave(int intelligenceSave) {
        this.intelligenceSave = intelligenceSave;
    }

    public int getWisdomSave() {
        return wisdomSave;
    }

    public void setWisdomSave(int wisdomSave) {
        this.wisdomSave = wisdomSave;
    }

    public int getCharismaSave() {
        return charismaSave;
    }

    public void setCharismaSave(int charismaSave) {
        this.charismaSave = charismaSave;
    }

    public int getPerception() {
        return perception;
    }

    public void setPerception(int perception) {
        this.perception = perception;
    }

    public String getDamageVulnerabilities() {
        return damageVulnerabilities;
    }

    public void setDamageVulnerabilities(String damageVulnerabilities) {
        this.damageVulnerabilities = damageVulnerabilities;
    }

    public String getDamageResistances() {
        return damageResistances;
    }

    public void setDamageResistances(String damageResistances) {
        this.damageResistances = damageResistances;
    }

    public String getDamageImmunities() {
        return damageImmunities;
    }

    public void setDamageImmunities(String damageImmunities) {
        this.damageImmunities = damageImmunities;
    }

    public String getConditionImmunities() {
        return conditionImmunities;
    }

    public void setConditionImmunities(String conditionImmunities) {
        this.conditionImmunities = conditionImmunities;
    }

    public String getChallengeRating() {
        return challengeRating;
    }

    public void setChallengeRating(String challengeRating) {
        this.challengeRating = challengeRating;
    }

    public int getHistory() {
        return history;
    }

    public void setHistory(int history) {
        this.history = history;
    }

    public int getReligion() {
        return religion;
    }

    public void setReligion(int religion) {
        this.religion = religion;
    }

    public String getSenses() {
        return senses;
    }

    public void setSenses(String senses) {
        this.senses = senses;
    }

    public String getLanguages() {
        return languages;
    }

    public void setLanguages(String languages) {
        this.languages = languages;
    }

    public int getMedicine() {
        return medicine;
    }

    public void setMedicine(int medicine) {
        this.medicine = medicine;
    }

    public int getStealth() {
        return stealth;
    }

    public void setStealth(int stealth) {
        this.stealth = stealth;
    }

    public int getAcrobatics() {
        return acrobatics;
    }

    public void setAcrobatics(int acrobatics) {
        this.acrobatics = acrobatics;
    }

    public int getAthletics() {
        return athletics;
    }

    public void setAthletics(int athletics) {
        this.athletics = athletics;
    }

    public int getSleightOfHands() {
        return sleightOfHands;
    }

    public void setSleightOfHands(int sleightOfHands) {
        this.sleightOfHands = sleightOfHands;
    }

    public int getArcana() {
        return arcana;
    }

    public void setArcana(int arcana) {
        this.arcana = arcana;
    }

    public int getInvestigation() {
        return investigation;
    }

    public void setInvestigation(int investigation) {
        this.investigation = investigation;
    }

    public int getNature() {
        return nature;
    }

    public void setNature(int nature) {
        this.nature = nature;
    }

    public int getAnimalHandling() {
        return animalHandling;
    }

    public void setAnimalHandling(int animalHandling) {
        this.animalHandling = animalHandling;
    }

    public int getInsight() {
        return insight;
    }

    public void setInsight(int insight) {
        this.insight = insight;
    }

    public int getSurvival() {
        return survival;
    }

    public void setSurvival(int survival) {
        this.survival = survival;
    }

    public int getDeception() {
        return deception;
    }

    public void setDeception(int deception) {
        this.deception = deception;
    }

    public int getIntimidation() {
        return intimidation;
    }

    public void setIntimidation(int intimidation) {
        this.intimidation = intimidation;
    }

    public int getPersuasion() {
        return persuasion;
    }

    public void setPersuasion(int persuasion) {
        this.persuasion = persuasion;
    }

    public List<SpecialAbilityDto> getSpecialAbilities() {
        return specialAbilities;
    }

    public void setSpecialAbilities(List<SpecialAbilityDto> specialAbilities) {
        this.specialAbilities = specialAbilities;
    }

    public List<ActionDto> getActions() {
        return actions;
    }

    public void setActions(List<ActionDto> actions) {
        this.actions = actions;
    }

    public List<LegendaryActionDto> getLegendaryActions() {
        return legendaryActions;
    }

    public void setLegendaryActions(List<LegendaryActionDto> legendaryActions) {
        this.legendaryActions = legendaryActions;
    }

    public List<ReactionDto> getReactions() {
        return reactions;
    }

    public void setReactions(List<ReactionDto> reactions) {
        this.reactions = reactions;
    }
}
