
import React, { useEffect, useState } from "react";

declare global {
  interface Window {
    Intercom?: any;
    intercomSettings?: any;
  }
}

export const IntercomLauncher: React.FC = () => {
  useEffect(() => {
    // Check if Intercom is loaded
    const checkIntercom = () => {
      const isAvailable = typeof window.Intercom === 'function';
      console.info("Intercom availability check:", isAvailable);
      
      if (isAvailable && window.intercomSettings) {
        // Boot Intercom with settings
        window.Intercom('boot', window.intercomSettings);
      }
    };

    // Initial check
    checkIntercom();

    // Check again after a delay to ensure Intercom has time to load
    const timer = setTimeout(checkIntercom, 2000);

    return () => clearTimeout(timer);
  }, []);

  // No visual component to render
  return null;
};

// Helper function to show Intercom chat
export const showIntercomChat = () => {
  if (typeof window.Intercom === 'function') {
    window.Intercom('show');
  } else {
    console.error("Intercom is not available");
    alert("Chat is currently unavailable. Please try again later.");
  }
};
