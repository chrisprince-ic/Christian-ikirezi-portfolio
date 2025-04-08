
import React from 'react';

const SocialSidebar = () => {
  return (
    <>
      {/* Left sidebar - social links */}
      <div className="fixed bottom-0 left-6 hidden lg:block">
        <div className="flex flex-col items-center">
          <ul className="flex flex-col gap-6 mb-6">
            <li>
              <a 
                href="https://github.com/chrisprince-ic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-light hover:text-teal transform hover:-translate-y-1 transition-all duration-200 block"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/christian-ikirezi-8b395021a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-light hover:text-teal transform hover:-translate-y-1 transition-all duration-200 block"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </li>
            <li>
              <a 
                href="mailto:christianikirezi@gmail.com" 
                className="text-slate-light hover:text-teal transform hover:-translate-y-1 transition-all duration-200 block"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
            </li>
            <li>
              <a 
                href="tel:6478071494" 
                className="text-slate-light hover:text-teal transform hover:-translate-y-1 transition-all duration-200 block"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
            </li>
          </ul>
          <div className="h-24 w-px bg-slate-light"></div>
        </div>
      </div>
      
      {/* Right sidebar - email */}
      <div className="fixed bottom-0 right-6 hidden lg:block">
        <div className="flex flex-col items-center">
          <a 
            href="mailto:christianikirezi@gmail.com" 
            className="font-mono text-slate-light hover:text-teal tracking-widest [writing-mode:vertical-lr] transform hover:-translate-y-1 transition-all duration-200 mb-6"
          >
            christianikirezi@gmail.com
          </a>
          <div className="h-24 w-px bg-slate-light"></div>
        </div>
      </div>
    </>
  );
};

export default SocialSidebar;
