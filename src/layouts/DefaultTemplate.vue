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
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "DefaultTemplate",
  components: {
    HeaderComponent,
    FooterComponent
  },
};
</script>