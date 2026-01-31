// 项目数据文件
// 定义所有投资组合项目的数据结构和内容
// 每个项目包含标题、描述、图片、功能点和链接

// 项目类型定义
export type Project = {
  title: string;           // 项目标题
  subtitle: string;        // 项目副标题/简短描述
  image: string;           // 主图片路径
  image2?: string;         // 第二张图片路径（可选）
  bullets: string[];       // 项目功能点/特性列表
  links?: {
    github?: string;       // GitHub 仓库链接
    demo?: string;         // 在线演示链接
  };
};

// 所有项目数组
export const projects: Project[] = [
  // 项目 1：乒乓球机器人
  {
    title: "Tennis Robot",
    subtitle: "Autonomous ball collection and navigation under diverse lighting conditions.",
    image: "/images/TennisRobot1.jpeg",
    bullets: [
      "Implemented vision-based ball detection.",
      "Designed navigation logic for efficient collection.",
      "Improved training efficiency by reducing manual collection time."
    ],
    links: {
      // GitHub 仓库链接（需要替换为真实 URL）
      github: "https://github.com/your-username/repo",
      // demo: "https://demo-link.com" // 在线演示链接（可选）
    }
  },
  // 项目 2：嵌入式机器学习
  { 
    title: "Embedded Machine Learning",
    subtitle: "Keyword spotting on Arduino Nano 33 BLE Sense under strict memory constraints.",
    image: "/images/mlvoice1.jpeg",
    image2: "/images/mlvoice2.jpeg",
    bullets: [
      "Tuned model size to fit embedded device constraints.",
      "Built real-time audio keyword spotting pipeline for low-power inference.",
      "Created a foundation for on-device signal analysis applications."
    ],
    links: {
      // GitHub 仓库链接（需要替换为真实 URL）
      github: "https://github.com/your-username/repo",
      // demo: "https://demo-link.com" // 在线演示链接（可选）
    }
  },
  // 项目 3：井字棋机器人
  {
    title: "Tic-Tac-Toe Robot",
    subtitle: "Computer vision-based game playing robot using Python and ArUco markers.",
    image: "/images/tic-tac-toe1.jpeg",
    image2: "/images/tic-tac-toe2.jpeg",
    bullets: [
      "Developed ArUco marker detection system for game state recognition.",
      "Implemented game logic and optimal move calculation algorithm.",
      "Integrated robot arm control for precise piece placement"
    ],
    links: {
      github: "https://github.com/your-username/repo",
      // demo: "https://youtu.be/x5N1HN4KTKc"
    }
  },
  // 项目 4：机器人臂控制系统
  {
    title: "Robotic Arm Control + GUI",
    subtitle: "Interactive control interface for 6-DOF robotic arm manipulation.",
    image: "/images/robotic-arm1.jpeg",
    image2: "/images/robotic-arm2.jpeg",
    bullets: [
      "Built intuitive GUI for real-time robot control and monitoring.",
      "Implemented forward and inverse kinematics calculations.",
      "Developed trajectory planning for smooth motion execution."
    ],
    links: {
      github: "https://github.com/your-username/repo",
      // demo: "https://demo-link.com"
    }
  },
  // 项目 5：嵌入式系统
  {
    title: "Embedded system",
    subtitle: "The purpose of this exercise is to program the Pololu robot to execute a specified task, namely to climb a ramp, detect when it reaches the top, turn around, and drive back down the ramp, all without falling off the edge of the ramp.",
    image: "/images/Embeddedsyste1.jpeg",
    image2: "/images/Embeddedsyste2.jpeg",
    bullets: [
      "Challenge: Detection Accuracy, the robot must accurately detect when it reaches the top of the ramp and differentiate between the top edge and any other surface anomalies.",
      "Benefit: Prevention of Hardware Damage", // 條列式說明 2
    ],
    links: {
      github: "https://github.com/your-username/repo", // GitHub 連結 (選填)
      // demo: "https://www.youtube.com/watch?v=FSDjiyNXs8o" // Demo 連結 (選填)
    }
  }
];
