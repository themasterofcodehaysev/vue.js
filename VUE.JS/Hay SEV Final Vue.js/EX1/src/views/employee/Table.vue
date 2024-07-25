<template>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr  v-for="employee in employees" :key="employee.id">
        <td>{{employee.name}}</td>
        <td>{{employee.email}}</td>
        <td>{{employee.age}}</td>
        <td>
          <button class="btn btn-info btn-sm" @click="selectDetailEmployee(employee)">Details</button>
        </td>
      </tr>
      </tbody>
    </table>
  </template>
  
  <script>
    
  export default {
    name: 'EmployeeTable',
    props:{
       employees:Array
    },
    methods: {
    selectDetailEmployee(employee) {
      this.$emit("select-employee", employee);
    },
  },
  };
  </script>
  
  <style>
  .table {
    width: 100%;
    margin-top: 20px;
  }
  </style>
  