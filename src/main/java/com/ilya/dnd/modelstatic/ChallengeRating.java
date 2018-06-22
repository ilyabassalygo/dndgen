package com.ilya.dnd.modelstatic;

import com.ilya.dnd.exception.EntityNotFoundException;

import java.util.ArrayList;
import java.util.List;

public enum ChallengeRating {
    CR08("0.98", 25),
    CR04("0.99", 50),
    CR02("1", 100),
    CR1("1.1", 200),
    CR2("2", 450),
    CR3("3", 700),
    CR4("4", 1100),
    CR5("5", 1800),
    CR6("6", 2300),
    CR7("7", 2900),
    CR8("8", 3900),
    CR9("9", 5000),
    CR10("10", 5900),
    CR11("11", 7200),
    CR12("12", 8400),
    CR13("13", 10000),
    CR14("14", 11500),
    CR15("15", 13000),
    CR16("16", 15000),
    CR17("17", 18000),
    CR18("18", 20000),
    CR19("19", 22000),
    CR20("20", 25000),
    CR21("21", 33000),
    CR22("22", 41000),
    CR23("23", 50000),
    CR24("24", 62000),
    CR30("30", 155000);

    private String value;
    private int expValue;
    private static final int ONE_LEVEL_SHIFT = 1;
    private static final int TWO_LEVEL_SHIFT = 2;

    //TODO refactor this heavy kostil
    private static String parseCr(String cr) {
        switch (cr) {
            case "1":
                return "1.1";
            case "1/2":
                return "1";
            case "1/4":
                return "0.99";
            case "1/8":
                return "0.98";
        }
        return cr;
    }

    public static ChallengeRating findByCrValue(String cr) {
        cr = parseCr(cr);
        for (ChallengeRating challengeRating : values()) {
            if (challengeRating.getValue().equals(cr)) {
                return challengeRating;
            }
        }
        throw new EntityNotFoundException("Can't find monster with cr " + cr);
    }

    public static int getExpByCrValue(String cr) {
        cr = parseCr(cr);
        for (ChallengeRating challengeRating : values()) {
            if (challengeRating.getValue().equals(cr)) {
                return challengeRating.getExpValue();
            }
        }
        throw new EntityNotFoundException("Can't find monster with cr " + cr);
    }

    //
    public static List<ChallengeRating> getRange(int expValue) {
        List<ChallengeRating> challengeRatings = new ArrayList<>();
        for (int i = 1; i < values().length; i++) {
            if (expValue >= values()[i - ONE_LEVEL_SHIFT].getExpValue() && expValue <= values()[i].getExpValue()) {

                if ((i - TWO_LEVEL_SHIFT) > 0) {
                    challengeRatings.add(values()[i - TWO_LEVEL_SHIFT]);
                }
                challengeRatings.add(values()[i - ONE_LEVEL_SHIFT]);
                challengeRatings.add(values()[i]);
                if ((i + ONE_LEVEL_SHIFT) < values().length) {
                    challengeRatings.add(values()[i + ONE_LEVEL_SHIFT]);
                }
                if ((i + TWO_LEVEL_SHIFT) < values().length) {
                    challengeRatings.add(values()[i + TWO_LEVEL_SHIFT]);
                }
                return challengeRatings;
            }
        }
        return challengeRatings;
    }

    ChallengeRating(String value, int expValue) {
        this.value = value;
        this.expValue = expValue;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public int getExpValue() {
        return expValue;
    }

    public void setExpValue(int expValue) {
        this.expValue = expValue;
    }
}
