<template>
    <section class="section-padding">
        <div class="container">
            <div class="age-calculator">
            <h1>বয়<span>স হি</span>সাব</h1>
                <p class="age-title">আপনার জন্ম-তারিখ লিখুন:</p>
                <input type="date" v-model="dob" placeholder="Month/Day/Year" />
                <p v-if="dob === '' && clicked" class="warning">[বার্তা] আপনার জন্ম-তারিখ লিখুন !</p>
                <p v-else-if="age" class="age-show"> <span>আপনার বয়স হলো:</span> <br> {{ age }}</p>
                <button v-on:click="calculateAge" class="btn btn-primary">হিসাব করুন</button>
            </div>
        </div>
    </section>
</template>
  



<script>
export default {
  data() {
    return {
      dob: "", // date of birth
      age: "", // age in years, months, and days
    };
  },
  methods: {
    calculateAge() {
      // set the clicked property to true
      this.clicked = true;
      // get the current date
      let today = new Date();
      // get the date of birth
      let birthDate = new Date(this.dob);
      // check if the input is valid
      if (birthDate > today) {
        alert("Invalid date");
        return;
      }
      // get the difference in milliseconds
      let diff = today.getTime() - birthDate.getTime();
      // get the difference in years
      let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      // get the remaining months
      let months = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
      );
      // get the remaining days
      let days = Math.floor(
        ((diff % (1000 * 60 * 60 * 24 * 365)) % (1000 * 60 * 60 * 24 * 30)) /
          (1000 * 60 * 60 * 24)
      );
      // format the age string
      this.age = `${years} বছর, ${months} মাস, ও ${days} দিন`;
    },
  },
};
</script>
  
  <style scoped>
  .container{
    max-width: 800px;
  }
  .age-calculator {
    margin: auto;
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    margin: 50px 0;
  }
  
  .age-calculator h1 {
    text-align: center;
    font-weight: bold;
  }
  .age-calculator h1 span{
    color: crimson;
  }
  .age-calculator p span{
    font-size: 20px;
    font-weight: bold;
  }
  
  .age-calculator input {
    width: 80%;
    display: flex;
    margin: auto;
    margin-bottom: 20px;
    padding: 12px 10px;
    font-size: 18px;
    border: none;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  }
  .age-calculator input:focus{
    outline: none;
  }
  p.age-title{
    text-align: center;
  }
  p.warning{
    text-align: center;
    color: crimson;
    font-size: 13px;
  }
  p.age-show{
    text-align: center;
    width: 70%;
    margin: auto;
    border: 2px solid crimson;
    border-radius: 5px;
    padding: 15px 10px;
    margin-bottom: 20px;
    margin-top: 30px;
  }
  
  .age-calculator button {
    display: block;
    margin: auto;
  }

  
  </style>