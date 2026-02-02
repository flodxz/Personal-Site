import type { SkillIcon } from "../content/skills";

const commonProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
} as const;

const markTextProps = {
  x: 12,
  y: 15.5,
  textAnchor: "middle" as const,
  fontFamily:
    'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
  fontWeight: 800,
  fontSize: 8.5,
  fill: "currentColor",
} as const;

export default function SkillLogo({
  icon,
  className,
}: {
  icon: SkillIcon;
  className?: string;
}) {
  switch (icon) {
    case "typescript":
      return (
        <svg {...commonProps} className={className} aria-hidden="true">
          <rect
            x="3.25"
            y="3.25"
            width="17.5"
            height="17.5"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <text {...markTextProps}>TS</text>
        </svg>
      );
    case "javascript":
      return (
        <svg {...commonProps} className={className} aria-hidden="true">
          <rect
            x="3.25"
            y="3.25"
            width="17.5"
            height="17.5"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <text {...markTextProps}>JS</text>
        </svg>
      );
    case "python":
      return (
        <svg {...commonProps} className={className} aria-hidden="true">
          <path
            d="M10.5 4.8h3c2 0 2.9.9 2.9 2.4v2.1h-5.9c-1.7 0-2.8-.9-2.8-2.2 0-1.4 1.1-2.3 2.8-2.3Z"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinejoin="round"
          />
          <path
            d="M13.5 19.2h-3c-2 0-2.9-.9-2.9-2.4v-2.1h5.9c1.7 0 2.8.9 2.8 2.2 0 1.4-1.1 2.3-2.8 2.3Z"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinejoin="round"
          />
          <path
            d="M16.4 9.3v3.2c0 1.3-.9 2.2-2.6 2.2h-3.3c-1.8 0-2.9-.9-2.9-2.3"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinecap="round"
          />
          <path
            d="M7.6 14.7v-3.2c0-1.3.9-2.2 2.6-2.2h3.3c1.8 0 2.9.9 2.9 2.3"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinecap="round"
          />
          <circle cx="14.8" cy="6.9" r="0.6" fill="currentColor" />
          <circle cx="9.2" cy="17.1" r="0.6" fill="currentColor" />
        </svg>
      );
    case "html":
      return (
        <svg {...commonProps} className={className} aria-hidden="true">
          <path
            d="M6 4h12l-1 14-5 2-5-2L6 4Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <text {...markTextProps} fontSize={7.8}>
            5
          </text>
        </svg>
      );
    case "css":
      return (
        <svg {...commonProps} className={className} aria-hidden="true">
          <path
            d="M6 4h12l-1 14-5 2-5-2L6 4Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <text {...markTextProps} fontSize={7.8}>
            3
          </text>
        </svg>
      );
    case "photoshop":
      return (
        <svg {...commonProps} className={className} aria-hidden="true">
          <rect
            x="3.25"
            y="3.25"
            width="17.5"
            height="17.5"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <text {...markTextProps}>Ps</text>
        </svg>
      );
    case "cinema4d":
      return (
        <svg {...commonProps} className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.4" />
          <text {...markTextProps} fontSize={7.2}>
            C4D
          </text>
        </svg>
      );
    case "figma":
      return (
        <svg {...commonProps} className={className} aria-hidden="true">
          <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.35" />
          <circle cx="14" cy="7" r="3" stroke="currentColor" strokeWidth="1.35" />
          <circle cx="10" cy="12" r="3" stroke="currentColor" strokeWidth="1.35" />
          <circle cx="10" cy="17" r="3" stroke="currentColor" strokeWidth="1.35" />
          <circle cx="14" cy="12" r="3" stroke="currentColor" strokeWidth="1.35" />
        </svg>
      );
    default:
      return null;
  }
}
