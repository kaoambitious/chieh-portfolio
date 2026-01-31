// 工作经验数据文件
// 定义职业经历的数据结构和内容
// 按时间倒序排列（最近的工作在前）

// 工作经历类型定义
export type Experience = {
  company: string;         // 公司名称
  role: string;            // 职位名称
  period: string;          // 工作时间段
  bullets: string[];       // 工作成就/职责列表
};

// 所有工作经历数组
export const experiences: Experience[] = [
  // 工作 1：古登科技 - 当前职位
  {
    company: "Gudeng",
    role: "Technical Customer Service Engineer",
    period: "October 2025 - Present",
    bullets: [
      "Defined and owned the system-level electrical architecture, retrofitting FOUP load ports with a nitrogen purge/fill module, reducing humidity levels and improving wafer-surface reliability.",
      "Integrated the electrical control cabinet for the upgraded load-port system, defining hardware–software interfaces across pneumatic valves, regulators, control PCBs, and network modules to enable closed-loop purge control, real-time sensing, and fault-diagnostics workflow."
    ]
  },
  // 工作 2：卡氏电池 - 实习工程师
  {
    company: "Karh",
    role: "Hardware Engineer Intern",
    period: "June 2024 - August 2024",
    bullets: [
      "Evaluated sensor integration paths for battery management systems to enhance safety monitoring and early detection of abnormal thermal behavior, supporting hardware-level mitigation.",
      "Researched emerging battery technology trends and evaluated competitor products to shape forward-looking R&D strategies and accelerate product innovation.",
      "Performed comprehensive risk assessments and ensured strict adherence to New York Fire Code regulations, significantly reducing potential safety hazards."
    ]
  },
  // 工作 3：华硕电脑 - 资深硬件工程师
  {
    company: "ASUSTeK Computer Inc.",
    role: "Senior Hardware Engineer",
    period: "November 2017 - April 2022",
    bullets: [
      "Drove HDI PCB/FPC schematic design and system-level hardware integration across multiple ASUS ZenFone platforms, owning mixed-signal architecture from concept through production release.",
      "Executed electrical and functional validation for high-speed and peripheral interfaces, including MIPI, USB, I²C, SPI, and PCIe, ensuring interface compliance and signal robustness.",
      "Led the integration of motion, Hall, proximity, and ambient light sensors into high-volume smartphone products, owning sensor component selection, schematic/FPC integration, and sensing system optimization across NPI phases from prototyping to mass production.",
      "Led board bring-up and power sequencing verification through EVT/DVT/PVT, leveraging oscilloscopes and lab instrumentation to close hardware issues and support ESD/EMI/EMC compliance and manufacturing readiness.",
      "Partnered with firmware, mechanical, and manufacturing teams to resolve customer-reported field failures via structured root cause analysis, translating corrective actions into next-generation design improvements.",
      "Built automated feature-validation flows and long-term reliability test pipelines for inertial sensing systems, raising mass-production yield to 99% and improving long-term platform stability.",
      "Invented and patented an automatic camera shutoff mechanism, significantly enhancing drop durability and safeguarding high-value camera modules. (Patent No. 110114582)"
    ]
  }
];

