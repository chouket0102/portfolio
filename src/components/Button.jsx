
import ButtonSvg from "../assets/svg/ButtonSvg";
const Button = ({ className, href, onClick, children, px, white, filled }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors ${px || "px-7"} ${
    filled ? "text-white hover:text-white/90" : white ? "text-n-8 hover:text-n-8/90" : "text-n-1 hover:text-n-1/90"
  } ${className || ""}`

  const spanClasses = "relative z-10"

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      <ButtonSvg white={white} filled={filled} />
    </button>
  )

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      <ButtonSvg white={white} filled={filled} />
    </a>
  )

  return href ? renderLink() : renderButton()
}

export default Button

