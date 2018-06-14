package com.ilya.dnd.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class ExceptionController extends ResponseEntityExceptionHandler {

    @ExceptionHandler(value = EntityNotFoundException.class)
    protected ResponseEntity<ExceptionMessage> handleNotFound(EntityNotFoundException ex, WebRequest request){
        ExceptionMessage exceptionMessage = new ExceptionMessage(ex.getMessage());
        return new ResponseEntity<>(exceptionMessage, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(value = InvalidOperationException.class)
    protected ResponseEntity<ExceptionMessage> handleInvalid(InvalidOperationException ex, WebRequest request){
        ExceptionMessage exceptionMessage = new ExceptionMessage(ex.getMessage());
        return new ResponseEntity<>(exceptionMessage, HttpStatus.BAD_REQUEST);
    }
}
