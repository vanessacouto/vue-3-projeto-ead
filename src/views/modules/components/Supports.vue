<template>
  <div class="comments" v-show="lesson.name">
    <div class="header">
      <span class="title">Dúvidas (total: {{ supports.length }}) <span v-if="loading">(Carregando...)</span> </span>
      <button class="btn primary">
        <i class="fas fa-plus"></i>
        Enviar nova dúvida
      </button>
    </div>

    <supports />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref, watch } from "vue";

import Supports from "@/components/Supports";

export default {
  name: "SupportsLesson",
  setup() {
    const store = useStore();

    // aula que está sendo exibida no player
    const lesson = computed(() => store.state.courses.lessonPlayer);
    const supports = computed(() => store.state.supports.supports.data);
    const loading = ref(false);

    // só vai chamar a action se o valor de 'lesson' mudar
    watch(
      () => store.state.courses.lessonPlayer, // observa o valor de lessonPlayer
      () => {
        // ação que deve executar se o valor de lessonPlayer mudar
        loading.value = true;
        store
          .dispatch("getSupportsOfLesson", lesson.value.id) // pega as duvidas da aula que mudou
          .finally(() => (loading.value = false)); // quando finalizar, retorna o loading para false
      }
    );

    return {
      lesson,
      loading,
      supports
    };
  },
  components: {
    Supports,
  },
};
</script>