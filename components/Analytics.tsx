"use client";

import { useEffect } from "react";

const Analytics = () => {
  useEffect(() => {
    // This is where you'd initialize GA4, Hotjar, etc.
    // For the class project, a placeholder is enough.
    if (process.env.NODE_ENV === "production") {
      console.log("Analytics initialized (GA4 / Hotjar placeholder)");
    }
  }, []);

  return null;
};

export default Analytics;
