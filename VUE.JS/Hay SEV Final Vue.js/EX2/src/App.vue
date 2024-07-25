<template>
  <div class="container">
    <!-- Add User Form -->
    <div class="row">
      <div class="col-md-6 mx-auto">
        <form @submit.prevent="addUser" class="mb-3">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Name"
              v-model="newUser.name"
            />
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              v-model="newUser.email"
            />
            <button type="submit" class="btn btn-primary">Add User</button>
          </div>
        </form>
      </div>
    </div>

    <!-- User List -->
    <div class="row">
      <div class="col-md-6 mx-auto">
        <ul class="list-group">
          <li v-for="user in users" :key="user.id">
            <div>
              <span>{{ user.name }}</span> - <span>{{ user.email }}</span>
              <button
                class="btn btn-danger btn-sm float-end"
                @click="removeUser(user.id)"
              >
                Remove
              </button>
              <button
                class="btn btn-primary btn-sm float-end me-2"
                @click="toggleEditMode(user.id)"
              >
                Edit
              </button>
            </div>

            <div class="input-group" v-if="user.editMode">
              <input type="text" class="form-control"  v-model="editUser.name" />
              <input
                type="email"
                class="form-control"
                v-model="editUser.email"
              />
              <button class="btn btn-success btn-sm" @click="saveUserEdit(user.id)">
                Save
              </button>
            </div>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id:"1", name: "Alice", email: "alice@example.com", editMode: false },
        { id:"2", name: "Bob", email: "bob@example.com", editMode: false },
        { id:"3", name: "Charlie", email: "charlie@example.com", editMode: false },
      ],
      newUser: { id:"", name: "", email: "" },
      editUser: { name: "", email: "" ,editMode:false},
      id:4,
    };
  },
  methods: {
    addUser() {
      this.users.push(this.newUser);
      this.newUser = { id:this.id, name: "", email: "" };
      this.id++;
    },
    removeUser(userId) {
      let index = this.users.findIndex((user) => user.id === userId);
      if (index !== -1) {
        this.users.splice(index, 1);
      }
    },
    toggleEditMode(userId) {
      let index = this.users.findIndex((user) => user.id === userId);
      this.users[index].editMode = true;
    },
    saveUserEdit(userId) {
      let index = this.users.findIndex((user) => user.id === userId);
      let editedUser = this.users[index];
      editedUser.name = this.editUser.name;
      editedUser.email = this.editUser.email;
      editedUser.editMode = false;
    },
  },
};
</script>

<style>
</style>
