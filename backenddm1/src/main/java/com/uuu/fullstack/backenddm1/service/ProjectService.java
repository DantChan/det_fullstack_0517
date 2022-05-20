package com.uuu.fullstack.backenddm1.service;

import com.uuu.fullstack.backenddm1.beans.Project;
import com.uuu.fullstack.backenddm1.exception.ProjectIdException;
import com.uuu.fullstack.backenddm1.repositories.ProjectRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Locale;

@Service
@Slf4j
public class ProjectService {
    @Autowired
    private ProjectRepository repository;

    public Project saveOrUpdateProject(Project p){
        try {
            p.setProjectIdentifier(p.getProjectIdentifier().toUpperCase(Locale.ROOT));
            return repository.save(p);
        } catch (Exception e) {
            log.info("project id={}", p.getProjectIdentifier());
            log.info("project repo got some error:{}", e.getMessage());
            throw new ProjectIdException("Project ID:"+p.getProjectIdentifier().toUpperCase());
        }
    }

    public Iterable<Project> findAllProject() {
        return repository.findAll();
    }

    public Project findProjectByIdentifier(String projectID) {
        Project project = repository.findByProjectIdentifier(projectID);
        return project;
    }
}
