import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import ProjectCard from './components/ProjectCard';
import CourseCard from './components/CourseCard';
import Section from './components/Section';
import projects from './data/projects.js';
import certifications from './data/certifications.js';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Section name='hero'>
          <div className='hero'>
            <div className='hero-text-container'>
              <h1>
                Hi, I'm <span className='hero-name'>Adam Hennings.</span>
              </h1>
            </div>
            <div className='hero-img-container'>
              {/* <img className="hero-img" src="" alt=""> */}
            </div>
          </div>
        </Section>
        <Section name='projects'>
          <h2 className='primary-heading'>Projects</h2>
          <h3 className='subheading'>See below for examples of my work</h3>
          <ul className='projects'>
            {projects.map((project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                description={project.description}
                type={project.type}
                appUrl={project.urls.demo}
                githubUrl={project.urls.source}
                screenshotImageUrl={project.urls.screenshot}
                tags={project.tags}
              />
            ))}
          </ul>
        </Section>
        <Section name='education'>
          <h2 className='primary-heading'>Certifications</h2>
          <h3 className='subheading'>
            See below for some of the coursework I've completed
          </h3>
          <ul className='projects'>
            {/* {<CourseCard imageUrl={certifications[0].img} />} */}
            {certifications.map((certification) => (
              <CourseCard
                key={certification.name}
                name={certification.name}
                description='TBD'
                type='Course'
                certificateUrl={certification.certificateUrl}
                courseUrl={certification.courseUrl}
                imageUrl={certification.img}
                // appUrl={certification.urls.demo}
                // githubUrl={certification.urls.source}
                // screenshotImageUrl={certification.img}
                // tags={certification.tags}
              />
            ))}
          </ul>
        </Section>
      </Main>
      <Footer />
    </>
  );
}

export default App;
