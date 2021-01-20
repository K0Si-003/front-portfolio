import './home.css';
import React from 'react';
import { Transition } from 'react-transition-group';
import ReactFullpage from '@fullpage/react-fullpage';

const Home = () => {
  const anchors = ['home', 'about', 'project', 'contact'];
  return (
    <main className='home'>
      <ReactFullpage
        // fullpage options
        licenseKey={'YOUR_KEY_HERE'}
        anchors={anchors}
        navigation
        navigationPosition={'left'}
        scrollingSpeed={800} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className='section'>
                <Transition timeout={1000} in={true} appear>
                  {(status) => (
                    <div className={`text text-${status}`} id='section1'>
                      <h1>
                        Hugo <br />
                        Pioda
                      </h1>
                      <p>Web Developer</p>
                    </div>
                  )}
                </Transition>
              </div>
              <div className='section'>
                <p>About me</p>
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  Click me to move down
                </button>
              </div>
              <div className='section'>
                <p>My latest projects</p>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </main>
  );
};

export default Home;
