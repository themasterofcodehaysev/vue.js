<template>
    <div class="card mt-4">
      <div class="card-body">
        <h5 class="card-title">{{ user.name }}</h5>
        <p class="card-text text-muted"><strong>Email:</strong>{{ user.email }} </p>
        <p class="card-text"><strong>Age:</strong> {{ user.age }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserCard',
    props: {
    user: Object,
  },
  };
  </script>
  
  <style>
  .card {
    margin-top: 1rem;
  }
  </style>