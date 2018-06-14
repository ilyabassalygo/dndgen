package com.ilya.dnd.exception;

public class ExceptionMessage {
    private String text;

    public ExceptionMessage() {
    }

    public ExceptionMessage(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
