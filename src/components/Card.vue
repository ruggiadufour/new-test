<template>
  <section class="card" @click="handleClick" tabindex="0" role="button">
    <div class="card-user-data">
      <div class="card-user-data-avatar">
        <img :src="data.imageUrl" alt="" />
        <span>{{ data.versionNumber }}</span>
      </div>
      <span>{{ data.name }} {{ data.lastName }}</span>
    </div>

    <button class="card-dots" @click.stop="">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div class="card-button-state-wrapper">
      <button
        v-for="stateId of statesList"
        :key="stateId"
        class="card-button-state"
        @click.stop="updateState(stateId)"
      >
        <AttendanceStatus
          :state="stateId"
          :active="data.attendanceState === stateId"
        />
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import { AttendanceState } from "@/type/enums/AttendanceState";
import type { Participant } from "@/type/models/Participant";
import { useRouter } from "vue-router";
import AttendanceStatus from "@/components/AttendanceStatus.vue";

const props = defineProps({
  data: {
    type: Object as PropType<Participant>,
    required: true,
  },
});
const emits = defineEmits<{
  (
    e: "update-state",
    state: { attendanceState: AttendanceState; participantId: number }
  ): void;
}>();

const router = useRouter();

const statesList = [
  AttendanceState.P,
  AttendanceState.V,
  AttendanceState.A,
  AttendanceState.T,
];

const updateState = (stateId: AttendanceState) => {
  emits("update-state", {
    attendanceState: stateId,
    participantId: props.data.id,
  });
};

const handleClick = () => {
  router.push({ name: "detail", params: { id: props.data.id } });
};

const setState = () => {};
</script>
<style scoped>
.card {
  background-color: white;
  border-radius: 16px;
  border: solid 1px gray;
  padding: 16px;
  position: relative;
}

.card:hover {
  cursor: pointer;
}

/* User data */
.card-user-data {
  display: flex;
  align-items: center;
  gap: 16px;
}

.card-user-data-avatar {
  position: relative;
  width: min-content;
}

.card-user-data-avatar img {
  border-radius: 50%;
  width: 45px;
  height: 45px;
}

.card-user-data-avatar span {
  position: absolute;
  right: -10px;
  top: 3px;
  background-color: #ea5657;
  height: 16px;
  width: 30px;
  font-size: 10px;
  border-radius: 8px;
  color: white;
  text-align: center;
}

/* Actions */
.card-button-state-wrapper {
  display: flex;
  gap: 12px;
  margin-top: 12px;
}

.card-button-state-wrapper button {
  background-color: transparent;
  border: unset;
  padding: 0;
}

.card-dots {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border: unset;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: transparent;
  position: absolute;
  right: 12px;
  top: 12px;
}

.card-dots span {
  width: 5px;
  height: 5px;
  background-color: gray;
  border-radius: 50%;
}
</style>
