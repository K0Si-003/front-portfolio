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
        scrollingSpeed={1200}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <section className='section'>
                <div className='container'>
                  <div className='text' id='section1'>
                    <h1 className='title_name'>
                      Hugo <br />
                      Pioda
                    </h1>
                    <div className='separator'>
                      <span></span>
                      <span></span>
                    </div>
                    <h3 className='title_job'>Web Developer</h3>
                  </div>
                </div>
              </section>
              <section className='section'>
                <div className='container'>
                  <div className='text' id='section1'>
                    <p className='title_name'>Latests projects</p>
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
                    <p className='title_name'>About me</p>
                  </div>
                </div>
              </section>
              <section className='section'>
                <div className='container'>
                  <div className='text'>
                    <p className='title_name'>Contact me</p>
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
    </main>
  );
};

export default Home;
