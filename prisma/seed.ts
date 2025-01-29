import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.project.create({
        data: {
            title: "Beauetrra - Refonte site e-commerce",
            description: "Beauterra est un site e-commerce pour de la vente B2B vers des pharmacies. Une partie du site est une vitrine B2C pour présenter ses produits au grand public et une seconde partie gère la prise de commande pour les pharmacies cliente.",
            projectUrl: "https://beauterra.com/",
            projectDetails: {
                create: {
                    context: "Beauterra souhaitait refondre son site afin d'améliorer l'accessibilité et l'expérience utilisateur en général sur son site.",
                    objectives: "L'objectif de cette refonte est de données aux equipe marketing la possibilité de personnaliser chaque page de leur site et de pouvoir gérer les commandes de façon simplifé avec un design élégant et en accord avec leur charte graphique.",
                    technologies: ["Wordpress", "WooCommerce", "Elementor", "Figma"],
                    results: "Le nombre de commandes a augmenté de 30% depuis la refonte du site. Les visites de particuliers pour se renseigner sur les produits ont augmenté de 20%.",
                    imagesUrl: ["beauterra.webp"],
                }
            }
        }
    })

    await prisma.project.create({
        data: {
            title: "Gamme Meteogaz - Landing page",
            description: "Landing page créée pour mettre en avant les produits de la gamme Meteogaz en prévision d'une publicité télévisée.",
            projectUrl: "https://gamme-meteogaz.fr/",
            projectDetails: {
                create: {
                    context: "Meteogaz souhaitait une page dédiée pour présenter sa gamme de produits et capter l'attention des visiteurs après la diffusion de sa publicité TV.",
                    objectives: "L'objectif est d'offrir une vitrine claire et percutante, optimisée pour une navigation rapide et une compatibilité mobile parfaite.",
                    technologies: ["Wordpress", "Elementor", "Figma", "Matomo"],
                    results: "Le site a bénéficié d'une forte hausse de trafic après la campagne TV, plus de 20 000 visites sur le site.",
                    imagesUrl: ["meteogaz.webp"]
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
