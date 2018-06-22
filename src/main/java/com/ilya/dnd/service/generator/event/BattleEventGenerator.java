package com.ilya.dnd.service.generator.event;

import com.ilya.dnd.dto.MonsterDto;
import com.ilya.dnd.exception.GenerationException;
import com.ilya.dnd.exception.JpaException;
import com.ilya.dnd.model.Monster;
import com.ilya.dnd.model.event.BattleEvent;
import com.ilya.dnd.modelstatic.ChallengeRating;
import com.ilya.dnd.modelstatic.DifficultyThreshold;
import com.ilya.dnd.modelstatic.MonsterMultiplier;
import com.ilya.dnd.repository.MonsterRepository;
import com.ilya.dnd.util.mapper.MonsterMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class BattleEventGenerator {
    private final static int NUMBER_OF_PLAYERS = 4;
    private final static double DIFFICULTY_RANGE_PERCENT = 0.20;

    @Autowired
    private MonsterRepository monsterRepository;

    @Autowired
    private MonsterMapper monsterMapper;

    public BattleEvent generateBattleEvent(int level, String difficulty) throws GenerationException {
        BattleEvent event = new BattleEvent();
        event.setMonsters(retrieveMonsterForBattle(level, difficulty));
        //TODO expand this with random descriptions
        event.setDescription("Battle begins");
        int experienceReward = 0;
        for (MonsterDto monster : event.getMonsters()) {
            experienceReward += ChallengeRating.getExpByCrValue(monster.getChallengeRating());
        }
        event.setExperience(experienceReward);
        //TODO refactor this with coolier rewards
        event.setReward(experienceReward / 2);

        return event;
    }

    private List<MonsterDto> retrieveMonsterForBattle(int level, String difficulty) throws GenerationException {
        DifficultyThreshold threshold = DifficultyThreshold.findByLevel(level);
        int expThreshold = calculateExpThreshold(threshold, difficulty);

        List<ChallengeRating> challengeRatings;
        try {
            challengeRatings = ChallengeRating.getRange(expThreshold / NUMBER_OF_PLAYERS);

            List<Monster> monsterEntities = monsterRepository.findAllBetweenCr(challengeRatings.get(0).getValue(), challengeRatings.get(challengeRatings.size() - 1).getValue());

            List<MonsterDto> monsters = monsterMapper.mapMonsterEntityCollectionToFullDto(monsterEntities);

            return chooseMonstersByExpThreshold(monsters, expThreshold);
        } catch (JpaException e) {
            throw new GenerationException("Exception during find all with CR ");
        }
    }

    private List<MonsterDto> chooseMonstersByExpThreshold(List<MonsterDto> monsters, int expThreshold) {
        double totalMonstersExp = 0;
        List<MonsterDto> battleMonsters = new ArrayList<>();
        int monsterCount = 0;
        int refresh = 0;
        do {
            monsterCount++;
            int randomPosition = (int) (Math.random() * (monsters.size() - 1));
            int monsterExp = ChallengeRating.findByCrValue(monsters.get(randomPosition).getChallengeRating()).getExpValue();
            totalMonstersExp += monsterExp;
            totalMonstersExp *= MonsterMultiplier.getMultiplier(monsterCount);

            battleMonsters.add(monsters.get(randomPosition));

            double allowedExpThreshold = expThreshold + (expThreshold * DIFFICULTY_RANGE_PERCENT);
            if (totalMonstersExp > allowedExpThreshold) {
                battleMonsters.remove(battleMonsters.remove(battleMonsters.size() - 1));

                totalMonstersExp /= MonsterMultiplier.getMultiplier(monsterCount);
                totalMonstersExp -= monsterExp;
                monsterCount--;
                refresh++;
                if (refresh == 3) {
                    battleMonsters = new ArrayList<>();
                    monsterCount = 0;
                    totalMonstersExp = 0;
                }
            }
        } while (totalMonstersExp < (expThreshold - (expThreshold * DIFFICULTY_RANGE_PERCENT)));

        return battleMonsters;
    }

    private int calculateExpThreshold(DifficultyThreshold threshold, String difficulty) throws GenerationException {
        int expThreshold;
        switch (difficulty) {
            case "EASY": {
                expThreshold = threshold.getEasy() * NUMBER_OF_PLAYERS;
            }
            break;
            case "MEDIUM": {
                expThreshold = threshold.getMedium() * NUMBER_OF_PLAYERS;
            }
            break;
            case "HARD": {
                expThreshold = threshold.getHard() * NUMBER_OF_PLAYERS;
            }
            break;
            case "DEADLY": {
                expThreshold = threshold.getDeadly() * NUMBER_OF_PLAYERS;
            }
            break;
            default:
                throw new GenerationException("No such difficulty type");
        }
        return expThreshold;
    }
}
