import React from 'react';
import Image from 'next/image';
import './page.css'

export default function Home() {
  return (
    <>
      <nav className="flex items-center container py-6">
        <p className='mr-auto'>LOGO</p>
        <ul className="flex items-center font-bold justify-center border border-white rounded-full bg-lightBlack mx-auto">
          <li className="px-6 py-3.5">
            <a href="">Projects</a>
          </li>
          <li className="px-6 py-3.5">
            <a href="">About us</a>
          </li>
          <li className="px-6 py-3.5">
            <a href="">FAQ</a>
          </li>
          <li className="px-6 py-3.5">
            <a href="">Policy</a>
          </li>
        </ul>
        <button className="contact ml-auto rounded-2xl border border-gold text-gold px-4 py-3 bg-lightBlack font-extrabold">Contact</button>
      </nav>
      
      <section className='hero flex flex-col items-center'>
        <div className="flex flex-col items-center my-auto">
          <h1 className='hero--title text-6xl font-bold'><span className='text-gold'> Paris's</span> Web Agency</h1>
          <ul className="projects-list flex gap-6 items-center mt-4">
            <li className='border border-gray rounded-full py-2 px-4 bg-lightBlack'>
              <a href="" className="project--link">Project 1</a>
            </li>
            <li className='border border-gray rounded-full py-2 px-4 bg-lightBlack'>
              <a href="" className="project--link">Project 1</a>
            </li>
            <li className='border border-gray rounded-full py-2 px-4 bg-lightBlack'>
              <a href="" className="project--link">Project 1</a>
            </li>
            <li className='border border-gray rounded-full py-2 px-4 bg-lightBlack'>
              <a href="" className="project--link">Project 1</a>
            </li>
            <li className='border border-gray rounded-full py-2 px-4 bg-lightBlack'>
              <a href="" className="project--link">Project 1</a>
            </li>
          </ul>
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

        <div className="client-list-container bg-transparent p-2 border border-gray mt-auto mb-4 rounded-xl">
          <ul className="clients bg-lightBlack flex items-center gap-6 rounded-xl">
            <li className="client">
              <Image
                className=""
                src="clients/1.svg"
                alt="Next.js logo"
                width={150}
                height={150}
                priority
              />
            </li>
            <li className="client">
              <Image
                className=""
                src="clients/2.svg"
                alt="Next.js logo"
                width={150}
                height={150}
                priority
              />
            </li>
            <li className="client">
              <Image
                className=""
                src="clients/3.svg"
                alt="Next.js logo"
                width={150}
                height={150}
                priority
              />
            </li>
            <li className="client">
              <Image
                className=""
                src="clients/4.svg"
                alt="Next.js logo"
                width={150}
                height={150}
                priority
              />
            </li>
            <li className="client">
              <Image
                className=""
                src="clients/5.svg"
                alt="Next.js logo"
                width={150}
                height={150}
                priority
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
