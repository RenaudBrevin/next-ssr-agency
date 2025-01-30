'use client';

import React from 'react';
import './page.css';
import ScrollSlider from '@/components/02-sections/scroll-list';
import Clients from '@/components/02-sections/clients';
import Button from '@/components/01-atoms/ButtonSvg';

export default function Home() {
  return (
    <>
      <section className='hero flex flex-col items-center'>
        <div className="flex flex-col items-center">
          <h1 className='hero--title text-6xl font-bold mb-4'><span className='text-gold'> Paris </span> Web Agency</h1>
          <ScrollSlider />
          <Button icon="right-arrow" text="Our Projects" href="/projects"/>
          <p className="quote text-white text-3xl font-bold mt-8">&quot;Elite Digital Crafting for Visionary Brands.&quot;</p>
        </div>
        <Clients />
      </section>
    </>
  );
}
