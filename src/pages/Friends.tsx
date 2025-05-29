
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Users, Camera, MapPin } from "lucide-react";

const Friends = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if already authenticated in session
    const auth = sessionStorage.getItem('friendsAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    if (password === 'War$aw!') {
      setIsAuthenticated(true);
      sessionStorage.setItem('friendsAuth', 'true');
      setError('');
    } else {
      setError('Incorrect password. Try again!');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Friends Only Area</h1>
              <p className="text-gray-600">Enter the password to access private content</p>
            </div>
            <div className="space-y-4">
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full"
              />
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
              <Button onClick={handleLogin} className="w-full">
                Access Private Area
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const familyPhotos = [
    { id: 1, title: "Warsaw Old Town Walk", description: "Beautiful day exploring the historic center" },
    { id: 2, title: "Vistula River Picnic", description: "Perfect afternoon by the water" },
    { id: 3, title: "Łazienki Park", description: "Peaceful moments in Warsaw's green heart" },
    { id: 4, title: "Family Dinner", description: "Turkish cuisine night at home" }
  ];

  const upcomingEvents = [
    { date: "Dec 15, 2024", event: "Warsaw Christmas Market Visit", location: "Old Town Square" },
    { date: "Dec 31, 2024", event: "New Year's Eve Party", location: "Nuri's Apartment" },
    { date: "Jan 20, 2025", event: "Winter Photography Walk", location: "Royal Castle Area" },
    { date: "Feb 14, 2025", event: "Valentine's Day Celebration", location: "Chopin Museum" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to My Private Space</h1>
          <p className="text-xl text-gray-600">Here are some special moments and upcoming plans just for friends!</p>
        </div>

        {/* Family Photos Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Camera className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Recent Memories</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {familyPhotos.map((photo) => (
              <Card key={photo.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-4">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
                    <Camera className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{photo.title}</h3>
                  <p className="text-gray-600 text-sm">{photo.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section>
          <div className="flex items-center mb-8">
            <Calendar className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
          </div>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 rounded-full p-3">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{event.event}</h3>
                        <div className="flex items-center text-gray-600 mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-blue-600 font-semibold">{event.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="text-center mt-12">
          <Button 
            onClick={() => {
              setIsAuthenticated(false);
              sessionStorage.removeItem('friendsAuth');
            }}
            variant="outline"
          >
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Friends;
