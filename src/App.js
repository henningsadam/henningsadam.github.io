import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import ProjectCard from './components/ProjectCard';
import Section from './components/Section';
import projects from './data/projects.js';

function App() {

  return (
    <>
      <Header />
      <Main>
        <Section name='hero'>
          <div class='hero'>
            <div class='hero-text-container'>
              <h1>
                Hi, I'm <span class='hero-name'>Adam Hennings.</span>
              </h1>
            </div>
            <div class='hero-img-container'>
              {/* <img class="hero-img" src="" alt=""> */}
            </div>
          </div>
        </Section>
        <Section name='projects'>
          <h2 class='primary-heading'>Projects</h2>
          <h3 class='subheading'>See below for examples of my work</h3>
          <ul class='projects'>
            {projects.map((project) => (
              <ProjectCard
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
      </Main>
      <Footer />
    </>
  );
}

export default App;
