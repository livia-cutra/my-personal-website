import { useEffect, useRef } from "react";
import ukgLogo from "../../Assets/ExperienceLogos/ukglogo.jpg";
import bttLogo from "../../Assets/ExperienceLogos/bttlogo.png";
import khouryLogo from "../../Assets/ExperienceLogos/khourylogo.png";
import westLogo from "../../Assets/ExperienceLogos/westlogo.jpg";
import forgeLogo from "../../Assets/ExperienceLogos/forgelogo.jpg";
import hbpLogo from "../../Assets/ExperienceLogos/hbplogo.jpg";
import codepathLogo from "../../Assets/ExperienceLogos/codepathlogo1.webp";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

const experiences = [
  {
  role: "Software Engineer & Website Developer",
  org: "Forge (Sherman Center Program)",
  date: "Aug 2025 – Present",
  logo: forgeLogo,
  text: [
    "At Forge, I work on building full-stack features for student-facing platforms as part of a multidisciplinary product team. I implemented Forge’s homepage using React, Tailwind CSS, and Vite, and contribute to Codescape, a developer tool that visualizes codebases as an interactive 3D city through dynamic frontend rendering."
  ]
  },
  { 
  role: "President of the Northeastern Chapter",
  extra: "Former Treasurer (May 2024 – May 2025)",
  org: "Women in the Enterprise of Science and Technology",
  date: "May 2025 – Present",
  logo: westLogo,
  text: [
    "As President of WEST, I lead a restructured executive board and help set the organization’s strategic direction, with a focus on building community and professional development opportunities for women in STEM. I oversee programming, budgeting, sponsorships, and outreach, ensuring initiatives are both impactful and financially sustainable."
  ]

  },
  {
    role: "Core Team – Sponsorship",
    org: "HackBeanpot",
    logo: hbpLogo,
    date: "May 2025 – Present",
    text: [
      "I am part of the sponsorship team for HackBeanpot, one of Boston’s largest beginner-friendly hackathons. In this role, I support sponsor outreach and coordination while contributing to the planning of a large-scale technical event. This experience has strengthened my understanding of how technical communities, partnerships, and logistics come together to support meaningful developer experiences."
    ]
  },
  {
    role: "Tech Fellow",
    org: "Break Through Tech @ Cornell",
    logo: bttLogo,
    date: "Mar 2025 – Present",
    text: [
      "I was selected as a Tech Fellow in Break Through Tech, a competitive program focused on building pathways into AI and machine learning careers. Through the fellowship, I am gaining applied experience with Python and core ML concepts while working alongside peers and mentors in a structured, industry-informed environment. The program has helped me better understand how technical skills translate to real-world problem solving."
    ]
  },
  {
    role: "Software Engineer Intern",
    org: "Ultimate Kronos Group (UKG)",
    date: "Sep 2025 – December 2025",
    logo: ukgLogo,
    text: [
      "At UKG, I developed a Code Analysis Reporting Tool that replaced legacy Bitbucket workflows with GitHub and SonarQube, improving coverage tracking and reducing manual compliance checks. I also built a MongoDB-based persistence layer and enhanced reporting filters, enabling faster audit readiness and more accurate pull request analysis for Agile teams."
    ]

  },
  {
    role: "Teaching Assistant - Algorithms & Data Structures",
    org: "Khoury College of Computer Sciences",
    logo: khouryLogo,
    date: "Aug 2024 – Aug 2025",
    text: [
      "As a Teaching Assistant, I supported over 200 students by leading office hours, grading, and one-on-one tutoring for algorithms and data structures. I helped students build strong algorithmic intuition by breaking down complex topics like recursion, graph traversal, and Big-O analysis through live coding and visual explanations."
    ]
  },
  {
  role: "Student - Advanced TIP102",
  org: "CodePath",
  date: "Feb 2025 – May 2025",
  logo: codepathLogo,
  text: [
    "I completed CodePath’s Advanced Technical Interview Prep course, focused on algorithmic problem solving, data structures, and system design. Through structured weekly lessons and practice, I improved my problem-solving speed and ability to write efficient, scalable solutions while analyzing Big-O complexity."
  ]
}
];

export default function Experience() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.25 }
    );

    itemsRef.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="experience-section" id="experience">
      <h1 className="experience-title">experience</h1>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <div
            key={i}
            ref={el => (itemsRef.current[i] = el)}
            className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-content">
              <h3 className="exp-role">{exp.role}</h3>
{exp.extra && <p className="exp-extra">{exp.extra}</p>}
<p className="exp-org accent">{exp.org}</p>
<p className="exp-date">{exp.date}</p>



<ul className="exp-bullets">
  {exp.text.map((line, idx) => (
    <li key={idx}>{line}</li>
  ))}
</ul>

            </div>
            <div className="timeline-dot">
  <img src={exp.logo} alt={`${exp.org} logo`} />
</div>

          </div>
        ))}
        </div>
    

        <h2 className="project-title">
            professional <strong className="purple">skillset </strong>
          </h2>

          <h2 className="project-heading">
            my languages/frameworks
          </h2>

          <Techstack />

          <h2 className="project-heading">
            my tools
          </h2>
          <Toolstack />

      </section>
  );
}

