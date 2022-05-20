package com.uuu.fullstack.backenddm1.handler;

import com.uuu.fullstack.backenddm1.beans.Project;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.HashMap;
import java.util.Map;

@Slf4j
public class MapValidationError {
    public static ResponseEntity<Map<String, String>> getMapResponseEntity(Project p, BindingResult result) {
        log.info("Project{}", p);
        if (result.hasErrors()) {
            Map<String, String> errorMap = new HashMap<>();
            for (FieldError e : result.getFieldErrors()) {
                log.info("error:{},{}",e.getField(), e.getDefaultMessage());
                errorMap.put(e.getField(), e.getDefaultMessage());
            }

            // should not proceed
            return new ResponseEntity<>(errorMap, HttpStatus.BAD_REQUEST);
        }
        return null;
    }
}