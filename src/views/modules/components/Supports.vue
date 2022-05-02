<template>
  <div class="comments" v-show="lesson.name">
    <div class="header">
      <span class="title"
        >Dúvidas (total: {{ supports.length }})
        <span v-if="loading">(Carregando...)</span>
      </span>
      <button class="btn primary" 
      @click.prevent="openModal">
        <i class="fas fa-plus"></i>
        Enviar nova dúvida
      </button>
    </div>

    <supports />

    <modal-support
      :showModal="modal.showModal"
      :support-reply="modal.supportReply"
      @closeModal="modal.showModal = false"
    >
    </modal-support>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref, watch } from "vue";

import Supports from "@/components/Supports.vue";
import ModalSupport from "@/components/SupportModal.vue";

export default {
  name: "SupportsLesson",
  setup() {
    const store = useStore();

    // aula que está sendo exibida no player
    const lesson = computed(() => store.state.courses.lessonPlayer);
    const supports = computed(() => store.state.supports.supports.data);
    const loading = ref(false);

    // valores para passar para o ModalSupport (modal-support)
    const modal = ref({
      showModal: false,
      supportReply: "",
    });
    const openModal = () => modal.value = {showModal: true, supportReply: ""}

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

    const createNewReplyToSupport = (supportId) => {
      modal.value.showModal = true
      modal.value.supportReply = supportId
    }

    return {
      lesson,
      loading,
      supports,
      modal,
      openModal,
      createNewReplyToSupport,
    };
  },
  components: {
    Supports,
    ModalSupport,
  },
};
</script>