// useAuth.js
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      setIsLoggedIn(true);
      fetchCourses(token);
    }
  }, []);

  const fetchCourses = async (token) => {
    try {
      const res = await fetch("http://localhost:8080/api/myclassroom", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        setCourses(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    window.location.reload();
  };

  return { isLoggedIn, courses, handleLogout };
};

export default useAuth;
