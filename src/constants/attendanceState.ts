import type { AttendanceMap } from "@/type/models/AttendanceMap";

export const attendanceStates: AttendanceMap = {
  0: {
    name: "Presente",
    initial: "P",
    bgColor: "#58ab25",
    textColor: "white",
  },
  1: {
    name: "Presente Virtual",
    initial: "V",
    bgColor: "#02b5f8",
    textColor: "white",
  },
  2: {
    name: "Ausente",
    initial: "A",
    bgColor: "#ff4e56",
    textColor: "white",
  },
  3: {
    name: "Tarde/Atraso",
    initial: "T",
    bgColor: "#ffbf42",
    textColor: "black",
  },
  4: {
    name: "Ausente Justificado",
    initial: "Aj",
    bgColor: "#ff4e56",
    textColor: "white",
  },
  5: {
    name: "Tarde/Atraso Justificado",
    initial: "Tj",
    bgColor: "#ffbf42",
    textColor: "black",
  },
};
