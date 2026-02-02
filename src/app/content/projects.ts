export type ProjectLink = {
  href: string;
  label: string;
};

export type ProjectModal = {
  paragraphs?: string[];
  content?: ProjectModalContentBlock[];
  screenshot?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type ProjectModalContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
    }
  | {
      type: "imageRow";
      images: Array<{
        src: string;
        alt: string;
        width: number;
        height: number;
      }>;
    };

export type Project = {
  id: string;
  title: string;
  period?: string;
  stack?: string | string[];
  description: string;
  link?: ProjectLink;
  links?: ProjectLink[];
  thumbnail?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  logo?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  showLogoOnCard?: boolean;
  showLogoInModal?: boolean;
  modal?: ProjectModal;
};

export const currentProjects: Project[] = [
  {
    id: "study-track",
    title: "Study-Track",
    period: "Oktober 2025 - Now",
    stack: "React (Vite) · Firebase · Stripe",
    description:
      "An all-in-one study tracking platform designed to help students understand where their time goes and improve consistency. The project combines automatic schedule syncing, effortless time tracking, and clear data visualizations, with a social layer that keeps users motivated by studying alongside friends.",
    link: { href: "https://study-track.app", label: "Visit study-track.app" },
    logo: {
      src: "/study-track/study-track-logo.png",
      alt: "Study-Track logo",
      width: 240,
      height: 240,
    },
    modal: {
      paragraphs: [
        "Study-Track is a study tracking platform I’m actively building to help students understand where their time actually goes and develop more consistent study habits. The idea came from noticing how easy it is to feel busy while still having no clear picture of what you’ve done.",
        "Study-Track automatically syncs academic schedules, lets users track study sessions with minimal friction, and turns that data into clear, visual insights that actually mean something. The goal isn’t to gamify studying endlessly, but to make progress visible and actionable.",
        "I’m working across the full product: designing features, implementing the core logic, and refining the UI to reduce friction and cognitive load.",
        "On top of individual tracking, the app includes a social layer where friends can study alongside each other, compare progress, and stay motivated without it feeling competitive or noisy.",
        "This project is still evolving and serves as a hands-on way for me to experiment with product decisions, UX trade-offs, and building something people genuinely come back to.",
      ],
      screenshot: {
        src: "/study-track/home-page.png",
        alt: "Study-Track homepage screenshot",
        width: 2940,
        height: 1476,
      },
    },
  },
];

export const pastProjects: Project[] = [
  {
    id: "tag-timeline",
    title: "Tag-Timeline",
    period: "December 2024 - February 2025",
    stack: "React (Next.js) · Firebase",
    description:
      "A community-driven archive built to document the history of TNT Tag, preserving key moments, updates, and eras in a single, navigable timeline. The project focuses on structure, accuracy, and long-term accessibility rather than fleeting hype.",
    link: { href: "https://tagtimeline.com", label: "Visit tagtimeline.com" },
    logo: {
      src: "/tag-timeline/tag-timeline-logo.png",
      alt: "Tag-Timeline logo",
      width: 240,
      height: 240,
    },
    showLogoOnCard: false,
    modal: {
      paragraphs: [
        "Tag-Timeline is a history and archival project I built to document the evolution of the Minecraft Hypixel minigame TNT Tag, from its earliest days to the present. The idea came from noticing how much of the game’s history lived only in scattered videos, forgotten forum posts, and personal memories. I had long stopped playing the game myself, but I was bored one winter break and thought it would be fun to try make this project.",
        "The platform organizes events, updates, community milestones, and eras into a clear chronological timeline, making it easy to explore how the game and its community developed over time. The focus is on clarity and structure — turning fragmented information into something coherent and searchable.",
        "Beyond official updates, TagTimeline also highlights community-driven moments such as guilds, creators, rivalries, and undocumented phases that shaped the game’s culture but are often overlooked. It had everything from detailed event descriptions to visual media and links to original sources.",
        "I never finished the project. The coding part was about 90% done, but I got stuck on gathering and verifying all the historical information, that was just a little too boring for me. Overall, it was a great learning experience in structuring data, something I had never done before at that scale.",
      ],
      screenshot: {
        src: "/tag-timeline/home-page.png",
        alt: "Tag-Timeline homepage screenshot",
        width: 2940,
        height: 1476,
      },
    },
  },
];

export const designProjects: Project[] = [
  {
    id: "design-1",
    title: "Headers",
    period: "Late 2022 - Early 2024",
    stack: "Photoshop · Cinema 4D",
    description: "Click to read more.",
    thumbnail: {
      src: "/design/headers/headers-preview-1.png",
      alt: "Headers preview",
      width: 2200,
      height: 734,
    },
    links: [
      {
        href: "https://www.behance.net/gallery/162972537/Social-Media-Headers-Vol-1",
        label: "View on Behance",
      },
    ],
    modal: {
      content: [
        {
          type: "paragraph",
          text: "In the past, when I was younger, I used to make (Twitter) headers for clients.",
        },
        {
          type: "image",
          src: "/design/headers/header-1.webp",
          alt: "(Twitter) header design example",
          width: 2800,
          height: 933,
        },
        {
          type: "paragraph",
          text: "Most of these started with a simple brief (colors, vibe, what to include), then I’d make a 3D version of their name in Cinema 4D and compose everything in Adobe Photoshop, lighting, textures, typography, and all the small details that make it feel complete.",
        },
        {
          type: "imageRow",
          images: [
            {
              src: "/design/headers/header-2.webp",
              alt: "(Twitter) header design example",
              width: 2800,
              height: 933,
            },
            {
              src: "/design/headers/header-3.webp",
              alt: "(Twitter) header design example",
              width: 2800,
              height: 933,
            },
          ],
        },
        {
          type: "paragraph",
          text: "This is a small collection of some of the headers I made back then. I don’t do this 'professionally' anymore, but it was a fun little side hustle.",
        },
      ],
    },
  },
  {
    id: "design-2",
    title: "Design project",
    period: "Coming soon",
    description: "Click to read more.",
    thumbnail: {
      src: "/flod-banner.png",
      alt: "Design project thumbnail",
      width: 1200,
      height: 630,
    },
    modal: {
      paragraphs: [
        "Coming soon.",
        "I’ll add the story, process, and final shots for this design project here.",
      ],
    },
  },
];
