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
      src: "/design/headers/headers-preview-1.webp",
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
          text: "This is a small collection of some of the headers I made back then. \nSee more on the link below.",
        },
      ],
    },
  },
  {
    id: "thumbnails",
    title: "Minecraft Thumbnails",
    period: "Early 2021 - Late 2024",
    stack: "Photoshop",
    description: "Click to read more.",
    thumbnail: {
      src: "/design/thumbnails/thumbnail-preview-1.webp",
      alt: "Minecraft thumbnails preview",
      width: 3840,
      height: 2160,
    },
    links: [
      {
        href: "https://www.fiverr.com/flodxz/make-you-a-minecraft-youtube-thumbnail",
        label: "Fiverr",
      },
      {
        href: "https://payhip.com/flodxz",
        label: "Payhip",
      },
    ],
    modal: {
      content: [
        {
          type: "paragraph",
          text: "For a few years, I made Minecraft YouTube thumbnails for clients on a daily basis. Quick briefs with the client, fast turnarounds, and constant iteration to match a creator’s style.",
        },
        {
          type: "image",
          src: "/design/thumbnails/thumbnail-1.webp",
          alt: "Minecraft thumbnail example",
          width: 1920,
          height: 1080,
        },
        {
          type: "paragraph",
          text: "I did have a Fiverr gig as a side thing, with 70+ reviews averaging 4.9 stars: [fiverr.com/flodxz](https://www.fiverr.com/flodxz/make-you-a-minecraft-youtube-thumbnail). But most of my work didn’t come from Fiverr (Fiverr has quite big fees when you only charge about 10$ per thumbnail...) \n\nAround 90% of my clients were via Discord, where I handled everything from first contact to revisions and accepted my payments via PayPal.",
        },
        {
          type: "imageRow",
          images: [
            {
              src: "/design/thumbnails/thumbnail-2.webp",
              alt: "Minecraft thumbnail example",
              width: 1920,
              height: 1080,
            },
            {
              src: "/design/thumbnails/thumbnail-3.webp",
              alt: "Minecraft thumbnail example",
              width: 1920,
              height: 1080,
            },
          ],
        },
        {
          type: "paragraph",
          text: "Discord made it easy to work quickly: references, feedback, and revisions in one place. For bigger projects I sent invoices using Stripe, which helped keep things organized when a project went beyond “just one thumbnail.”",
        },
        {
          type: "imageRow",
          images: [
            {
              src: "/design/thumbnails/thumbnail-4.webp",
              alt: "Minecraft thumbnail example",
              width: 1920,
              height: 1080,
            },
            {
              src: "/design/thumbnails/thumbnail-5.webp",
              alt: "Minecraft thumbnail example",
              width: 1920,
              height: 1080,
            },
          ],
        },
        {
          type: "paragraph",
          text: "I also ran a Payhip store where I sold GFX asset packs and project files: [payhip.com/flodxz](https://payhip.com/flodxz). \n\nIt was a nice way to package up the stuff I was building anyway (assets, templates, and editable files) and make it useful for other creators.",
        },
        {
          type: "image",
          src: "/design/thumbnails/thumbnail-6.webp",
          alt: "Minecraft thumbnail example",
          width: 1920,
          height: 1080,
        },
        {
          type: "paragraph",
          text: "In total I’ve made 300+ thumbnails, generating over 6 million views across the videos they were used on. Over time I got to work with various YouTubers with 500k+ subscribers, which taught me a lot about consistency, brand identity, and what actually makes someone click.",
        },
      ],
    },
  },
];
