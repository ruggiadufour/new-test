import { AttendanceState } from "@/type/enums/AttendanceState";
import type { Participant } from "@/type/models/Participant";

export const participants: Participant[] = [
  {
    id: 0,
    name: "Angel",
    lastName: "Ruggia Dufour",
    imageUrl:
      "https://lh3.googleusercontent.com/a/ACg8ocJ7IX-09QvD0ynBnp6N5mE4fkJueVDHzImXkZVG9-IlSXU=s128-p-k-rw-no",
    attendanceState: AttendanceState.A,
    versionNumber: "1.0",
  },
  {
    id: 1,
    name: "Angel",
    lastName: "Castillo",
    imageUrl:
      "https://lh3.googleusercontent.com/a-/ALV-UjWWkeamlPXfrLkxACrllae86L4a-YZbk1woVkL-UuKj74o=s128-p-k-rw-no",
    attendanceState: AttendanceState.V,
    versionNumber: "1.0",
  },
  {
    id: 2,
    name: "Cesar",
    lastName: "Gomez",
    imageUrl:
      "https://lh3.googleusercontent.com/a-/ALV-UjX_v-S07fh9_937TnFh24l-CxPmZK8-mpLxwiYfaxiRQ0U=s128-p-k-rw-no",
    attendanceState: AttendanceState.T,
    versionNumber: "1.0",
  },
  {
    id: 2,
    name: "Luis",
    lastName: "Gonzalez",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    attendanceState: AttendanceState.V,
    versionNumber: "1.0",
  },
  {
    id: 3,
    name: "Maria",
    lastName: "Perez",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    attendanceState: AttendanceState.V,
    versionNumber: "1.0",
  },
  {
    id: 4,
    name: "Juan",
    lastName: "Martinez",
    imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    attendanceState: AttendanceState.V,
    versionNumber: "1.0",
  },
  {
    id: 5,
    name: "Ana",
    lastName: "Hernandez",
    imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    attendanceState: AttendanceState.V,
    versionNumber: "1.0",
  },
  {
    id: 6,
    name: "Pedro",
    lastName: "Lopez",
    imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    attendanceState: AttendanceState.V,
    versionNumber: "1.0",
  },
  {
    id: 7,
    name: "Sofia",
    lastName: "Rodriguez",
    imageUrl: "https://randomuser.me/api/portraits/women/6.jpg",
    attendanceState: AttendanceState.V,
    versionNumber: "1.0",
  },
  {
    id: 8,
    name: "Diego",
    lastName: "Garcia",
    imageUrl: "https://randomuser.me/api/portraits/men/7.jpg",
    attendanceState: AttendanceState.V,
    versionNumber: "1.0",
  },
  {
    id: 9,
    name: "Carla",
    lastName: "Sanchez",
    imageUrl: "https://randomuser.me/api/portraits/women/8.jpg",
    attendanceState: AttendanceState.V,
    versionNumber: "1.0",
  },
  {
    id: 10,
    name: "Javier",
    lastName: "Ramirez",
    imageUrl: "https://randomuser.me/api/portraits/men/9.jpg",
    attendanceState: AttendanceState.V,
    versionNumber: "1.0",
  },
];
