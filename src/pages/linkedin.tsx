// pages/linkedin.tsx
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const LinkedInPage: React.FC = () => {
  const router = useRouter();
  const [showRedirect, setShowRedirect] = useState(true);

  useEffect(() => {
    // After 0.5 seconds, redirect to the LinkedIn profile
    const timeout = setTimeout(() => {
      setShowRedirect(false);
      router.push('https://www.linkedin.com/in/bishnu-poudel');
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '25vh', // Quarter of the screen height
        width: '25vw',
        backgroundColor: 'lightblue',
      }}
    >
      {showRedirect && (
        <div
        style={{
            textAlign: 'center', // Center the text horizontally
            fontSize: '1.5rem', // Adjust font size as needed
          }}
        >
          Redirecting to LinkedIn...
        </div>
      )}
    </div>
  );
};

export default LinkedInPage;
