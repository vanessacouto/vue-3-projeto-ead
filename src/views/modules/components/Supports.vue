<template>
  <div class="comments" v-show="lesson.name">
    <div class="header">
      <span class="title">Dúvidas</span>
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
import { computed } from "vue";

import Supports from "@/components/Supports";

export default {
  name: "SupportsLesson",
  setup() {
    const store = useStore();

    // aula que está sendo exibida no player
    const lesson = computed(() => store.state.courses.lessonPlayer)

    return {
      lesson
    }
  },
  components: {
    Supports,
  },
};
</script>