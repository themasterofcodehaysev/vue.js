<template>
  <div class="container mt-4">
    <h1 class="mb-4">Edit Category</h1>
    <!-- <form @submit.prevent="updateCategory"> -->
    <Form @submit="submitForm" :validation-schema="CategorySchema" v-slot="{ errors }">
      <div class="mb-3">
        <label for="category-name" class="form-label">Name</label>
        <Field
          name="name"
          type="text"
          class="form-control"
          id="category-name"
          v-model="category.name"
          rules="required|minLength:3"
          :style="{ borderColor: errors && errors['name'] ? 'red' : '' }"
          validateOnInput
        />
        <ErrorMessage name="name" class="text-danger" />
      </div>
      <div class="mb-3">
        <label for="category-description" class="form-label">Description</label>
        <Field
          name="description"
          class="form-control"
          id="category-description"
          v-model="category.description"
          required
          rules="required|minLength:3"
          :style="{ borderColor: errors && errors['description'] ? 'red' : '' }"
          validateOnInput
        />
        <ErrorMessage name="description" class="text-danger" />
      </div>
      <button type="submit" class="btn btn-primary">Update Category</button>
    </Form>
  </div>
</template>
  
  <script>
import axios from "axios";
import { Form, Field, ErrorMessage } from "vee-validate";
import CategorySchema from "@/validation/validation-schema.js";



export default {
  name: "edit-category",
  props: ["id"],
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      category: {
        name: "",
        description: "",
      },
      CategorySchema: CategorySchema,
    };
  },
  mounted() {
    this.fetchCategoryDetails();
  },
  methods: {
    async fetchCategoryDetails() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/category/show/${this.id}`
        );
        if (response.data.success) {
          this.category = response.data.data;
        }
      } catch (error) {
        console.error("Error fetching category details:", error);
      }
    },
    async submitForm() {
      try {
        const response = await axios.put(
          `http://127.0.0.1:8000/api/category/update/${this.id}`,
          this.category
        );
        if (response.data.success) {
          this.$router.push("/categories");
        }
      } catch (error) {
        console.error("Error updating category:", error);
      }
    },
  },
};
</script>
  