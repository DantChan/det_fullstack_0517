package com.uuu.fullstack.backenddm1.controllers;

import com.uuu.fullstack.backenddm1.beans.Project;
import com.uuu.fullstack.backenddm1.handler.MapValidationError;
import com.uuu.fullstack.backenddm1.service.ProjectService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

@RestController
@RequestMapping("/api/project")
@Slf4j
public class ProjectController {
    @Autowired
    ProjectService projectService;

    @PostMapping("")
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project p,
                                              BindingResult result) {
        ResponseEntity<Map<String, String>> errorMap =
                MapValidationError.getMapResponseEntity(p, result);
        if (errorMap != null) return errorMap;
        Project newProject = projectService.saveOrUpdateProject(p);
        //return new ResponseEntity<>(newProject, HttpStatus.OK);
        return new ResponseEntity<>(newProject, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public Iterable<Project> getAllProjects() {
        return projectService.findAllProject();
    }

    @GetMapping("/{projectId}")
    public ResponseEntity<?> getProjectById(@PathVariable String projectId) {

        Project p = projectService.findProjectByIdentifier(projectId.toUpperCase());
        return new ResponseEntity<>(p, HttpStatus.OK);

    }
}
