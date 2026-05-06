import Link from "next/link";
import { projects } from "./data/projects";
import "./globals.css";
export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="brand">TEJAASWIN V</div>
        <div className="navLinks">
          <a href="#work">Work</a>
          <a href="#research">Research</a>
          <a href="#academics">Academics</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroBadge">SUTD CSD · BUILDER · DESIGNER · FOUNDER</div>

        <h1>
          I turn strange ideas into
          <span> sharp digital products.</span>
        </h1>

        <p className="heroText">
          I work across AI products, digital twins, fintech tools, chip research,
          and design-led startup experiments — moving from idea to prototype to
          pitch to execution.
        </p>

        <div className="heroActions">
          <a href="#work" className="primaryBtn">View Work</a>
          <a href="#contact" className="secondaryBtn">Contact</a>
        </div>

        <div className="console">
          <div className="consoleTop">
            <span></span><span></span><span></span>
          </div>
          <p><b>$</b> generate_idea --daily</p>
          <p><b>$</b> validate_with_people --fast</p>
          <p><b>$</b> build_prototype --ship</p>
          <p className="success">status: always building</p>
        </div>
      </section>

      <section className="ticker">
        <span>AI PRODUCTS</span>
        <span>DESIGN SYSTEMS</span>
        <span>DIGITAL TWINS</span>
        <span>FINTECH</span>
        <span>NEUROMORPHIC CHIPS</span>
        <span>STARTUP MVPs</span>
      </section>

      <section className="bento">
        <div className="bentoCard big">
          <p className="label">CURRENT MODE</p>
          <h2>Building Deskribe and scaling a portfolio of venture experiments.</h2>
        </div>

        <div className="bentoCard">
          <h3>93.6%</h3>
          <p>CBSE Class 12</p>
        </div>

        <div className="bentoCard">
          <h3>SUTD</h3>
          <p>Global Merit Award + Trailblazer Scholarship</p>
        </div>

        <div className="bentoCard">
          <h3>CTD</h3>
          <p>Module exemption in Term 1</p>
        </div>
      </section>

      <section id="work" className="section">
        <p className="label">SELECTED WORK</p>
        <h2>Projects, research, and startup experiments.</h2>

        <div className="projectList">
          {projects.map((project, index) => (
            <Link
              href={`/projects/${project.slug}`}
              className="projectRow"
              key={project.slug}
            >
              <span className="number">{String(index + 1).padStart(2, "0")}</span>

              <div>
                <p>{project.type}</p>
                <h3>{project.title}</h3>
                <span>{project.short}</span>
              </div>

              <strong>Open →</strong>
            </Link>
          ))}
        </div>
      </section>

      <section id="research" className="section twoCol">
        <div>
          <p className="label">RESEARCH + UROP</p>
          <h2>Deep tech curiosity, applied through real projects.</h2>
        </div>

        <div className="infoGrid">
          <div>Singapore PGTwin: MQTT + GIS heat mapping for voltage shutdowns and overload zones.</div>
          <div>AI Accelerators and Neuromorphic Computing under Prof. Shubhakar Kalya.</div>
          <div>Brain-inspired Olfactory Perception Chips under Prof. Desmond Loke.</div>
        </div>
      </section>

      <section id="academics" className="section twoCol">
        <div>
          <p className="label">ACADEMICS</p>
          <h2>Strong academic base. Stronger execution bias.</h2>
        </div>

        <div className="infoGrid">
          <div>93.6% in CBSE Class 12.</div>
          <div>DAV Boys Senior Secondary School, Gopalapuram, Chennai.</div>
          <div>Computer Science and Design at SUTD.</div>
          <div>Global Merit Award holder.</div>
          <div>Trailblazer Scholarship awardee.</div>
          <div>CTD module exemption in Term 1.</div>
          <div>Secretary at Scratch! — the DJ Club of SUTD.</div>
        </div>
      </section>

      <section className="section twoCol">
        <div>
          <p className="label">SKILLS</p>
          <h2>Useful across product, code, design, and business.</h2>
        </div>

        <div className="skillsCloud">
          <span>Networking</span>
          <span>Ideation</span>
          <span>Execution</span>
          <span>Monetisation</span>
          <span>Generative AI</span>
          <span>Prompt Engineering</span>
          <span>Full-stack Development</span>
          <span>Product Strategy</span>
          <span>Pitching</span>
          <span>Design Thinking</span>
        </div>
      </section>

      <section className="manifesto">
        <h2>
          I generate ideas every day, pressure-test them with people, build fast,
          and keep iterating until they become real.
        </h2>
      </section>

      <section id="contact" className="contact">
        <p className="label">CONTACT</p>
        <h2>Let’s build something sharp.</h2>

        <div>
          <a href="mailto:your-email@example.com">Email</a>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
        </div>
      </section>
    </main>
  );
}