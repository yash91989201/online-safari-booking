/* eslint-disable @typescript-eslint/no-unsafe-call */
//Since the map will be laoded and displayed on client side
"use client";

import { env } from "@/env";
// Import necessary modules and functions from external libraries and our own project
import type { Libraries } from "@react-google-maps/api";
import { useLoadScript } from "@react-google-maps/api";
import type { ReactNode } from "react";

// Define a list of libraries to load from the Google Maps API
const libraries: Libraries = ["places", "drawing", "geometry"];

export function GoogleMapProvider({ children }: { children: ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { isLoaded: scriptLoaded, loadError } = useLoadScript({
    googleMapsApiKey: env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    libraries: libraries,
  });

  if (loadError) return <p>Encountered error while loading google maps</p>;

  if (!scriptLoaded) return <p>Map Script is loading ...</p>;

  return children;
}
