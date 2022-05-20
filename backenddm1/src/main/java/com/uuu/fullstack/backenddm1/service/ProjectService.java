package com.uuu.fullstack.backenddm1.service;

import com.uuu.fullstack.backenddm1.beans.Project;
import com.uuu.fullstack.backenddm1.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository repository;

    public Project saveOrUpdateProject(Project p){
        return repository.save(p);
    }
}
