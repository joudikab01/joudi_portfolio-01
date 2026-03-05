import "./GlitchText.css";

interface GlitchTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export function GlitchText({ text, className = "", style }: GlitchTextProps) {
  return (
    <span
      className={`glitch-title ${className}`}
      data-text={text}
      style={style}
    >
      {text}
    </span>
  );
}
