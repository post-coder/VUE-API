const { createApp } = Vue;

createApp({
  // una lista di todo
  // che posso vedere e eliminare quelli che ho già fatto

  data() {
    return {
      
      emails: [],
    }
  },

  created() {
    
    this.getEmails(20);

  },

  mounted() {
    // tutta la pagina è stata completata
  },

  methods: {

    getEmails(quantity) {

      for(let i = 0; i < quantity; i++) {
        // dobbiamo fare una chiamata api per ottenere 10 email
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail?count').then((res) => {

          // prelevo la proprietà che contiene la stringa della mail dall'oggetto
          // che mi restituisce il metodo get() di axios
          // e la memorizzo in una variabile
          const mailReceived = res.data.response;

          // inserisco la variabile nell'array delle mail
          this.emails.push(mailReceived);
          
        });

        
      }
      
    },

  },




}).mount('#app');