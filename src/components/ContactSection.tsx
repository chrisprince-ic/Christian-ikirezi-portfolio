
import React from 'react';
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-6 bg-navy-light">
      <div className="container mx-auto max-w-2xl text-center">
        <p className="font-mono text-teal text-sm mb-2">04. What's Next?</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-lighter mb-5">Get In Touch</h2>
        
        <p className="text-slate mb-10">
          I'm currently looking for new opportunities and my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <a href="mailto:christianikirezi@gmail.com" className="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <span>christianikirezi@gmail.com</span>
          </a>
          
          <a href="tel:6478071494" className="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>647-807-1494</span>
          </a>
          
          <a href="https://github.com/chrisprince-ic" target="_blank" rel="noopener noreferrer" className="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            <span>github.com/chrisprince-ic</span>
          </a>
        </div>
        
        <Button 
          className="bg-transparent text-teal border border-teal hover:bg-teal/10 font-mono text-base px-7 py-5"
          asChild
        >
          <a href="mailto:christianikirezi@gmail.com">Say Hello</a>
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
