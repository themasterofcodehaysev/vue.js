<template>
    <div class="container mt-4">
      <h1 class="mb-4">Students List</h1>
      <router-link to="/student/create" class="btn btn-primary mb-4">Create New Student</router-link>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Province</th>
            <th>Score</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students" :key="student.id">
            <td>{{ student.id }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.age }}</td>
            <td>{{ student.province }}</td>
            <td>{{ student.score }}</td>
            <td>{{ student.phone_number }}</td>
            <td>
              <router-link :to="{ name: 'show-student', params: { id: student.id } }" class="btn btn-info btn-sm">Show</router-link>
              <router-link :to="{ name: 'edit-student', params: { id: student.id } }" class="btn btn-secondary btn-sm">Edit</router-link>
              <button @click="deleteStudent(student.id)" class="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name:'list-student',
    data() {
      return {
        students: [],
      };
    },
    mounted() {
      this.fetchStudent();
    },
    methods: {
      async fetchStudent() {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/student/list');
          if (response.data.success) {
            this.students = response.data.data;
          }
        } catch (error) {
          console.error('Error fetching student:', error);
        }
      },
      async deleteStudent(studentId) {
        try {
          const response = await axios.delete(`http://127.0.0.1:8000/api/student/delete/${studentId}`);
          if (response.data.success) {
            this.fetchStudent();
          }
        } catch (error) {
          console.error('Error deleting student:', error);
        }
      },
    },
  };
  </script>
  