import React, {useState} from 'react';
import './TextHover.scss';

/**
 * Text animation on hover.
 * @param {{ children: string, className?: String, style?: React.CSSProperties }} payload
 */
function TextHover({ children, className, style }) {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true)
  }
  const onLeave = () => { 
    setTimeout(() => {
      setHover(false);
    }, 1500);
  }
  return (
    <span id="TextHover" className={hover ? 'char_hover': ''} onMouseEnter={onHover} onMouseLeave={onLeave}>
      <div className={className} style={style}>
      {
        [...children].map((char, key) => (
          <span className='char' key={key}>
            <div className="char_content" data-text={char}>{char}</div>
          </span>
        ))
      }
      </div>
    </span>
  );
}

export default TextHover;
