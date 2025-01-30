# Paris Web Agency

Bienvenue sur le site de Paris Web Agency, une agence web spécialisée dans la création de sites internet innovants et performants pour des marques visionnaires. Ce document décrit les différentes sections et fonctionnalités du site, ainsi que son architecture et son design.

## Table des matières

1. [Introduction](#introduction)
2. [Architecture du projet](#architecture-du-projet)
3. [Pages principales](#pages-principales)
    - [Page d'accueil](#page-daccueil)
    - [Page des projets](#page-des-projets)
    - [Page de contact](#page-de-contact)
4. [Composants](#composants)
5. [Technologies utilisées](#technologies-utilisées)
6. [Installation et exécution](#installation-et-exécution)

## Introduction

Paris Web Agency est une agence web basée à Paris, spécialisée dans la création de sites web sur mesure pour des clients variés. Notre site web présente nos dernières créations, permet aux visiteurs de nous contacter et met en avant nos compétences et nos clients.

## Architecture du projet

Le projet est structuré de manière à séparer les différentes fonctionnalités et composants. Voici un aperçu de l'architecture du projet :

```
.   ├── .env
    ├── .gitignore
    ├── .next/
    ├── prisma/
    │   ├── migrations/
    │   ├── schema.prisma
    │   ├── seed.js
    │   └── seed.ts
    ├── public/
    │   └── clients/
    ├── src/
    │   ├── app/
    │   │   ├── actions.ts
    │   │   ├── types.ts
    │   │   ├── contact/
    │   │   │   └── page.tsx
    │   │   └── projects/
    │   │       └── page.tsx
    │   ├── components/
    │   │   ├── 01-atoms/
    │   │   │   └── ButtonSvg.tsx
    │   │   ├── 02-sections/
    │   │   │   ├── ContactForm/
    │   │   │   │   └── ContactForm.tsx
    │   │   │   ├── ProjectsComponents.tsx
    │   │   │   ├── clients.tsx
    │   │   │   └── scroll-list.tsx
    │   └── styles/
    │       └── page.css
    ├── tailwind.config.ts
    ├── tsconfig.json
    └── package.json
```

## Pages principales

### Page d'accueil

La page d'accueil présente l'agence et ses compétences. Elle inclut un slider de compétences, une section de clients et un bouton pour accéder aux projets.

```tsx
import React from 'react';
import ScrollSlider from '@/components/02-sections/scroll-list';
import Clients from '@/components/02-sections/clients';
import Button from '@/components/01-atoms/ButtonSvg';

export default function Home() {
  return (
    <section className='hero flex flex-col items-center'>
      <div className="flex flex-col items-center">
        <h1 className='hero--title text-6xl font-bold mb-4'><span className='text-gold'> Paris </span> Web Agency</h1>
        <ScrollSlider />
        <Button icon="right-arrow" text="Our Projects" href="/projects"/>
        <p className="quote text-white text-3xl font-bold mt-8">"Elite Digital Crafting for Visionary Brands."</p>
      </div>
      <Clients />
    </section>
  );
}
```

### Page des projets

La page des projets affiche les dernières créations de l'agence. Elle utilise le composant `ProjectsComponents` pour lister les projets.

```tsx
import { getProjects } from '@/app/actions';
import { Project } from '@/app/types';
import ProjectsComponents from '@/components/02-sections/ProjectsComponents';

async function Projects() {
    const projects = await getProjects();
    return (
        <div className="container my-8 flex flex-col gap-8">
            <h1 className='text-center uppercase hero--title text-4xl font-bold'>
                Our latest <span className='text-gold'>creations</span>
            </h1>
            <ProjectsComponents projects={projects as Project[]} />
        </div>
    );
}

export default Projects;
```

### Page de contact

La page de contact permet aux visiteurs de nous envoyer un message via un formulaire de contact.

```tsx
import ContactForm from '../../components/02-sections/ContactForm/ContactForm';

export default function ContactPage() {
  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-6xl font-bold mb-4">Tell us about your <span className="text-gold">project</span></h1>
      <ContactForm />
    </div>
  );
}
```

## Composants

### ScrollSlider
Le composant `ScrollSlider` affiche un slider des compétences de l'agence.

### Clients
Le composant `Clients` affiche une liste des clients de l'agence.

### ProjectsComponents
Le composant `ProjectsComponents` affiche une liste des projets réalisés par l'agence.

### ContactForm
Le composant `ContactForm` permet aux visiteurs de nous envoyer un message via un formulaire.

## Technologies utilisées

- **Next.js** : Framework React pour le rendu côté serveur et la génération de sites statiques.
- **React** : Bibliothèque JavaScript pour la création d'interfaces utilisateur.
- **Tailwind CSS** : Framework CSS utilitaire pour un design rapide et réactif.
- **Prisma** : ORM pour interagir avec la base de données.
- **TypeScript** : Superset de JavaScript pour un typage statique.

## Installation et exécution

Clonez le dépôt :
```sh
git clone https://github.com/RenaudBrevin/next-ssr-agency.git
```

Installez les dépendances :
```sh
yarn install
```

Configurez les variables d'environnement en créant un fichier `.env` à la racine du projet.

Exécutez les migrations Prisma pour configurer la base de données :
```sh
yarn prisma migrate dev
```

Lancez le serveur de développement :
```sh
yarn dev
```

Le site sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).



## Perfomances du site

### Page d'accueil

![alt text](https://next-ssr-agency-lqrt.vercel.app/readMe/perf-home.png)


### Page projets

![alt text](https://next-ssr-agency-lqrt.vercel.app/readMe/perf-projects.png)


### Page details projet

![alt text](https://next-ssr-agency-lqrt.vercel.app/readMe/perf-project.png)


### Page contact

![alt text](https://next-ssr-agency-lqrt.vercel.app/readMe/perf-contact.png)