<template>
  <div class="home">
    <h2>Dad Jokes Lol</h2>
    <h1>{{joke}}</h1>
    <button class="addJoke">Add Joke</button>
  </div>
</template>

<script>


export default {
  name: 'Home',
  
  // Return object
  data : () => ({
   joke: '' 
  }),
  
  //Lifecycle hook (when component has just been initialized)
  mounted() {
  this.joke = this.$store.getters.getCurrentJoke;
  },

  components: {
    
  }
}
</script>

<style>
h2{
color: rgb(85, 85, 223);  
font-weight: bold;
}
.home{
background:rgb(213, 236, 245); 
padding: 10px; 
box-shadow: 0 0 10px rgba(0,0,0,0.5);
border-radius: 5px;
}
.addJoke{
background: rgb(85, 85, 223);  
padding: 5px 10px;
border-radius: 20px;
color: white;
font-size: 1.2rem;
cursor: pointer;
margin-top: 100px;
margin-bottom: 20px;
}
</style>
