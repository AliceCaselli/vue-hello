
  const { createApp } = Vue

  createApp({
    data() {
      return {
        title: "Benvenuto in Vue!",
        image: "img/fiero.jpg",
      }
    }
  }).mount('#app')