<template>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="main-content">
            <div class="market-list">
              <h1>বাজারের তালিকা !</h1>
              <form @submit.prevent="addItem">
                <label for="name"></label>
                <input id="name" v-model="name" placeholder="নাম.." required />
                <label for="weight"></label>
                <input id="weight" v-model.number="weight" placeholder="ওজন" />
                <label for="price"></label>
                <input id="price" v-model.number="price" placeholder="মুল্য" />
                <button type="submit" class="btn btn-primary float-end">Add</button>
              </form>
              <table>
                <thead>
                  <tr>
                    <th>নাম</th>
                    <th>ওজন</th>
                    <th>মুল্য</th>
                    <th>প্রক্রিয়া</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in items" :key="item.id">
                    <td :class="{ done: item.done }" v-if="!item.editing">{{ item.name }}</td>
                    <td v-else><input v-model="item.name" /></td>
                    <td :class="{ done: item.done }" v-if="!item.editing">{{ item.weight }} </td>
                    <td v-else><input v-model.number="item.weight" /></td>
                    <td :class="{ done: item.done }" v-if="!item.editing">{{ item.price }} টাকা</td>
                    <td v-else><input v-model.number="item.price" /></td>
                    <td>
                      <button @click="removeItem(item.id)" class="btn btn-danger">X</button>
                      <button @click="editItem(item.id)" v-if="!item.editing" class="btn btn-warning">🖊️</button>
                      <button @click="saveItem(item.id)" v-else class="btn btn-success">✓</button>
                      <button @click="toggleDone(item.id)" v-if="!item.editing" class="btn btn-success">{{ item.done ? '<' : '✓' }}</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [],
        name: "",
        price: "",
        weight: "",
      };
    },
    mounted() {
      this.items = JSON.parse(localStorage.getItem("items")) || [];
    },
    methods: {
      removeItem(id) {
        this.items = this.items.filter((item) => item.id !== id);
        this.saveItems();
      },
      addItem() {
        this.items.push({
          id: this.items.length + 1,
          name: this.name,
          price: this.price,
          weight: this.weight,
          editing: false,
          done: false,
        });
        this.name = "";
        this.price = "";
        this.weight = "";
        this.saveItems();
      },
      editItem(id) {
        this.items = this.items.map((item) => {
          if (item.id === id) {
            item.editing = true;
          }
          return item;
        });
      },
      saveItem(id) {
        this.items = this.items.map((item) => {
          if (item.id === id) {
            item.editing = false;
          }
          return item;
        });
        this.saveItems();
      },
      toggleDone(id) {
        this.items = this.items.map((item) => {
          if (item.id === id) {
            item.done = !item.done;
          }
          return item;
        });
        this.saveItems();
      },
      saveItems() {
        localStorage.setItem("items", JSON.stringify(this.items));
      },
    },
  };
  </script>
  
  <style scoped>
  
  .container {
    max-width: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
  }
  .main-content{
    display: flex;
    align-items: center;
    margin-bottom: 50px;
  }
  .market-list{
    align-items: center;
  }
  .market-list h1{
    text-align: center;
    font-weight: 800;
  }
  .market-list p{
    font-size: 12px;
    margin-top: 10px;
  }
  
  form{
    position: relative;
    margin-bottom: 50px;
  }
  
  .add-item {
    position: absolute;
    right: 0;
  }
  
  input {
    margin-bottom: 10px;
    padding: 15px 15px;
    border: none;
    border-radius: 5px;
    width: 100%;
  }
  input:focus{
    outline: none;
  }
  table{
    width: 100%;
  }
  thead{
    background: #116A7B;
    color: #fff;
    text-align: center;
  }
  thead th{
    padding: 15px 5px;
  }
  tbody tr{
    text-align: center;
  }
  tbody tr:nth-child(odd){
    background: #fff;
  }
  tbody tr:nth-child(even){
    background: #454545;
    color: #fff;
  }
  tbody td{
    padding: 8px 2px;
    width: 50px;
  }
  
  button.btn.btn-danger, button.btn.btn-success {
      padding: 2px 15px;
      margin-right: 8px;
  }
  button.btn.btn-warning{
      padding: 1px 10px;
      margin-right: 8px;
  }
  .done {
    text-decoration: line-through;
  }
  
  
  
  /* Responsive for Mobile View */
  
  @media only screen and (max-width: 667px){
    tbody td:last-child{
      width: 40%;
    }
    button.btn.btn-danger, button.btn.btn-success {
      padding: 0px 10px;
      margin-right: 5px;
    }
    button.btn.btn-warning{
      padding: 0px 5px;
      margin-right: 5px;
    }
    .container{
      padding: 20px 12px;
    }
  
  }
  
  
  </style>
  