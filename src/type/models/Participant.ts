import type { AttendanceState } from "../enums/AttendanceState";

export interface Participant {
  id: number;
  name: string;
  lastName: string;
  imageUrl: string;
  attendanceState: AttendanceState;
  versionNumber: string;
}
