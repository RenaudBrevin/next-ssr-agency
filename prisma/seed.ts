import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.project.create({
        data: {
            title: "Beauterra - Refonte site e-commerce",
            description: "Beauterra est un site e-commerce pour de la vente B2B vers des pharmacies. Une partie du site est une vitrine B2C pour présenter ses produits au grand public et une seconde partie gère la prise de commande pour les pharmacies cliente.",
            projectUrl: "https://beauterra.com/",
            projectDetails: {
                create: {
                    context: "Beauterra souhaitait refondre son site afin d'améliorer l'accessibilité et l'expérience utilisateur en général sur son site.",
                    objectives: "L'objectif de cette refonte est de données aux equipe marketing la possibilité de personnaliser chaque page de leur site et de pouvoir gérer les commandes de façon simplifé avec un design élégant et en accord avec leur charte graphique.",
                    technologies: ["Wordpress", "WooCommerce", "Elementor", "Figma"],
                    results: "Le nombre de commandes a augmenté de 30% depuis la refonte du site. Les visites de particuliers pour se renseigner sur les produits ont augmenté de 20%.",
                    imagesUrl: ["beauterra.webp"],
                    categories: ["e-commerce", "refonte"]
                }
            }
        }
    })

    await prisma.project.create({
        data: {
            title: "MDBA - Refonte site principal",
            description: "Leader européen de production de missiles, MDBA souhaitait refondre son site principal pour le rendre plus accessible et optimisé pour le référencement, tout en mettant en avant ses produits et innovations.",
            projectUrl: "https://www.mbda-systems.com/",
            projectDetails: {
                create: {
                    context: "Le site devait être modernisé pour améliorer l'accessibilité et le référencement, tout en valorisant les produits et innovations de MBDA.",
                    objectives: "Offrir une plateforme moderne et dynamique répondant aux standards actuels d'accessibilité et de SEO.",
                    technologies: ["Twig", "Drupal", "Tailwind", "Figma"],
                    results: "Depuis la refonte, le trafic a augmenté de 40%, et les visites de particuliers intéressés par les produits ont progressé de 20%.",
                    imagesUrl: ["MBDA.png"],
                    categories: ["industrie", "refonte"]
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
                    imagesUrl: ["meteogaz.webp"],
                    categories: ["industrie", "landing page"]
                }
            }
        }
    })

    await prisma.project.create({
        data: {
            title: "Coque de Nacre - site e-commerce",
            description: "Coque de Nacre est une boutique en ligne spécialisée dans la vente de bijoux en nacre. Le site propose une large gamme de bijoux pour femmes et hommes.",
            projectUrl: "https://www.bijouxcn.com/Page.aspx",
            projectDetails: {
                create: {
                    context: "Coque de Nacre souhaitait moderniser son site e-commerce pour améliorer l'expérience utilisateur et augmenter les ventes.",
                    objectives: "L'objectif est de moderniser le site pour le rendre plus attractif et plus facile à utiliser pour les visiteurs.",
                    technologies: ["Twig", "Tailwind", "Client Relou"],
                    results: "Le site a bénéficié d'une hausse de 30% des ventes après la refonte.",
                    imagesUrl: ["CDN.png"],
                    categories: ["e-commerce"]
                }
            }
        }
    })

    await prisma.project.create({
        data: {
            title: "Fidesio - Refonte site de l'agence",
            description: "Fidesio est une agence web. Le site de l'agence a été refondu pour mettre en avant les compétences de l'équipe et les projets réalisés.",
            projectUrl: "https://www.bijouxcn.com/Page.aspx",
            projectDetails: {
                create: {
                    context: "Fidesio souhaitait moderniser son site pour accroître sa visibilité.",
                    objectives: "Un design avant-gardiste et une navigation intuitive pour mettre en avant les compétences de l'équipe et les projets réalisés.",
                    technologies: ["Twig", "Tailwind"],
                    results: "Le site a bénéficié d'une hausse de 30% de clients après la refonte.",
                    imagesUrl: ["fidesio.png"],
                    categories: ["agence", "refonte"]
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
