const ButtonSvg = ({ white, filled }) => {
  const fillColor = filled ? "#176E65" : white ? "white" : "none"
  const strokeColor = filled ? "#176E65" : white ? "white" : "url(#btn-left)"

  return (
    <>
      {/* Left side */}
      <svg className="absolute top-0 left-0" width="20" height="44" viewBox="0 0 20 44">
        <path
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth="2"
          d="M20,1 L8,1 C4.134,1 1,4.134 1,8 L1,36 C1,39.866 4.134,43 8,43 L20,43"
        />
      </svg>

      {/* Middle section */}
      <svg
        className="absolute top-0 left-[1.25rem] w-[calc(100%-2.5rem)]"
        height="44"
        viewBox="0 0 100 44"
        preserveAspectRatio="none"
      >
        {filled ? (
          <rect width="100" height="44" fill="#176E65" />
        ) : white ? (
          <rect width="100" height="44" fill="white" />
        ) : (
          <>
            <rect y="42" width="100" height="2" fill="url(#btn-top)" />
            <rect width="100" height="2" fill="url(#btn-bottom)" />
          </>
        )}
      </svg>

      {/* Right side */}
      <svg className="absolute top-0 right-0" width="20" height="44" viewBox="0 0 20 44">
        <path
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth="2"
          d="M0,1 L12,1 C15.866,1 19,4.134 19,8 L19,36 C19,39.866 15.866,43 12,43 L0,43"
        />
      </svg>
    </>
  )
}

export default ButtonSvg

