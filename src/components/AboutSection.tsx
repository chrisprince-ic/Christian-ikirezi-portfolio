
import React from 'react';

const AboutSection = () => {
  const technologies = [
    "JavaScript (ES6+)", 
    "React JS", 
    "Next.js",
    "HTML5",
    "CSS3", 
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Figma",
    "VS Code",
    "Chrome DevTools",
    "AWS (S3, Amplify, Lambda)",
    "REST APIs",
    "Netlify",
    "Agile/Scrum",
    "CI/CD principles"
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">
          <span className="text-teal font-mono mr-2">01.</span> About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-base md:text-lg">
            <p>
              I'm a front-end developer with more than 5 years of expertise in building exceptional 
              digital experiences. My journey in web development has equipped me with a deep understanding of 
              creating responsive, user-friendly interfaces that deliver results.
            </p>
            <p>
              I've worked with a diverse range of clients and projects, from e-commerce platforms and healthcare 
              applications to media sites and content management systems. My approach combines technical excellence 
              with a keen eye for design and usability.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            
            <div className="grid grid-cols-2 gap-2 mt-4">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center">
                  <div className="mr-2 text-teal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                  <span className="font-mono text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mx-auto">
            <div className="relative group">
              <div className="relative w-60 h-60 rounded-md overflow-hidden">
                <div className="absolute inset-0 bg-teal/20 z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
                <img 
                  src="https://placehold.co/400x400/112240/64FFDA?text=CI" 
                  alt="Christian Ikirezi" 
                  className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="absolute -z-10 top-5 left-5 w-60 h-60 border-2 border-teal rounded-md group-hover:top-3 group-hover:left-3 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
