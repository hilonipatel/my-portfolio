
import { useState } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    name: "TaskForge",
    category: "SaaS Project Management Platform",
    color: "green",
    description:
      "A full-stack, multi-tenant project management platform for teams to organize projects, manage memberships, and track tasks.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    details: [
      "Designed 20 REST API route declarations across four Express modules.",
      "Implemented JWT authentication and role-based access control for four organization roles.",
      "Modeled five PostgreSQL tables with relational constraints and composite foreign keys.",
      "Built task workflows for status, priority, due dates, assignment, and updates.",
    ],
    github: "https://github.com/hilonipatel/TaskForge.git",
    symbol: "▦",
  },
  {
    number: "02",
    name: "RETRACE",
    category: "Incident Replay & Debugging Platform",
    color: "blue",
    description:
      "An incident replay and debugging platform that reruns recorded HTTP requests and helps developers identify regressions.",
    stack: ["React", "TypeScript", "Express", "Jest"],
    details: [
      "Built APIs and a relational data model for incidents, HTTP events, and replay runs.",
      "Engineered sequential HTTP replay with response capture and execution timing.",
      "Created a response diff viewer for expected versus actual status codes and JSON bodies.",
      "Added replay history, run comparisons, and five passing Jest tests.",
    ],
    github: "https://github.com/hilonipatel/incident-replay-platform.git",
    symbol: "⌁",
  },
  {
    number: "03",
    name: "FlightSystem",
    category: "Online Travel Reservation System",
    color: "orange",
    description:
      "A Java-based flight reservation system supporting flight search, bookings, customer accounts, and administrative reporting.",
    stack: ["Java", "Servlets", "JDBC", "MySQL"],
    details: [
      "Designed a 12-table relational database for flights, reservations, airlines, and users.",
      "Implemented one-way and round-trip search, cancellations, and waitlists.",
      "Built distinct customer, representative, and administrator workflows.",
      "Developed reports for sales, revenue, and customer booking activity.",
    ],
    github: "https://github.com/crrlyly/FlightSystem.git",
    symbol: "↗",
  },
];

const skills = [
  {
    category: "LANGUAGES",
    items: ["Java", "TypeScript", "JavaScript", "Python", "C", "SQL", "OCaml"],
  },
  {
    category: "FRONTEND",
    items: ["React", "React Router", "HTML", "CSS"],
  },
  {
    category: "BACKEND",
    items: ["Node.js", "Express.js", "Java Servlets", "JDBC", "REST APIs"],
  },
  {
    category: "DATABASES",
    items: ["PostgreSQL", "MySQL", "Relational Design"],
  },
  {
    category: "TOOLS",
    items: ["Git", "GitHub", "npm", "VS Code", "IntelliJ IDEA", "Jest"],
  },
  {
    category: "CORE CONCEPTS",
    items: [
      "OOP",
      "Data Structures & Algorithms",
      "API Design",
      "JWT",
      "RBAC",
      "Layered Architecture",
    ],
  },
];

function App() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Home">
          hiloni patel
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
        </nav>
        <a className="contact-link" href="mailto:hilonipatel22@gmail.com">
          Get in touch <span>↗</span>
        </a>
      </header>

      <section className="hero" id="about">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <h1>
            Building things
            <br />
            for the <span className="serif">real world.</span>
          </h1>

          <p className="intro">
            Hey, I’m <strong>hiloni</strong> — a software developer
            and Computer Science student at Rutgers University.
            I enjoy turning complex problems into useful, thoughtful
            software, from full-stack applications to developer tools.
          </p>

          <div className="hero-actions">
            <a
              className="text-link"
              href="mailto:hilonipatel22@gmailcom"
            >
              Email ↗
            </a>
            <a
              className="text-link"
              href="https://github.com/hilonipatel"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/hiloni-patel"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              className="text-link"
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noreferrer"
            >
              Resume PDF ↗
            </a>
          </div>

          <div className="hero-meta">
            <div>
              <span className="meta-label">EDUCATION</span>
              <span>Rutgers University</span>
            </div>
            <div>
              <span className="meta-label">GRADUATING</span>
              <span>January 2027</span>
            </div>
          </div>
        </div>

        <div className="project-console" id="projects">
          <div className="console-header">
            <div>
              <h2>Selected work<span className="period">.</span></h2>
            </div>
            <span className="project-count">PROJECTS</span>
          </div>

          <div className="project-list">
            {projects.map((project) => {
              const isOpen = expanded === project.number;

              return (
                <article
                  className={`project-card ${project.color} ${
                    isOpen ? "expanded" : ""
                  }`}
                  key={project.number}
                >
                  <button
                    className="project-trigger"
                    onClick={() =>
                      setExpanded(isOpen ? null : project.number)
                    }
                    aria-expanded={isOpen}
                  >
                    <span className="project-number">{project.number}</span>
                    <span className="project-symbol">{project.symbol}</span>
                    <span className="project-heading">
                      <span className="project-category">
                        {project.category}
                      </span>
                      <span className="project-name">{project.name}</span>
                    </span>
                    <span className="expand-icon">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="project-details">
                      <p>{project.description}</p>

                      <div className="tag-list">
                        {project.stack.map((item) => (
                          <span className="tag" key={item}>
                            {item}
                          </span>
                        ))}
                      </div>

                      <ul className="achievement-list">
                        {project.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>

                      <a
                        className="project-link"
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View source code <span>↗</span>
                      </a>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <p className="console-hint">
            CLICK A PROJECT TO EXPLORE 
          </p>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-heading">
          <div>
            <span className="eyebrow">TOOLS OF THE TRADE</span>
            <h2>My toolkit<span className="period">.</span></h2>
          </div>
          <p>
            The languages, frameworks, and concepts I use to turn ideas
            into working software.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-group" key={group.category}>
              <h3>{group.category}</h3>
              <div className="skill-tags">
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <a className="wordmark" href="#" aria-label="Back to top">
          hiloni patel
        </a>
        <span>Designed &amp; built with care.</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}

export default App;
