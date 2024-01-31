<template>
  <div class="detail">
    <div v-if="notFound">
      <h1>Participant not found</h1>
    </div>
    <div v-else>
      <button class="go-back" @click="goBack">◀️ Back</button>
      <div class="detail-card-wrapper">
        <Card v-if="participant" :data="participant" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { participants } from "@/mocks/data";
import { attendanceStates } from "@/constants/attendanceState";
import type { Participant } from "@/type/models/Participant";
import Card from "@/components/Card.vue";

const route = useRoute();
const router = useRouter();
const participant = ref<Participant>();
const notFound = ref(false);

onBeforeMount(() => {
  if (route.params.id) {
    const p = participants.find((p) => p.id === Number(route.params.id));

    if (!p) {
      notFound.value = true;
      console.error("Participant missing");
    }
    participant.value = p;

    showAlert();
  }
});

const goBack = () => {
  router.push({ name: "home" });
};

const showAlert = () => {
  if (!participant.value) return;

  const message = `Participant: ${participant.value.name} ${
    participant.value.lastName
  }, id: ${participant.value.id}, ${
    attendanceStates[participant.value.attendanceState].initial
  }`;

  setTimeout(() => alert(message), 100);
};
</script>

<style scoped>
.detail {
  padding: 24px;
}

.detail-card-wrapper {
  max-width: 300px;
  margin: auto;
}

.go-back {
  margin-bottom: 16px;
  border: unset;
  background-color: transparent;
  cursor: pointer;
}
</style>
