import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const MapComponent = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    setIsLoading(true);
    
    try {
      // Set the access token
      mapboxgl.accessToken = mapboxToken;
      
      // Initialize map centered on Dubai, UAE
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [55.2708, 25.2048], // Dubai coordinates
        zoom: 12,
        pitch: 0,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add a marker for the office location
      new mapboxgl.Marker({
        color: '#0f0f0f' // Using corporate dark color
      })
        .setLngLat([55.2708, 25.2048])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML('<div class="p-2"><strong>Blume Industry Solutions LLC</strong><br>Dubai, UAE</div>')
        )
        .addTo(map.current);

      // Handle map load
      map.current.on('load', () => {
        setIsLoading(false);
        setShowTokenInput(false);
      });

      // Handle errors
      map.current.on('error', () => {
        setIsLoading(false);
        setShowTokenInput(true);
      });

    } catch (error) {
      console.error('Error initializing map:', error);
      setIsLoading(false);
      setShowTokenInput(true);
    }
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      initializeMap();
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (showTokenInput) {
    return (
      <div className="h-64 bg-gradient-subtle border border-corporate-border rounded-lg flex items-center justify-center p-6">
        <div className="text-center space-y-4 max-w-md">
          <h4 className="font-semibold text-corporate">Map Configuration Required</h4>
          <p className="text-sm text-corporate-gray">
            To display the interactive map, please enter your Mapbox public token. 
            You can find this at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-corporate underline">mapbox.com</a> in your account dashboard.
          </p>
          <form onSubmit={handleTokenSubmit} className="space-y-3">
            <div className="space-y-2">
              <Label htmlFor="mapbox-token" className="text-sm">Mapbox Public Token</Label>
              <Input
                id="mapbox-token"
                type="text"
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                placeholder="pk.eyJ1IjoieW91cnVzZXJuYW1lIiwiYSI6..."
                className="text-sm"
              />
            </div>
            <Button 
              type="submit" 
              size="sm" 
              disabled={!mapboxToken.trim() || isLoading}
              className="w-full"
            >
              {isLoading ? 'Loading Map...' : 'Load Map'}
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-64">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg" />
      {isLoading && (
        <div className="absolute inset-0 bg-background/80 flex items-center justify-center rounded-lg">
          <div className="text-corporate-gray">Loading map...</div>
        </div>
      )}
    </div>
  );
};

export default MapComponent;