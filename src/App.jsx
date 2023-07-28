import './App.css'
import 'fdweb/fluent-core.css'
//import sdk from '@stackblitz/sdk';
import { useEffect } from 'react';
import StackBlitzSDK from '@stackblitz/sdk';

function App() {

  const start = () =>{
    // Embeds a project and keeps track of the VM
    StackBlitzSDK.embedProject('embed', 
      {
        title: 'InVrz x StackBlitz',
        description: 'InVrz Hyperinteractive Learning Demo',
        template: 'javascript',
        files:  {
          'index.html': '<html>\n\n  <head>\n    <link href="https://fluentdesignforweb.github.io/v2/fluent-core.css" rel="stylesheet" type="text/css">\n  </head>\n\n  <body class="mid">\n    <h1>interactive codespace</h1>\n    <p>Click on the button below to increase counter</p>\n    <h2 id="counter">0</h2>\n    <button onclick="incrementCounter();" class="primary_blue">counter ++</button>\n    <br/><br/>\n    <label>HINT: Fix incrementCounter() in index.js file to make the counter work</label>\n  </body>\n\n  <script src="./index.js"></script>\n\n</html>',
          'index.js': 'import "./style.css"\nlet counter=0; \n\nwindow.incrementCounter = function() {\n  alert("fix the incrementCounter function")\n}',
          'style.css': 'body{\n  display: flex;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n}\n.mid{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;}\nh1, p, h2, label{\n  text-align: center;\n}',
        },
        settings: {
          compile: {
            trigger: 'auto',
            clearConsole: true,
          },
        },
      },
      {
        clickToLoad: true,
        openFile: 'index.html',
        terminalHeight: 50,
      },
    );
  }

  useEffect(()=>{
    start();
    let stack = document.getElementById("embed");
    stack.removeAttribute("style")
    stack.removeAttribute("height")
    stack.classList.add("codeView");
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

    <div className='highlights'>
      <div className="card secondary_green">
          <p className="title">
              Watch Videos
          </p>
          <p className="description">
              Watch videos, understand the concepts and learn how the everything works
          </p>
      </div>
      <div className="card primary_inverted">
          <p className="title">
              Interact and Learn
          </p>
          <p className="description">
              Change the code in interactive codespaces with each video and experience the changes in realtime
          </p>
      </div>
      <div className="card secondary_blue">
          <p className="title">
              Ask AI
          </p>
          <p className="description">
              Stuck somewhere and need a detailed explaination? Just ask the AI for assistance
          </p>
      </div>        
    </div>

      <div className='demo'>
        <h1 className='ta_center'>How it works</h1>
        <div id="embed">
          
        </div>
      </div>

      <div className='pricing'>

        <h1 className='ta_center'>Pricing</h1><br/>

        <div className='pricingCards'>

          <div className='card'>
            <div className='cardContent'>
              <p className='title'>Basic</p>
              <p className='price'>Free</p>
              <ul className='features'>
                <li>Videos on YouTube</li>
                <li>Public GitHub Repositories</li>
                <li>Discord Server Invite(Requires Sign Up)</li>
              </ul>
            </div>
          </div>

          <div className='card bestSeller'>
            <div className='cardContent'>
              <p className='title'>Pro</p>
              <p className='price'>INR 69/Month</p>
              <ul className='features'>
                <li>Everything with Basic + </li>
                <li>Videos on InVrz Learn</li>
                <li>Interactive codespaces</li>
                <li>AI code explaination</li>
              </ul>
            </div>
          </div>

          <div className='card'>
            <div className='cardContent'>
              <p className='title'>Pro +</p>
              <p className='price'>INR 699/Year</p>
              <ul className='features'>
                <li>Everything with Pro + </li>
                <li>Early access to new content</li>
                <li>Beta access to new features</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div className='subscribe'>
        <h1 className='ta_center'>Coming Soon</h1>
        <form action='https://submit-form.com/QlHJV2i7'>
          <input type='email' name='email' id='email' placeholder='your email address' />
          <button type='submit'>subscribe to get updates</button>
        </form>
      </div>
    </>
  )
}

export default App
