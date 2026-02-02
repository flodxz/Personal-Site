import type { SkillIcon } from "./skills";

export type SkillTimelineItem = {
  when: string;
  label: string;
  note?: string;
  icon?: SkillIcon;
  dotIcons?: SkillIcon[];
  dotImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  dotTheme?: "study-track";
};

// Shown under the hero skills. Edit freely.
export const heroSkillTimeline: SkillTimelineItem[] = [
  {
    when: "2018",
    label: "HTML",
    note: "Learnt HTML in an optional class in elementary school.",
    icon: "html",
  },
  {
    when: "2020",
    label: "JavaScript",
    note: "Started coding Discord bots in JavaScript.",
    icon: "javascript",
  },
  {
    when: "2021",
    label: "Minecraft Servers",
    note: "Started coding Minecraft servers.",
  },
  {
    when: "2023",
    label: "Python",
    note: "Learnt Python partly in school.",
    icon: "python",
  },
  {
    when: "2024",
    label: "Websites",
    note: "Started really making websites and started using React + Next.js, and played around with some Python projects.",
    dotIcons: ["react", "nextjs"],
  },
  {
    when: "2025",
    label: "Bigger Projects",
    note: "Started working on bigger projects for myself.",
  },
  {
    when: "Late 2025",
    label: "Study-Track",
    note: "Started working on Study-Track.",
    dotTheme: "study-track",
    dotImage: {
      src: "/study-track/study-track-logo.png",
      alt: "Study-Track logo",
      width: 240,
      height: 240,
    },
  },
];
