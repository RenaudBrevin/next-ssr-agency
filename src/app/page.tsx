'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import './page.css';
import ScrollSlider from '@/components/02-sections/scroll-list';
import Clients from '@/components/02-sections/clients';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className='hero flex flex-col items-center'>
        <div className="flex flex-col items-center">
          <h1 className='hero--title text-6xl font-bold mb-4'><span className='text-gold'> Paris </span> Web Agency</h1>
          <ScrollSlider />
          <Link href="/projects" className='bg-white flex items-center gap-5 px-5 py-3 text-black font-extrabold rounded-2xl mt-12'>
              <span>Our Projects</span>
              <Image
              className=""
              src="/right-arrow.png"
              alt="Next.js logo"
              width={15}
              height={30}
              priority
            />
          </Link>
          <p className="quote text-white text-3xl font-bold mt-8">"Elite Digital Crafting for Visionary Brands."</p>
        </div>
        <Clients />
      </section>
    </>
  );
}
