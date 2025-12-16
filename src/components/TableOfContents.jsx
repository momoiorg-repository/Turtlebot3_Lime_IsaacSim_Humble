import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TableOfContents = () => {
    const [headings, setHeadings] = useState([]);
    const [activeId, setActiveId] = useState('');
    const location = useLocation();

    useEffect(() => {
        // Use a small timeout to ensure DOM is fully rendered and avoid synchronous state update warnings
        const timer = setTimeout(() => {
            const elements = Array.from(document.querySelectorAll('.main-content h2, .main-content h3'));
            const headingData = elements.map((elem) => ({
                id: elem.id,
                text: elem.innerText,
                level: Number(elem.tagName.substring(1)),
            }));
            setHeadings(headingData);

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveId(entry.target.id);
                        }
                    });
                },
                { rootMargin: '-20% 0px -35% 0px' }
            );

            elements.forEach((elem) => observer.observe(elem));

            // Cleanup function for this effect's scope
            return () => {
                observer.disconnect();
            };
        }, 100);

        return () => clearTimeout(timer);
    }, [location]); // Re-run when location changes

    if (headings.length === 0) return null;

    return (
        <nav className="toc-sidebar">
            <div className="toc-title">On this page</div>
            <ul className="toc-list">
                {headings.map((heading) => (
                    <li
                        key={heading.id}
                        className={`toc-item level-${heading.level} ${activeId === heading.id ? 'active' : ''}`}
                    >
                        <a
                            href={`#${heading.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                                window.history.pushState(null, null, `#${heading.id}`);
                            }}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default TableOfContents;
