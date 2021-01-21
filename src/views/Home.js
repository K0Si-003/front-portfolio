import './home.css';
import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

const Home = () => {
  const anchors = ['home', 'projects', 'about', 'contact'];
  return (
    <main className='home'>
      <ReactFullpage
        anchors={anchors}
        navigation
        navigationPosition={'left'}
        slidesNavigation={false}
        scrollingSpeed={1000}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <section className='section'>
                <div className='container'>
                  <h1>
                    Hugo <br />
                    Pioda
                  </h1>
                  <p>Web Developer</p>
                </div>
              </section>
              <section className='section'>
                <div className='container'>
                  <p>Latests projects</p>
                  <button onClick={() => fullpageApi.moveSectionDown()}>
                    Click me to move down
                  </button>
                </div>
              </section>
              <section className='section'>
                <div className='container'>
                  <p>About me</p>
                </div>
              </section>
              <section className='section'>
                <div className='container'>
                  <p>Contact me</p>
                </div>
              </section>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </main>
  );
};

export default Home;
