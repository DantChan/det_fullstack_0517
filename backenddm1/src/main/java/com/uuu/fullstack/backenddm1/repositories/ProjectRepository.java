package com.uuu.fullstack.backenddm1.repositories;

import com.uuu.fullstack.backenddm1.beans.Project;
import org.springframework.data.repository.CrudRepository;

public interface ProjectRepository extends CrudRepository<Project, Long> {
    Project findByProjectIdentifier(String identifier);
}
