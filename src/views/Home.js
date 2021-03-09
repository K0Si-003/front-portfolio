import './home.css';
import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Canvas from '../components/Canvas/Canvas';

const Home = () => {
  const [activeScrollBtn, setActiveScrollBtn] = useState(false);
  const anchors = ['home', 'projects', 'about', 'contact'];
  const afterLoad = (origin, destination, direction) => {
    if (destination.index === 0) {
      setActiveScrollBtn(true);
    } else {
      setActiveScrollBtn(false);
    }
  };
  const onLeave = (origin, destination, direction) => {
    if (origin.index === 0) {
      setActiveScrollBtn(false);
    } else if (destination.index === 0) {
      setActiveScrollBtn(true);
    }
  };
  return (
    <main className='home'>
      <ReactFullpage
        anchors={anchors}
        navigation
        navigationPosition={'left'}
        afterLoad={afterLoad}
        onLeave={onLeave}
        slidesNavigation={false}
        scrollingSpeed={1200}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <section className='section section-top'>
                <div className='container'>
                  <div className='text text-top' id='section1'>
                    <h1 className='title'>
                      Hugo <br />
                      Pioda
                    </h1>
                    <div className='separator'>
                      <span />
                      <span />
                    </div>
                    <p className='subtitle'>Web Developer</p>
                  </div>
                </div>
              </section>
              <section className='section'>
                <div className='container'>
                  <div className='text' id='section1'>
                    <h2 className='title'>
                      Latests <br />
                      Projects
                    </h2>
                    <div className='separator'>
                      <span />
                      <span />
                    </div>
                    <p className='subtitle'>Check up my projects</p>
                  </div>
                  <div className='image image-project'>
                    <div className='image-over'>
                      <div className='image-cover'></div>
                      <div className='image-cover'></div>
                    </div>
                  </div>
                </div>
              </section>
              <section className='section'>
                <div className='container'>
                  <div className='text'>
                    <h2 className='title'>About Me</h2>
                    <div className='separator'>
                      <span />
                      <span />
                    </div>
                    <p className='subtitle'>More info about me</p>
                  </div>
                </div>
              </section>
              <section className='section'>
                <div className='container'>
                  <div className='text'>
                    <h2 className='title'>Contact me</h2>
                    <div className='separator'>
                      <span />
                      <span />
                    </div>
                    <p className='subtitle'>Web Developer</p>
                  </div>
                  <div className='image image-contact'>
                    <div className='image-over'>
                      <div className='image-cover'></div>
                      <div className='image-cover'></div>
                    </div>
                  </div>
                </div>
              </section>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      <p className={`scrolldown ${activeScrollBtn ? 'active' : 'inactive'}`}>
        SCROLLDOWN
      </p>
      <div className='background'>
        <Canvas />
      </div>
    </main>
  );
};

export default Home;
