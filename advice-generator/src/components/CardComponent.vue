<script>
  import axios from 'axios'

    export default {
        data() {
          return {
              advices: null,
            }
        },
        methods: {
          fetchData( ){
              axios.get('https://api.adviceslip.com/advice')
              .then(res => this.advices = res.data)
            }
        },
        mounted() {
          this.fetchData();
        },
    }
</script>   

<template>
    <div class="container">
        <div :key="advice.id" v-for="(advice) in advices">
            <h3>Advice #{{advice.id}}</h3>
            <p>"{{advice.advice}}"</p>
        </div>
          <img src="../assets/pattern-divider-desktop.svg" class="desktop" alt="Divider" />
          <img src="../assets/pattern-divider-mobile.svg" class="mobile" alt="Divider" /><div>
        </div>
        <div 
        class="dice"
        @click="fetchData"
        >
          <img src="../assets/icon-dice.svg" alt="dice" />
        </div>
    </div>    
</template>


<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap');

  .container {
      position:relative;
      display:flex;
      flex-direction:column;
      align-items:center;
      background-color:hsl(217, 19%, 24%);
      text-align:center;
      max-width:85%;
      margin: 0 auto;
      border-radius:8px;
      padding:2rem 1rem;
      padding-bottom:5rem;
      font-family: 'Manrope', sans-serif;
    }
  .container p {
      color:hsl(193, 38%, 86%);
      font-size:28px;
      max-width:90%;
      margin: 0 auto;
      padding-top:1rem;
      padding-bottom:1.5rem;
    }
  .container h3 {
      text-transform:uppercase;
      color:hsl(150, 100%, 66%);
      font-size:.9rem;
  }
  .desktop {
      display:none;
  } 
  img {
      width:90%;
  }
  .dice {
      position:absolute;
      background-color:hsl(150, 100%, 66%);
      width:25px;
      height:25px;
      padding:1.25rem;
      border-radius:100%;
      bottom:-30px;
      cursor:pointer;
    }
  @media (min-width:768px) {
    .desktop {
        display:block;
    }
    .mobile {
        display:none;
    }
    .container {
        max-width:600px;
    }
    .container p {
        max-width:70%;
    }
    }
</style>
