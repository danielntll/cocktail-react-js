import './Button.css'

const Button = ({ imgUrl, text, styleClass = "", onClickEv, notification = false, isSelected = false }) => {
  // V ----------------------
  // C ----------------------

  // R ----------------------
  return (
    <div className={"Button " + styleClass} onClick={() => onClickEv()}>
      {imgUrl ?
        <img className='Button__img' src={isSelected ? imgUrl[1] : imgUrl[0]} alt="button img" />
        : null
      }
      {text ?
        <p>
          {text}
        </p>
        : null}
      {notification ?
        <>
          <div className="Button__notification"></div>
        </>
        :
        null
      }
    </div>
  );
}

export default Button;