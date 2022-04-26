<template>
  <li>
    <span :class="['card', 'bg-' + bgName]">
      <span class="icon">
        <img :src="[course.image != '' ? course.image : require('@/assets/images/icons/default2.png')]" :alt="course.name" />
      </span>
      <span class="title">{{ course.name }}</span>
      <span class="action">
        <!-- <router-link :to="{name: 'campus.modules'}" :class="['btn', bgName]">
          Acessar
        </router-link> -->
        <a href="#" @click.prevent="setCourse" :class="['btn', bgName]">Acessar</a>
      </span>
    </span>
    <span class="dots">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </li>
</template>

<script>
import { useStore } from 'vuex'

import router from '@/router'

export default {
  name: "CardCourse",
  props: ['course', 'bgName'],
  setup(props) {
    const store = useStore()

    const setCourse = () => {
      // chama o mutation direto
      store.commit('SET_COURSE_SELECTED', props.course) // passa o course que passamos via o component 'card-course'

      // redireciona
      router.push({name: 'campus.modules'})
    }

    return {
      setCourse
    }
  }
};
</script>
