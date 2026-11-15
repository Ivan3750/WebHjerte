/**
 * Kort-container. Før fulgte en "spotlight" musen – men kort, der ikke kan klikkes på,
 * skal ikke reagere på hover. Hover-effekter ligger nu kun på selve links.
 * (Props `color` og `dark` bevares, så eksisterende kald virker uændret.)
 */
// eslint-disable-next-line no-unused-vars
export default function SpotlightCard({ children, className = "", color, dark }) {
  return <div className={`group relative overflow-hidden ${className}`}>{children}</div>;
}
