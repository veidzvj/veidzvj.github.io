type ButtonProps = {
  id: string
  className: string
  text: string
}

const Button = ({ id, className, text }: ButtonProps) => {
  return (
    <a id={id} className={`${className ?? ''} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="Arrow down" />
        </div>
      </div>
    </a>
  )
}

export default Button
