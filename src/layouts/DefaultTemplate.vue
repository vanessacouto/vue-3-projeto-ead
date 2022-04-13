<template>
  <div>
    <!-- header component -->
    <header-component />

    <!-- conteudo dinamico -->
    <section>
      <router-view></router-view>
    </section>

    <!-- footer component -->
    <footer-component />
  </div>
</template>

<script>
import { onBeforeMount } from '@vue/runtime-core';

import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "DefaultTemplate",

  setup() {
    onBeforeMount(() => {
      document.body.classList.add('page')
      document.body.classList.add('light')

      document.title = 'Curso EAD com Vue.js 3 - EspecializaTI'
    })
  },

  components: {
    HeaderComponent,
    FooterComponent
  },
};
</script>