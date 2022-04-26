<template>
  <div class="left">
    <div class="card">
      <div class="title bg-laravel">
        <span class="text">Módulos</span>
        <span class="icon far fa-stream"></span>
      </div>
      <div class="modules" v-for="module in modules" :key="module.id">
        <div class="name">
          <span class="text">{{ module.name }}</span>
          <span class="icon fas fa-sort-down"></span>
        </div>
        <ul class="classes">
          <li class="active" v-for="lesson in module.lessons" :key="lesson.id">
            <span class="check active fas fa-check"></span>
            <span class="nameLesson">{{ lesson.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "Modules",
  setup() {
    const store = useStore();

    // pega os dados do curso selecionado
    //const course = computed(() => store.state.courses.courseSelected);

    // pega os dados dos modulos
    const modules = computed(() => store.state.courses.courseSelected.modules);

    return {
      //course,
      modules,
    }
  },
};
</script>