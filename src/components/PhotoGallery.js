import React from 'react';
import './PhotoGallery.scss';

function PhotoGallery({datas}) {
  return (
    <div id="PhotoGallery">
      {datas.map((data, key) => {
        return (
        <section key={key} style={{flexDirection: `${data.opposite ? 'row-reverse' : 'row'}`}}>
          <div className="left-text" style={{ justifyContent: `${data.opposite ? 'flex-start' : 'flex-end'}`}}>
            <h1 className="text-content" style={{ marginRight: `${data.opposite ? '' : '-10vw'}`, marginLeft: `${data.opposite ? '-10vw' : ''}`}}>{data.text}</h1>
          </div>
          <div className="right-img" style={{ justifyContent: `${data.opposite ? 'flex-start' : 'flex-end'}`}} >
            <img src={data.src} alt="n"/>
          </div>
        </section>
        )
      })}
    </div>
  );
}

export default PhotoGallery;
