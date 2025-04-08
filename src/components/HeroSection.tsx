
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 pb-32 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
          <p className="text-teal font-mono mb-5">Hi, my name is</p>
        </div>
        
        <h1 className="animate-fade-in text-4xl md:text-6xl lg:text-7xl font-bold text-slate-lighter mb-4" style={{animationDelay: '0.3s'}}>
          Christian Ikirezi.
        </h1>
        
        <h2 className="animate-fade-in text-3xl md:text-5xl lg:text-6xl font-bold text-slate mb-8" style={{animationDelay: '0.4s'}}>
          I am a Web Developer.
        </h2>
        
        <div className="animate-fade-in" style={{animationDelay: '0.5s'}}>
          <p className="text-slate text-lg md:text-xl max-w-2xl mb-10">
            I'm a detail-oriented and innovative React JS Front-End Developer with over 5 years of experience 
            creating responsive, scalable, and high-performance web applications. 
            Currently, I'm focused on building accessible and user-friendly web experiences.
          </p>
        </div>
        
        <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
          <Button 
            className="bg-transparent text-teal border border-teal hover:bg-teal/10 font-mono text-base px-7 py-5"
            asChild
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
