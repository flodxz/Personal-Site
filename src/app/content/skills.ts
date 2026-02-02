export type SkillIcon =
  | "typescript"
  | "javascript"
  | "html"
  | "css"
  | "python"
  | "photoshop"
  | "cinema4d"
  | "figma";

export type SkillItem = {
  label: string;
  icon: SkillIcon;
};

export type SkillGroup = {
  label: string;
  items: SkillItem[];
};

export const heroSkills: SkillGroup[] = [
  {
    label: "Languages",
    items: [
      { label: "TypeScript", icon: "typescript" },
      { label: "JavaScript", icon: "javascript" },
      { label: "Python", icon: "python" },
      { label: "HTML", icon: "html" },
      { label: "CSS", icon: "css" },
    ],
  },
  {
    label: "Apps",
    items: [
      { label: "Photoshop", icon: "photoshop" },
      { label: "Cinema 4D", icon: "cinema4d" },
      { label: "Figma", icon: "figma" },
    ],
  },
];
