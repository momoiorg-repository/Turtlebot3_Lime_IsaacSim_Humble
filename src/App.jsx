import { useState } from 'react';
import { content } from './data/content';
import './index.css';

function App() {
  const [activeId, setActiveId] = useState(content[0].id);

  const scrollToSection = (id) => {
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="sidebar">
        <h1>Isaac Sim<br />Docs</h1>
        <div className="nav-links">
          {content.map((item) => (
            <a
              key={item.id}
              className={`nav-item ${activeId === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.title}
            </a>
          ))}
        </div>
      </nav>

      <main className="main-content">
        {content.map((item, index) => (
          <section
            key={item.id}
            id={item.id}
            className="doc-section"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h2>{item.title}</h2>
            {item.sections.map((sub, idx) => (
              <div key={idx} className="sub-section">
                <h3>{sub.subtitle}</h3>
                <p>{sub.text}</p>
              </div>
            ))}
          </section>
        ))}
      </main>
    </>
  );
}

export default App;
