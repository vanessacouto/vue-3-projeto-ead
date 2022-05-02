<template>
  <div class="training">
    <div class="card bg-laravel">
      <span class="icon">
        <img src="images/icons/laravel.svg" alt="" />
      </span>
      <span class="title">{{ lesson.name }}</span>
      <router-link :to="{ name: 'campus.home' }" class="btn laravel">
        <i class="fas fa-chevron-left"></i>
        Voltar
      </router-link>
    </div>
    <iframe
      v-if="lesson.video"
      width="100%"
      height="auto"
      :src="lesson.video"
      :title="lesson.name"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <div class="description-lesson" v-if="lesson.description">
    {{ lesson.description }}
  </div>
</template>

<script>
import { computed, watch } from "vue";
import { useStore } from "vuex";

export default {
  name: "Player",
  setup() {
    const store = useStore();

    const lesson = computed(() => store.state.courses.lessonPlayer);

    // o watch vai monitorar toda vez que mudar o valor do lessonPlayer, para poder dispar o 'markLessonViewed' quando satisfeita a condição do if
    watch(
      () => store.state.courses.lessonPlayer,
      () => {
        if (lesson.value.id != '') // só dispara se o valor for diferente do default (que é vazio)
          setTimeout(() => store.dispatch("markLessonViewed"), 3000); // só aplica depois de alguns segundos
      });

    return {
      lesson,
    };
  },
};
</script>