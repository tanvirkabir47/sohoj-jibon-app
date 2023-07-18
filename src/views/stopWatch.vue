<template>
    <section class="section-padding">
        <div class="container">
            <div class="stopwatch">
                <h1>বিরাম <span>ঘড়ি</span> </h1>
            <div class="display">{{ time }}</div>
                <button v-if="!running" @click="start" class="btn btn-primary">Start</button>
                <button v-if="running" @click="stop" class="btn btn-danger">Stop</button>
                <button @click="reset" class="btn btn-warning">Reset</button>
                <button v-if="running" @click="record" class="btn btn-success">Record</button> 
                <ol v-if="records.length > 0">
                    <!-- show the recorded times in a list -->
                    <li v-for="(record, index) in records" :key="index">
                    {{ record }}
                    </li>
                </ol>
            </div>
        </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        running: false,
        startTime: null,
        elapsedTime: 0,
        interval: null,
        records: [] // store the recorded times in an array
      };
    },
    computed: {
      time() {
        let milliseconds = Math.floor((this.elapsedTime % 1000) / 10);
        let seconds = Math.floor(this.elapsedTime / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        seconds = seconds % 60;
        minutes = minutes % 60;
        hours = hours % 24;
        return `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds
          .toString()
          .padStart(2, "0")}`;
      }
    },
    methods: {
      start() {
        this.running = true;
        this.startTime = Date.now();
        this.interval = setInterval(() => {
          this.elapsedTime = Date.now() - this.startTime;
          localStorage.setItem("elapsedTime", this.elapsedTime); // save the elapsed time in local storage
        }, 10);
      },
      stop() {
        this.running = false;
        clearInterval(this.interval);
      },
      reset() {
        this.running = false;
        this.startTime = null;
        this.elapsedTime = 0;
        localStorage.removeItem("elapsedTime"); // remove the elapsed time from local storage
        clearInterval(this.interval);
        this.records = []; // clear the records array
      },
      record() {
        // add the current time to the records array
        this.records.push(this.time);
      }
    },
    mounted() {
      // check if there is a saved elapsed time in local storage
      let savedTime = localStorage.getItem("elapsedTime");
      if (savedTime) {
        this.elapsedTime = Number(savedTime); // restore the elapsed time from local storage
      }
    }
  };
  </script>
  
  <style scoped>
  .container{
    max-width: 800px;
  }
  .stopwatch {
    text-align: center;
    background: #fff;
    border-radius: 5px;
    margin: 50px 0;
    padding: 20px 8px;
  }
  .stopwatch h1{
    font-weight: bold;

  }
  .stopwatch h1 span{
    color: crimson;
  }
  .display{
    font-size: 25px;
    border: 2px solid crimson;
    width: max-content;
    margin: auto;
    padding: 10px 20px;
    margin-top: 25px;
    margin-bottom: 20px;
    border-radius: 5px;
    font-weight: bold;
  }
  button {
    margin: 10px;
    font-weight: bold;
  }
  ol{
    width: 40%;
    display: table;
    margin: auto;
  }
  ol li{
    font-size: 20px;
    border: none;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    margin: 10px 0;
    padding: 5px 10px;
    border-radius: 5px;
  }


   
    /* Responsive for Mobile View */
  
    @media only screen and (max-width: 667px){
      ol{
        width: 100%;
      }
    }



  </style>