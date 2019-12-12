import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import PhotoGallery from './components/PhotoGallery';
import * as serviceWorker from './serviceWorker';
import TextHover from './components/TextHover';
const datas = [
    {
      text: 'this is text',
      src: 'https://trevorblount-jbazxwak9vv.netdna-ssl.com/wp-content/uploads/Trevor-Blount-Pilates-Classes-London.jpg',
      opposite: false
    },
    {
      text: 'this is 2nd text',
      src: 'https://trevorblount-jbazxwak9vv.netdna-ssl.com/wp-content/uploads/Trevor-Blount-Pilates-Courses-London-2.jpg',
      opposite: true
    },
    {
      text: 'this is 3rd text',
      src: 'https://trevorblount-jbazxwak9vv.netdna-ssl.com/wp-content/uploads/Trevor-Blount-Pilates-London.jpg',
      opposite: false
    },
];

ReactDOM.render(
  <React.Fragment>
    <PhotoGallery datas={datas} />
    <div style={{fontSize: '60px'}}>
      <TextHover className="asds">subbiah</TextHover>
      {" "}
      <TextHover>chandramouli</TextHover>
      <br />
      <TextHover>c</TextHover>
      <TextHover>h</TextHover>
      <TextHover>a</TextHover>
      <TextHover>n</TextHover>
      <TextHover>d</TextHover>
      <TextHover>a</TextHover>
      <TextHover>m</TextHover>
      <TextHover>o</TextHover>
      <TextHover>u</TextHover>
      <TextHover>l</TextHover>
      <TextHover>i</TextHover>
    </div>
  </React.Fragment>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
