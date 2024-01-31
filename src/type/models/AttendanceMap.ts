import type { AttendanceState } from "../enums/AttendanceState";

export type AttendanceMap = {
  [key in AttendanceState]: {
    name: string;
    initial: keyof typeof AttendanceState;
    textColor: string;
    bgColor: string;
  };
};
