import styles from './Projects.module.css';

const Projects = () => {
  const placeholderProjects = [
    { id: 1, title: 'Project 1', image: 'src/assets/images/projects/1.jpg' },
    { id: 2, title: 'Project 2', image: 'src/assets/images/projects/2.jpg' },
    { id: 3, title: 'Project 3', image: 'src/assets/images/projects/3.jpg' },
  ];

  return (
    <section className={styles.projects} id="projects">
      <h2>Projects</h2>
      <p>Projects I plan to undertake</p>
      <div className={styles.grid}>
        {placeholderProjects.map((project) => (
          <div key={project.id} className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={project.image} alt={project.title} className={styles.blurredImage} />
              <div className={styles.overlay}>Soon</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
