package com.compileit.backend.service;

import com.compileit.backend.entity.Course;
import com.compileit.backend.entity.User;
import com.compileit.backend.repository.CourseRepository;
import com.compileit.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final CourseRepository courseRepository;

    public User getUserDetails(String email) {
        return userRepository.findByEmailIgnoreCase(email).orElseThrow(() -> new RuntimeException("User not found"));

    }
    public Set<Course> getUserCourses(String email) {
        User user = userRepository.findByEmailIgnoreCase(email)
                .orElseThrow(() -> new RuntimeException("User not found with email: " + email));
        return user.getCourses();
    }
//    public List<Course> getUserCourses(String email) {
//        System.out.println("Fetching courses for email: " + email);
//        User user = userRepository.findByEmailIgnoreCase(email)
//                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));
//        return user.getCourses();
//    }



    public void registerCourse(String email, String courseId) {
        User user = userRepository.findByEmailIgnoreCase(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found"));

        user.getCourses().add(course);
        userRepository.save(user);
    }
    public void addCourseToUser(String email, Course course) {
        User user = userRepository.findByEmailIgnoreCase(email).orElseThrow(() -> new RuntimeException("User not found"));

        // Check if the course already exists in DB or save it
        Course existingCourse = courseRepository.findById(course.getCourseId()).orElse(courseRepository.save(course));

        if (user.getCourses() == null) {
            user.setCourses(new HashSet<>());
        }

        user.getCourses().add(existingCourse);
        userRepository.save(user);
    }
}

