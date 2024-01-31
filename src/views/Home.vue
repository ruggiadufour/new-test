<template>
  <div class="home">
    <div class="home-card-container">
      <Card
        v-for="participant of participantsRef"
        :key="participant.id"
        :data="participant"
        @update-state="handleUpdateState"
      />
    </div>

    <div class="home-bottom-helper">
      <div
        class="home-bottom-helper-item"
        v-for="attendanceHelper of attendanceHelpers"
        :key="attendanceHelper"
      >
        <AttendanceStatus
          :state="attendanceHelper"
          active
          variant="round"
          size="sm"
          show-name
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from "vue";
import Card from "@/components/Card.vue";
import { participants } from "@/mocks/data";
import { attendanceStates } from "@/constants/attendanceState";
import { AttendanceState } from "@/type/enums/AttendanceState";
import AttendanceStatus from "@/components/AttendanceStatus.vue";

const participantsRef = ref(participants);
const attendanceHelpers = ref([
  AttendanceState.P,
  AttendanceState.V,
  AttendanceState.A,
  AttendanceState.T,
  AttendanceState.Aj,
  AttendanceState.Tj,
]);

const handleUpdateState = (data: {
  participantId: number;
  attendanceState: AttendanceState;
}) => {
  const findedParticipant = participantsRef.value.find(
    (p) => p.id === data.participantId
  );
  if (!findedParticipant) throw new Error("Missing participant");

  findedParticipant.attendanceState = data.attendanceState;
};
</script>

<style scoped>
.home {
  height: 100%;
  position: relative;
}

.home-card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 24px;
  gap: 16px;
}

.home-bottom-helper {
  height: 50px;
  width: 100%;
  background-color: #e6ebfb;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: end;
  gap: 32px;
  padding-right: 32px;
}

.home-bottom-helper-item {
  display: flex;
  gap: 16px;
  align-items: center;
}
</style>
