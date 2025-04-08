
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ExternalLink, 
  Github, 
  Code, 
  Folder
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Storefront",
      description: "Built a high-performance React + Next.js storefront with Stripe integration and server-side rendering for SEO.",
      technologies: ["React", "Next.js", "Stripe", "Tailwind CSS", "SSR"],
      links: {
        github: "https://github.com/chrisprince-ic",
        live: "#"
      },
      featured: true,
      image: "https://placehold.co/800x500/112240/64FFDA?text=E-commerce"
    },
    {
      title: "Admin Dashboard",
      description: "Created a data-driven dashboard for client analytics using Tailwind CSS and React Charts, deployed on AWS Amplify.",
      technologies: ["React", "Tailwind CSS", "AWS Amplify", "React Charts", "REST API"],
      links: {
        github: "https://github.com/chrisprince-ic",
        live: "#"
      },
      featured: true,
      image: "https://placehold.co/800x500/112240/64FFDA?text=Dashboard"
    },
    {
      title: "Podcast Hosting Platform",
      description: "Designed a custom podcast platform with dynamic routing, episode streaming, and user feedback collection.",
      technologies: ["React", "Next.js", "AWS S3", "Tailwind CSS", "Node.js"],
      links: {
        github: "https://github.com/chrisprince-ic",
        live: "#"
      },
      featured: true,
      image: "https://placehold.co/800x500/112240/64FFDA?text=Podcast"
    }
  ];

  const otherProjects = [
    {
      title: "Mobile App Integration",
      description: "A React Native bridge for seamless integration with web services. Includes authentication, push notifications, and offline capabilities.",
      technologies: ["React Native", "Redux", "Firebase"],
      links: {
        github: "https://github.com/chrisprince-ic",
        live: "#"
      },
    },
    {
      title: "E-Learning Platform",
      description: "Interactive learning platform with course management, progress tracking, and integrated assessments.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      links: {
        github: "https://github.com/chrisprince-ic",
        live: "#"
      },
    },
    {
      title: "Health Tracker",
      description: "Personal health monitoring application with data visualization, goal setting, and achievement tracking.",
      technologies: ["React", "TypeScript", "Chart.js", "Tailwind"],
      links: {
        github: "https://github.com/chrisprince-ic",
        live: "#"
      },
    },
    {
      title: "Recipe Finder",
      description: "Culinary application that suggests recipes based on available ingredients with filtering options.",
      technologies: ["React", "API Integration", "Styled Components"],
      links: {
        github: "https://github.com/chrisprince-ic",
        live: "#"
      },
    },
    {
      title: "Real Estate Listings",
      description: "Property browsing platform with advanced filtering, virtual tours, and agent connectivity.",
      technologies: ["Next.js", "MongoDB", "Google Maps API"],
      links: {
        github: "https://github.com/chrisprince-ic",
        live: "#"
      },
    },
    {
      title: "Weather Dashboard",
      description: "Location-based weather forecasting with historical data comparison and weather alerts.",
      technologies: ["React", "Weather API", "Recharts"],
      links: {
        github: "https://github.com/chrisprince-ic",
        live: "#"
      },
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-heading">
          <span className="text-teal font-mono mr-2">03.</span> Some Things I've Built
        </h2>
        
        {/* Featured Projects - Carousel */}
        <div className="mt-12 mb-20">
          <Carousel className="w-full">
            <CarouselContent>
              {projects.filter(p => p.featured).map((project) => (
                <CarouselItem key={project.title}>
                  <div className="relative h-[450px] group overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-b from-navy/20 to-navy/90 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                      <p className="font-mono text-teal text-sm mb-1">Featured Project</p>
                      <h3 className="text-3xl font-semibold text-slate-lighter mb-4">{project.title}</h3>
                      <div className="bg-navy-light/90 p-6 rounded-lg shadow-xl mb-4 backdrop-blur-sm max-w-2xl">
                        <p className="text-slate-light">{project.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="font-mono text-xs px-3 py-1 rounded-full text-teal bg-navy-light/80 backdrop-blur-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <a 
                          href={project.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-slate-lighter hover:text-teal p-2 bg-navy-light/70 backdrop-blur-sm rounded-full transition-colors"
                        >
                          <Github size={20} />
                        </a>
                        <a 
                          href={project.links.live} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-slate-lighter hover:text-teal p-2 bg-navy-light/70 backdrop-blur-sm rounded-full transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static transform-none bg-navy-light border-navy-light text-slate-light hover:text-teal" />
              <CarouselNext className="static transform-none bg-navy-light border-navy-light text-slate-light hover:text-teal" />
            </div>
          </Carousel>
        </div>
        
        <h3 className="text-xl text-center text-slate-lighter mt-20 mb-8 font-semibold">
          Other Noteworthy Projects
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <Card 
              key={project.title} 
              className="group bg-navy-light border-navy-light hover:-translate-y-2 transition-all duration-300 h-full overflow-hidden"
            >
              <CardHeader className="flex flex-row items-start justify-between">
                <div className="p-2 bg-teal/10 rounded-lg">
                  <Folder className="h-8 w-8 text-teal" />
                </div>
                <div className="flex gap-2">
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 text-slate-light opacity-60 hover:opacity-100 hover:text-teal transition-all"
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href={project.links.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 text-slate-light opacity-60 hover:opacity-100 hover:text-teal transition-all"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-slate-lighter mb-3 group-hover:text-teal transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-slate text-base min-h-[80px]">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 text-xs text-slate-light font-mono">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2 py-1 bg-navy/60 rounded border border-slate/10"
                  >
                    {tech}
                  </span>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            variant="outline" 
            className="border-teal text-teal hover:bg-teal/10"
          >
            <span>View Full Project Archive</span>
            <ExternalLink size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
