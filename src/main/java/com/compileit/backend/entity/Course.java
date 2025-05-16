package com.compileit.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Course {

    @Id
    private String courseId;
    private String courseName;
    private String description;
    private String imageUrl;
}
