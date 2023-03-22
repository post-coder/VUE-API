const { createApp } = Vue;

createApp({
  // una lista di todo
  // che posso vedere e eliminare quelli che ho già fatto

  data() {
    return {
      userNumber: null,
      pcNumber: null,
    }
  },

  created() {
  
    // richiedo il primo numero
    axios.get('https://flynn.boolean.careers/exercises/api/random/int').then((res) => {
        console.log(res);

        // lo assegno alla mia proprietà
        this.userNumber = res.data.response;

    });

    // richiedo il secondo numero
    axios.get('https://flynn.boolean.careers/exercises/api/random/int').then((res) => {
        console.log(res);

        // lo assegno alla mia proprietà
        this.pcNumber = res.data.response;
    });
  },



}).mount('#app');