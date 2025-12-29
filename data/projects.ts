export type Project = {
  title: string;
  subtitle: string;
  bullets: string[];
  links?: {
    github?: string;
    demo?: string;
  };
};

export const projects: Project[] = [
  {
    title: "Tennis Robot",
    subtitle: "Autonomous ball collection and navigation under diverse lighting conditions.",
    bullets: [
      "Implemented vision-based ball detection.",
      "Designed navigation logic for efficient collection.",
      "Improved training efficiency by reducing manual collection time."
    ],
    links: {
      github: "" // 之後放你的 repo URL
    }
  },
  {
    title: "Embedded Machine Learning",
    subtitle: "Keyword spotting on Arduino Nano 33 BLE Sense under strict memory constraints.",
    bullets: [
      "Tuned model size to fit embedded device constraints.",
      "Built real-time audio keyword spotting pipeline for low-power inference.",
      "Created a foundation for on-device signal analysis applications."
    ],
    links: {
      github: ""
    }
  },
  {
    title: "Tic-Tac-Toe Robot",
    subtitle: "Computer vision-based game playing robot using Python and ArUco markers.",
    bullets: [
      "Developed ArUco marker detection system for game state recognition.",
      "Implemented game logic and optimal move calculation algorithm.",
      "Integrated robot arm control for precise piece placement."
    ],
    links: {
      github: ""
    }
  },
  {
    title: "Robotic Arm Control + GUI",
    subtitle: "Interactive control interface for 6-DOF robotic arm manipulation.",
    bullets: [
      "Built intuitive GUI for real-time robot control and monitoring.",
      "Implemented forward and inverse kinematics calculations.",
      "Developed trajectory planning for smooth motion execution."
    ],
    links: {
      github: ""
    }
  }
];
