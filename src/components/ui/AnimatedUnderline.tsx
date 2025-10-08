import React from "react";

/**
 * Returns the Tailwind class for the underline color.
 *
 * @param {string} color - The color name (e.g., 'primary', 'accent', etc.)
 * @returns {string} Tailwind class for the underline color.
 */
const getUnderlineClass = (color: string) => {
  switch (color) {
    case "primary":
      return "after:bg-[#581042]";
    case "accent":
      return "after:bg-[#D2AE6D]";
    case "white":
      return "after:bg-accent";
    case "black":
      return "after:bg-black";
    case "secondary":
      return "after:bg-[#dadee1]";
    case "primary-hover":
      return "after:bg-[#1e76bf]";
    case "secondary-hover":
      return "after:bg-[#b4b8bb]";
    default:
      return "after:bg-[#581042]";
  }
};

/**
 * AnimatedUnderline
 *
 * Renders children with an animated underline that appears on hover.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - The content to underline.
 * @param {string} [props.underlineColor="primary"] - The color of the underline.
 * @returns {JSX.Element} The wrapped content with animated underline effect.
 *
 * @example
 * <AnimatedUnderline underlineColor="accent">Text</AnimatedUnderline>
 */
interface AnimatedUnderlineProps {
  children: React.ReactNode;
  underlineColor?: string;
  underlineHeight?: number;
}

const AnimatedUnderline = ({
  children,
  underlineColor = "primary",
  underlineHeight = 2,
}: AnimatedUnderlineProps) => {
  switch (underlineHeight) {
    case 2:
      return (
        <span
          className={`
        relative inline-block tracking-wide
        after:absolute after:bottom-[1] after:h-[2px] after:right-0 after:w-0
        ${getUnderlineClass(underlineColor)} after:block after:content-[''] 
        after:transition-all after:duration-200 after:ease-in
        group-hover/animated-underline:after:left-0 group-hover/animated-underline:after:right-auto group-hover/animated-underline:after:w-full
      `}
        >
          {/* Need to add "group/animated-underline" class to its parent component to work */}
          {/* Render the children with underline effect */}
          {children}
        </span>
      );
    case 2.5:
      return (
        <span
          className={`
        relative inline-block tracking-wide
        after:absolute after:bottom-[-3] after:h-[2.5px] after:right-0 after:w-0
        ${getUnderlineClass(underlineColor)} after:block after:content-[''] 
        after:transition-all after:duration-300 after:ease-in
        group-hover/animated-underline:after:left-0 group-hover/animated-underline:after:right-auto group-hover/animated-underline:after:w-full
      `}
        >
          {/* Need to add "group/animated-underline" class to its parent component to work */}
          {/* Render the children with underline effect */}
          {children}
        </span>
      );
    case 3:
      return (
        <span
          className={`
        relative inline-block tracking-wide
        after:absolute after:bottom-[-3] after:h-[3px] after:right-0 after:w-0
        ${getUnderlineClass(underlineColor)} after:block after:content-[''] 
        after:transition-all after:duration-300 after:ease-in
        group-hover/animated-underline:after:left-0 group-hover/animated-underline:after:right-auto group-hover/animated-underline:after:w-full
      `}
        >
          {/* Need to add "group/animated-underline" class to its parent component to work */}
          {/* Render the children with underline effect */}
          {children}
        </span>
      );
    default:
      return (
        <span
          className={`
        relative inline-block tracking-wide
        after:absolute after:bottom-[-3] after:h-[2px] after:right-0 after:w-0
        ${getUnderlineClass(underlineColor)} after:block after:content-[''] 
        after:transition-all after:duration-300 after:ease-in
        group-hover/animated-underline:after:left-0 group-hover/animated-underline:after:right-auto group-hover/animated-underline:after:w-full
      `}
        >
          {/* Need to add "group/animated-underline" class to its parent component to work */}
          {/* Render the children with underline effect */}
          {children}
        </span>
      );
  }
};

export default AnimatedUnderline;
