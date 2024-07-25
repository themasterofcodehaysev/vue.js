<template>
  <h1 class="ms-5">Create Category</h1>
  <div class="form-container mx-5">
    <form @submit.prevent="createCategory" class="mx-4">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="name"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea
          class="form-control"
          id="description"
          rows="3"
          v-model="description"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>

  <h1 class="ms-5">List Category</h1>
  <div class="container" v-for="category in categories" :key="category.id">
    <ul class="list-group mt-4">
      <li class="list-group-item" :id="category.id">
        <h4>{{ category.name }}</h4>
        <p>{{ category.description }}</p>
        <button
          class="btn btn-info btn-sm"
          @click="showCategoryDetails(category.id)"
        >
          Show Details
        </button>
        <button
          class="btn btn-secondary btn-sm ms-1"
          @click="editCategory(category.id)"
        >
          Edit
        </button>
        <button
          class="btn btn-danger btn-sm ms-1"
          @click="deleteCategory(category.id)"
        >
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: {
        name: "",
        description: "",
      },
      categories: [],
      editingCategory: null,
    };
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/category/list"
        );
        if (response.data.success) {
          return (this.categories = response.data.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },
    async createCategory() {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/category/create",
          {
            name: this.name,
            description: this.description,
          }
        );
        if (response.data.success) {
          // Reset the form
          this.name = "";
          this.description = "";
          // Fetch the updated list of categories
          await this.fetchCategories();
        }
      } catch (error) {
        console.error("Error creating category:", error);
      }
    },

    async deleteCategory(categoryId) {
      console.log(categoryId);
      try {
        const response = await axios.delete(
          `http://127.0.0.1:8000/api/category/delete/${categoryId}`
        );
        if (response.data.success) {
          await this.fetchCategories();
        }
      } catch (error) {
        console.error("Error deleting category:", error);
      }
    },
    async showCategoryDetails(categoryId) {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/category/show/${categoryId}`
        );

        if (response.data.success) {
          this.selectedCategory = response.data.data;
        }
      } catch (error) {
        console.error("Error fetching category details:", error);
      }
    },
  },
  mounted() {
    this.fetchCategories();
  },
};
</script>

<style>
</style>