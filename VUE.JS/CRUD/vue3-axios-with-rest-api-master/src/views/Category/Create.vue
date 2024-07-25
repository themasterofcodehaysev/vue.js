<template>
  <div class="container mt-4">
    <h1 class="mb-4">Create Category</h1>
    <Form @submit="submitForm" :validation-schema="CategorySchema" v-slot="{ errors }">
      <div class="mb-3">
        <label for="category-name" class="form-label">Name</label>
        <Field
          name="name"
          type="text"
          class="form-control"
          id="category-name"
          v-model="category.name"
          :style="{ borderColor: errors && errors['name'] ? 'red' : '' }"
          validateOnInput
          
        />
        
         <ErrorMessage name="name" class="text-danger"/>
      </div>
      <div class="mb-3">
        <label for="category-description" class="form-label">Description</label>
        <Field
          name="description"
          class="form-control"
          id="category-description"
          v-model="category.description"
          required
          :style="{ borderColor: errors && errors['description'] ? 'red' : '' }"
          validateOnInput
        />
        
        <ErrorMessage name="description" class="text-danger" />
      </div>
      <button type="submit" class="btn btn-primary">Create Category</button>
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import {CategorySchema} from "@/validation/validation-schema.js";
import axios from "axios";

export default {
  name: "create-category",
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
  methods: {
    async submitForm(values) {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/category/create",
          values
        );
        if (response.data.success) {
          this.$router.push("/categories");
        }
      } catch (error) {
        console.error("Error creating category:", error);
      }
    },
  },
};
</script>