"use client"

import Hero from './components/Hero';
import SwiperSection from './components/SwiperSection';
import Technology from './components/Technology';
import People from './components/People';
import Industries from './components/Industries';
import Stage from './components/Stage';
import Contact from './components/Contact';


export default function Home() {
  return (<>
    <Hero></Hero>
      <SwiperSection></SwiperSection>
      <Technology/>
      <People/>
      <Industries/>
      <Stage/>
      <Contact/>
  </>
  );
}
