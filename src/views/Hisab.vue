<template>
  <div class="container">
    <div class="input-table">
    <h1>হিসাব <span>খাতা !</span> </h1>
    <form @submit.prevent="addRow">
      <label for="name"></label>
      <input id="name" v-model="name" type="text" placeholder="নাম" required />
      <label for="money"></label>
      <input id="money" v-model="money" placeholder="টাকা" />
      <button type="submit" class="btn btn-primary float-end">Save</button>
    </form>
    <table v-if="rows.length > 0">
      <thead>
        <tr>
          <th>Name</th>
          <th>Money</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td v-if="!row.editing" :class="{ done: row.done }">{{ row.name }}</td>
          <td v-else><input v-model="row.name" type="text" /></td>
          <td v-if="!row.editing" :class="{ done: row.done }">{{ row.money }}</td>
          <td v-else><input v-model="row.money" /></td>
          <td>
            <!-- Add both done button and edit button -->
            <button @click="deleteRow(index)" class="btn btn-danger">X</button>
            <button v-if="!row.editing" @click="editRow(index)" class="btn btn-warning">🖊️</button>
            <button v-if="!row.editing && !row.done" @click="doneRow(index)" class="btn btn-success">✓</button>
            <button v-else-if="!row.editing && row.done" @click="undoRow(index)" class="btn btn-success">≤</button>
            <button v-else @click="saveRow(index)" class="btn btn-success">✓</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
export default {
  name: "InputTable",
  data() {
    return {
      name: "",
      money: "",
      rows: []
    };
  },
  methods: {
    addRow() {
      this.rows.push({
        name: this.name,
        money: this.money,
        editing: false,
        done: false
      });
      this.name = "";
      this.money = "";
      // Save the data on localStorage
      localStorage.setItem("rows", JSON.stringify(this.rows));
    },
    editRow(index) {
      this.rows[index].editing = true;
    },
    saveRow(index) {
      // Finish editing and save the changes
      this.rows[index].editing = false;
      // Save the data on localStorage
      localStorage.setItem("rows", JSON.stringify(this.rows));
    },
    doneRow(index) {
      // Mark as done without editing
      this.rows[index].done = true;
      // Save the data on localStorage
      localStorage.setItem("rows", JSON.stringify(this.rows));
    },
    undoRow(index) {
      // Mark as not done
      this.rows[index].done = false;
      // Save the data on localStorage
      localStorage.setItem("rows", JSON.stringify(this.rows));
    },
    deleteRow(index) {
      this.rows.splice(index, 1);
      // Save the data on localStorage
      localStorage.setItem("rows", JSON.stringify(this.rows));
    }
  },
  mounted() {
    // Load the data from localStorage
    const savedRows = localStorage.getItem("rows");
    if (savedRows) {
      this.rows = JSON.parse(savedRows);
    }
  }
};
</script>

<style scoped>
.container{
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  margin-bottom: 50px;
}
.input-table h1{
  text-align: center;
  font-weight: bold;
}
.input-table h1 span{
  color: crimson;
}

form{
  position: relative;
  margin-bottom: 50px;
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

label {
  margin-right: 10px;
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
      padding: 20px 8px;
    }
  
  }
  
</style>
