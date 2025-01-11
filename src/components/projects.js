import styles from "./projects.module.css";
export default function Projects() {
  const projects = [
    {
      title: "MovieHub :",
      image: "/movieHub.png",
      skillsUsed: "Html, CSS",
      link: "https://onetario.github.io/movie-hub/",
    },
    {
      title: "PanCard Form :",
      image: "/panCardForm.png",
      skillsUsed: "Html, CSS",
      link: "https://onetario.github.io/panCardForm/",
    },
    {
      title: "Foodie Store :",
      image: "/foodieStore.png",
      skillsUsed: "Html, CSS, Bootstrap",
      link: "https://onetario.github.io/foodieStore-responsive/",
    },
    {
      title: "Todo List :",
      image: "/todoList.png",
      skillsUsed: "Html, CSS, JAVASCRIPT",
      link: "https://onetario.github.io/todoList/",
    },
    {
      title: "Book Sky :",
      image: "/bookSky.png",
      skillsUsed: "Html, CSS, JAVASCRIPT",
      link: "https://onetario.github.io/bookSkyTask/",
    },
    {
      title: "Mini Game :",
      image: "/miniGame.png",
      skillsUsed: "React JS",
      link: "https://onetario.github.io/mini-game-react/",
    },
    {
      title: "Feedback Form :",
      image: "/feedbackForm.png",
      skillsUsed: "React JS, Node JS, Express Js, Mongo DB",
      link: "https://feedbackform-client.onrender.com/",
    },
  ];

  return (
    <>
      <h2>Projects</h2>
      <div className={styles.imgDiv}>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <img
              className={styles.img}
              src={project.image}
              alt={project.title}
            />
            <h5>Skills Used: {project.skillsUsed}</h5>
            <a href={project.link}>View</a>
          </div>
        ))}
      </div>
    </>
  );
}
