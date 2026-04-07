import { Github, Video } from "lucide-react";
import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import AnimatedContent from '../ui/AnimatedContent';
import ShinyText from "../ui/ShinyText";
import FramerAutoplayCarousel from "./Miniatures";

const projects = [
    {
        id: 1,
        folderPath: 'projects/atoum-ra', // Utilise folderPath pour charger automatiquement les images
        title: 'Atoum-ra Mbiangasi forever',
        description: 'Site E-commerce pour Atoum-ra : Client et Administrateur.',
        technologies: ['NextJS', 'TypeScript', 'Tailwind CSS', 'Laravel'],
        demoLink: '#',
        repoLink: 'https://github.com/Mc-soltice/Atoum-Frontend',
    },
    {
        id: 2,
        folderPath: 'projects/roilux', // Utilise folderPath pour charger automatiquement les images
        title: 'Roilux',
        description: 'Landing page pour Roilux dans le secteur immobilier.',
        technologies: ['NextJS', 'TypeScript', 'Tailwind CSS'],
        demoLink: '#',
        repoLink: 'https://github.com/Mc-soltice/Rolux-landing',
    },
    {
        id: 3,
        title: 'ERP pour la gestion des agents d\'entretien',
        description: 'Une ERP sur mesure pour gérer: les candidature, les agents d\'entretien, les plannings, les sites et les rapports d\'intervention, la gestion des depenses: front React, backend .',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'DaisyUI', 'Laravel'],
        demoLink: '#',
        repoLink: 'https://github.com/Mc-soltice/umbrella_erp_front',
        image: img1,
    },
    {
        id: 4,
        title: 'Gestion des revenus et dépenses',
        description: 'C\'est une application web complète pour controler les flux de revenus et dépenses personnelles, offrant des fonctionnalités de génération de ratio.',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'DaisyUI', 'Django-DRF'],
        demoLink: '#',
        repoLink: 'https://github.com/Mc-soltice/Gestion-des-transactions.git',
        image: img2,
    },
];

const Projects = () => {
    return (
        <div className="mt-10" id="Projects">
            <ShinyText
                text="Mes Projets"
                disabled={false}
                speed={2.5}
            />

            <div className="grid md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <AnimatedContent
                        key={project.id}
                        distance={50}
                        direction="vertical"
                        reverse={true}
                        duration={2}
                        delay={index * 0.2}
                        scale={0.6}
                        initialOpacity={0.7}
                        animateOpacity={true}
                        ease="power3.out"
                    >
                        <div className="bg-base-300 p-4 rounded-xl shadow-lg">
                            {project.folderPath ? (
                                <FramerAutoplayCarousel
                                    folderPath={project.folderPath}
                                    duration={4000}
                                />
                            ) : (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full rounded-xl h-56 object-cover"
                                />
                            )}

                            <div>
                                <h1 className="my-2 font-bold">
                                    {project.title}
                                </h1>
                                <p className="text-sm">{project.description}</p>
                            </div>
                            <div className="flex flex-wrap gap-2 my-3">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="badge badge-accent badge-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex">
                                <a className="btn btn-accent w-2/3" href={project.demoLink} target="_blank">
                                    Demo
                                    <Video className="w-4" />
                                </a>
                                <a className="btn btn-neutral w-1/3 ml-2" href={project.repoLink} target="_blank">
                                    <Github className="w-4" />
                                </a>
                            </div>
                        </div>
                    </AnimatedContent>
                ))}
            </div>

        </div>
    )
}

export default Projects