function Logo({ className, size }: { className?: string; size?: number }) {
  return (
    <span className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={size ? size.toString() : "24"}
        height={size ? size.toString() : "24"}
        viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="6" fill="hsl(var(--foreground))"></circle>
        <path
          fill="hsl(var(--foreground))"
          d="M17.09,16.789L14.321,13.9C11.663,16.448,10,20.027,10,24s1.663,7.552,4.321,10.1l2.769-2.889 C15.19,29.389,14,26.833,14,24C14,21.167,15.19,18.61,17.09,16.789z"></path>
        <path
          fill="hsl(var(--foreground))"
          d="M33.679,13.9l-2.769,2.889C32.81,18.611,34,21.167,34,24c0,2.833-1.19,5.389-3.09,7.211l2.769,2.889 C36.337,31.552,38,27.973,38,24S36.337,16.448,33.679,13.9z"></path>
        <g>
          <path
            fill="hsl(var(--foreground))"
            d="M11.561,11.021l-2.779-2.9C4.605,12.125,2,17.757,2,24s2.605,11.875,6.782,15.879l2.779-2.9 C8.142,33.701,6,29.1,6,24S8.142,14.299,11.561,11.021z"></path>
          <path
            fill="hsl(var(--foreground))"
            d="M39.218,8.121l-2.779,2.9C39.858,14.299,42,18.9,42,24s-2.142,9.701-5.561,12.979l2.779,2.9 C43.395,35.875,46,30.243,46,24S43.395,12.125,39.218,8.121z"></path>
        </g>
      </svg>
    </span>
  );
}

export default Logo;
