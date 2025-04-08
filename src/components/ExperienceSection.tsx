
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState("mtn");
  
  const experiences = [
    {
      id: "mtn",
      company: "MTN Mobile",
      position: "Front-End Developer",
      period: "Jan 2021 – Mar 2023",
      location: "Remote/On-site",
      responsibilities: [
        "Developed customer-facing dashboards and service portals using React JS, enhancing UX and reducing user complaints.",
        "Integrated REST APIs for mobile top-up, data usage, and billing features.",
        "Refactored legacy components into modular, reusable structures with Next.js and Tailwind CSS, improving performance by 30%.",
        "Participated in Agile sprints, collaborating with designers, QA, and back-end teams.",
        "Deployed responsive interfaces that improved mobile compatibility and accessibility."
      ]
    },
    {
      id: "freelance",
      company: "Freelance",
      position: "Front-End Developer",
      period: "2000 – Present",
      location: "Remote",
      responsibilities: [
        "Delivered over 25 client-facing web solutions across e-commerce, healthcare, and media sectors using React, Next.js, and AWS.",
        "Built responsive UI/UX designs from scratch with Tailwind CSS, increasing client retention and satisfaction.",
        "Developed admin dashboards, booking systems, and content platforms using reusable components and real-time features.",
        "Handled deployment and hosting via Netlify, Vercel, and AWS Amplify.",
        "Provided ongoing support and updates for long-term clients, following best coding practices."
      ]
    }
  ];
  
  return (
    <section id="experience" className="py-20 px-4 md:px-6 bg-navy-light">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">
          <span className="text-teal font-mono mr-2">02.</span> Where I've Worked
        </h2>
        
        <Tabs 
          defaultValue="mtn" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="mt-8"
        >
          <TabsList className="flex flex-wrap md:flex-nowrap overflow-x-auto mb-8 bg-transparent border-b border-slate/20">
            {experiences.map((exp) => (
              <TabsTrigger 
                key={exp.id} 
                value={exp.id}
                className="px-4 py-2 font-mono text-slate data-[state=active]:text-teal data-[state=active]:border-b-2 data-[state=active]:border-teal rounded-none bg-transparent"
              >
                {exp.company}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {experiences.map((exp) => (
            <TabsContent key={exp.id} value={exp.id} className="mt-6">
              <h3 className="text-xl text-slate-lighter mb-1">
                {exp.position} <span className="text-teal">@ {exp.company}</span>
              </h3>
              <p className="font-mono text-sm text-slate mb-4">
                {exp.period} | {exp.location}
              </p>
              
              <ul className="space-y-4">
                {exp.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex">
                    <div className="flex-shrink-0 mr-2 mt-1.5 text-teal">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                    <p>{responsibility}</p>
                  </li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ExperienceSection;
