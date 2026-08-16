import React from 'react';
import { Hero } from '../components/home/Hero';
import { CurrentlyPanel } from '../components/home/CurrentlyPanel';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { SkillsSnapshot } from '../components/home/SkillsSnapshot';
import { JourneyTeaser } from '../components/home/JourneyTeaser';
import { BuildLogTeaser } from '../components/home/BuildLogTeaser';
import { ContactCTA } from '../components/home/ContactCTA';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      <Hero />
      <CurrentlyPanel />
      <FeaturedProjects />
      <SkillsSnapshot />
      <JourneyTeaser />
      <BuildLogTeaser />
      <ContactCTA />
    </div>
  );
};
