package com.ilya.dnd.modelstatic;

public enum MonsterMultiplier {
    ONE(1, 1),
    TWO(2, 1.5),
    THREE(3, 2);

    private int monstersNumber;
    private double multiplier;

    public static double getMultiplier(int monstersNumber) {
        for (MonsterMultiplier multiplier : values()) {
            if (multiplier.getMonstersNumber() == monstersNumber) {
                return multiplier.getMultiplier();
            }
        }
        return 1;
    }

    MonsterMultiplier(int monstersNumber, double multiplier) {
        this.monstersNumber = monstersNumber;
        this.multiplier = multiplier;
    }

    public int getMonstersNumber() {
        return monstersNumber;
    }

    public void setMonstersNumber(int monstersNumber) {
        this.monstersNumber = monstersNumber;
    }

    public double getMultiplier() {
        return multiplier;
    }

    public void setMultiplier(double multiplier) {
        this.multiplier = multiplier;
    }
}
