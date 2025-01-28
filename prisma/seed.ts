import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.project.create({
        data: {
            title: "Application de gestion de tâches",
            description: "Une application full-stack pour gérer les tâches quotidiennes.",
            projectUrl: "https://www.example.com/project/task-manager",
            projectDetails: {
                create: {
                    context: "Un projet pour une gestion efficace des tâches personnelles.",
                    objectives: "Permettre aux utilisateurs de créer, modifier et supprimer des tâches.",
                    technologies: ["React", "Node.js", "PostgreSQL", "Prisma"],
                    results: "Les utilisateurs peuvent gérer leurs tâches avec une interface simple et claire.",
                    imagesUrl: ["https://www.example.com/images/task-manager.png"]
                }
            }
        }
    })

    await prisma.project.create({
        data: {
            title: "Site web de commerce électronique",
            description: "Un site pour acheter des produits en ligne.",
            projectUrl: "https://www.example.com/project/ecommerce-site",
            projectDetails: {
                create: {
                    context: "Création d'un site de e-commerce pour une boutique locale.",
                    objectives: "Permettre l'achat de produits en ligne, gérer les paiements et les stocks.",
                    technologies: ["Next.js", "Stripe", "MongoDB", "Prisma"],
                    results: "Le site permet aux utilisateurs de parcourir et acheter des produits avec un système de paiement intégré.",
                    imagesUrl: ["https://www.example.com/images/ecommerce-site.png"]
                }
            }
        }
    })

    await prisma.project.create({
        data: {
            title: "Portfolio personnel",
            description: "Un portfolio pour présenter des projets web et des compétences en développement.",
            projectUrl: "https://www.example.com/project/personal-portfolio",
            projectDetails: {
                create: {
                    context: "Créer un site web pour présenter mes projets et compétences.",
                    objectives: "Permettre aux visiteurs de découvrir mes projets et de me contacter facilement.",
                    technologies: ["HTML", "CSS", "JavaScript", "React"],
                    results: "Un portfolio interactif avec une section de contact et un aperçu des projets réalisés.",
                    imagesUrl: ["https://www.example.com/images/portfolio.png"]
                }
            }
        }
    })
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
