import "./Home.css";
import profile from "../../assets/myphoto.jpg";

function Home() {
  return (
    <section id="home" className="home">

      <div className="home-left">

        <h1>Hello, I'm</h1>

        <h2>Idusha</h2>

        <h3>IT undergraduate passionate about software engineering & web development</h3>

        <p>
          I am a dedicated undergraduate student with a strong foundation in 
      both frontend and backend technologies. I enjoy building interactive 
      web applications, solving real-world problems, and continuously 
      expanding my knowledge in software development.
        </p>

    <button className="btn" 
        onClick={() => {
        const link = document.createElement('a');
        link.href = '/Idusha_CV.pdf';
        link.download = 'Idusha_CV.pdf';
        link.click();
        }}
>
        Download CV
    </button>

      </div>

      <div className="home-right">

           <img src={profile} alt="Profile" />

      </div>

    </section>
  );
}

export default Home;