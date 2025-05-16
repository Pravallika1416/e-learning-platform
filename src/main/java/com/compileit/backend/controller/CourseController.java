package com.compileit.backend.controller;

import com.compileit.backend.entity.Course;
import com.compileit.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class CourseController {

    private final UserService userService;

    @PostMapping("/api/register-course")
    public String registerForCourse(@AuthenticationPrincipal User user, @RequestBody Course course) {
        if (user != null) {
            userService.addCourseToUser(user.getUsername(), course); // Implement this logic in service layer
            return "Successfully registered for " + course.getCourseName();
        }
        return "Unauthorized access.";
    }
}
