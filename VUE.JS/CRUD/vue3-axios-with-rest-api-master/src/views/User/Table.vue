<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr  v-for="user in users" :key="user.id">
        <td>{{user.name}}</td>
        <td>{{user.email}}</td>
        <td>{{user.age}}</td>
        <td>
          <button class="btn btn-info btn-sm" @click="selectDetailUser(user)">Details</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
  
  <script>
  // import {useSelectUserStore} from '@/store/index';
export default {
  name: "UserTable",
  props: {
    users:Array
  },
  // data(){
  //   return{
  //     store:useSelectUserStore()
  //   }
  // },
  methods: {
    selectDetailUser(user) {
      this.$emit("select-user", user);
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