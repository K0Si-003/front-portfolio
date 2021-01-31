import './home.css';
import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

// import project from '../assets/images/project.jpg';

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
                  <div className='text' id='section1'>
                    <h1>
                      Hugo <br />
                      Pioda
                    </h1>
                    <p>Web Developer</p>
                  </div>
                </div>
              </section>
              <section className='section'>
                <div className='container'>
                  <div className='text' id='section1'>
                    <p>Latests projects</p>
                  </div>
                  <div className='image image-project'>
                    <div className='image-over'>
                      <div className='image-cover'></div>
                      <div className='image-cover'></div>
                    </div>
                  </div>
                  {/* <img className='project' src={project} alt='project' /> */}
                </div>
              </section>
              <section className='section'>
                <div className='container'>
                  <div className='text'>
                    <p>About me</p>
                  </div>
                </div>
              </section>
              <section className='section'>
                <div className='container'>
                  <div className='text'>
                    <p>Contact me</p>
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
