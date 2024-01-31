<template>
  <div
    class="card-button-state"
    :class="[
      `size-${size}`,
      `variant-${variant}`,
      { 'card-button-state-active': active },
    ]"
    :style="`--bg-color: ${attendanceStates[state].bgColor}; --text-color: ${attendanceStates[state].textColor}`"
  >
    <span> {{ attendanceStates[state].initial }}</span>
  </div>
  <span v-if="showName">{{ attendanceStates[state].name }}</span>
</template>

<script lang="ts" setup>
import { type PropType } from "vue";
import { attendanceStates } from "@/constants/attendanceState";
import { AttendanceState } from "@/type/enums/AttendanceState";

defineProps({
  state: {
    type: Number as PropType<AttendanceState>,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String as PropType<"rounded" | "round">,
    default: "rounded",
  },
  size: {
    type: String as PropType<"sm" | "md">,
    default: "md",
  },
  showName: {
    type: Boolean,
    default: false,
  },
});
</script>
<style scoped>
.card-button-state {
  color: var(--bg-color);
  border: solid 1px var(--bg-color);
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
}

.card-button-state-active {
  background-color: var(--bg-color);
  color: var(--text-color);
}

.size-sm {
  width: 30px;
  height: 30px;
  font-size: 22px;
}

.size-md {
  width: 45px;
  height: 45px;
  font-size: 32px;
}

.variant-round {
  border-radius: 50%;
}

.variant-rounded {
  border-radius: 16px;
}
</style>
