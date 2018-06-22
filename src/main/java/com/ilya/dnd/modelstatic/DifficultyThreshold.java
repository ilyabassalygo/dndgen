package com.ilya.dnd.modelstatic;

public enum DifficultyThreshold {
    FIRST(1, 25, 50, 75, 100),
    SECOND(2, 50, 100, 150, 200),
    THIRD(3, 75, 150, 225, 400),
    FOURTH(4, 125, 250, 375, 500),
    FIFTH(5, 250, 500, 750, 1100),
    SIXTH(6, 300, 600, 900, 1400),
    SEVENTH(7, 350, 750, 1100, 1700),
    EIGHTS(8, 450, 900, 1400, 2100),
    NINES(9, 550, 1100, 1600, 2400),
    TENS(10, 600, 1200, 1900, 2800),
    ELEVENS(11, 800, 1600, 2400, 3600),
    TWELVES(12, 1000, 2000, 3000, 4500),
    THIRTEENS(13, 1100, 2200, 3400, 5100),
    FOURTEENS(14, 1250, 2500, 3800, 5700),
    FIFTEENS(15, 1400, 2800, 4300, 6400),
    SIXTEENS(16, 1600, 3200, 4800, 7200),
    SEVENTEENS(17, 2000, 3900, 5900, 8800),
    EIGHTEENS(18, 2100, 4200, 6300, 9500),
    NINETEENS(19, 2400, 4900, 7300, 10900),
    TWELVE(20, 2800, 5760, 8500, 12700);

    private int level;
    private int easy;
    private int medium;
    private int hard;
    private int deadly;

    DifficultyThreshold(int level, int easy, int medium, int hard, int deadly) {
        this.level = level;
        this.easy = easy;
        this.medium = medium;
        this.hard = hard;
        this.deadly = deadly;
    }

    public static DifficultyThreshold findByLevel(int level) {
        for (DifficultyThreshold threshold : values()) {
            if (threshold.getLevel() == level) {
                return threshold;
            }
        }
        return null;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public int getEasy() {
        return easy;
    }

    public void setEasy(int easy) {
        this.easy = easy;
    }

    public int getMedium() {
        return medium;
    }

    public void setMedium(int medium) {
        this.medium = medium;
    }

    public int getHard() {
        return hard;
    }

    public void setHard(int hard) {
        this.hard = hard;
    }

    public int getDeadly() {
        return deadly;
    }

    public void setDeadly(int deadly) {
        this.deadly = deadly;
    }
}
