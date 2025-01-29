'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import './page.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import ScrollSlider from '@/components/02-sections/scroll-list';
import Clients from '@/components/02-sections/clients';
import { Pagination } from 'swiper/modules';

export default function Home() {
  return (
    <>
      <section className='hero flex flex-col items-center'>
        <div className="flex flex-col items-center my-auto">
          <h1 className='hero--title text-6xl font-bold'><span className='text-gold'> Paris </span> Web Agency</h1>
          <ScrollSlider />
          <button className='bg-white flex items-center gap-5 px-5 py-3 text-black font-extrabold rounded-2xl mt-12'>
            <span>Share a project</span>
            <Image
            className=""
            src="/right-arrow.png"
            alt="Next.js logo"
            width={15}
            height={30}
            priority
          />
          </button>
        </div>
        <Clients />
      </section>
    </>
  );
}
