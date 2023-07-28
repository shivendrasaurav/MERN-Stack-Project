import 'fdweb/fluent-core.css'
import './App.css'
//import sdk from '@stackblitz/sdk';
import { useEffect, useState } from 'react';

function App() {

  const [htmlCode, setHtmlCode] = useState('');

  const start = () =>{
    //alert('lol')
  }

  useEffect(()=>{
    start();
  }, [])

  return (
    <>
      <div className='lander'>
        <div className='pre square'>
          <p className='subheading'>Watch Videos <br/>Interact and Learn <br/>Ask AI</p>
        </div>
        <div className='circle'>
          <p className='title'>invrz</p>
          <p className='heading'>
            <span>L</span>
            <span>E</span>
            <span>A</span>
            <span>R</span>
            <span>N</span>
          </p>
        </div>
        <div className='post square'>
          <p className='subheading'>The <br/>Hyperinteractive <br/>Learning <br/>Platform</p>
        </div>
      </div>
      
      <div className='scrollIndicator'>
        <span className='deg90'> &gt; </span>
        <span className='deg90'> &gt; </span>
        <span className='deg90'> &gt; </span>
      </div>

      <div className='demo'>
        <div id="embed" className='codeView'>
          <textarea className='editor' onChange={e => setHtmlCode(e.target.value)}>

          </textarea>
          <div className="output" dangerouslySetInnerHTML={{ __html: htmlCode }}>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
