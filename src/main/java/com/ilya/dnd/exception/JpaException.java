package com.ilya.dnd.exception;

public class JpaException extends Exception {
    public JpaException() {
    }

    public JpaException(String message) {
        super(message);
    }

    public JpaException(String message, Throwable cause) {
        super(message, cause);
    }

    public JpaException(Throwable cause) {
        super(cause);
    }

    public JpaException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
