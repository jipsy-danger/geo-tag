# Geo Tag Camera

Astro-based browser application for creating GPS Map Camera-style photos.

## Features
- Upload a local JPG/PNG/WebP image.
- Select a map point or use browser geolocation.
- Coordinates update automatically from the map marker.
- Editable place, address, date/time, and timezone fields.
- Generates a dark translucent GPS information panel inspired by the supplied reference.
- Adds a visual mini-map and coordinates to the photo.
- Downloads the generated image as JPEG.
- Image processing stays in the browser; there is no photo upload backend.

## Stack
- Astro
- Solid integration package included for future interactive components
- Leaflet + OpenStreetMap for the point-selection map
- Canvas API for final image rendering

## Run
```bash
npm install
npm run dev
```

Then open the local Astro URL shown in the terminal.

## Note about Google Maps
The current implementation uses Leaflet with OpenStreetMap tiles so it works without a Google Maps API key. The visual stamp is designed to match the supplied GPS Map Camera reference. A Google Maps implementation can be added later with a valid Google Maps API key and the Google Maps JavaScript API.
