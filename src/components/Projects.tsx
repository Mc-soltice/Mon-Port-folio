import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';
import { Github, Video } from "lucide-react";
import ShinyText from "../ui/ShinyText";
import AnimatedContent from '../ui/AnimatedContent';

const projects = [
    {
        id: 1,
        title: 'ERP pour la gestion des agnets d\'entretien de Umbrella Industrial Services',
        description: 'Une application web complète pour gérer: les candidature, les agents d\'entretien, les plannings, les sites et les rapports d\'intervention, la comptabilité des jour de travail, la gestion des depenses .',
        technologies: ['React', 'TypeScript', 'Tailwind CSS','DaisyUI','Laravel'],
        demoLink: '#',
        repoLink: 'https://github.com/Mc-soltice/umbrella_erp_front',
        image: img1,
    },
    {
        id: 2,
        title: 'Gestion des revenus et dépenses',
        description: 'C\'est uene application web complète pour controler  les flus de revenus et dépenses personnelles, offrant des fonctionnalités de de génération de ratio.',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS','DaisyUI', 'Django-DRF'],
        demoLink: '#',
        repoLink: 'https://github.com/Mc-soltice/Gestion-des-transactions.git',
        image: img2,
    },
    {
        id: 3,
        title: 'Portfolio interactif',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        demoLink: '#',
        repoLink: '#',
        image: img3,
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

            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <AnimatedContent
                        key={project.id}
                        distance={50}
                        direction="vertical"
                        reverse={true} // Du bas vers le haut
                        duration={2} // 2 secondes
                        delay={index * 0.2} // Délai successif entre chaque projet
                        scale={0.6} // Commence à 60%
                        initialOpacity={0.7}
                        animateOpacity={true}
                        ease="power3.out"
                    >
                        <div className="bg-base-300 p-5 h-fit rounded-xl shadow-lg">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full rounded-xl h-56 object-cover"
                            />
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
                                <a className="btn btn-accent w-2/3" href={project.demoLink}>
                                    Demo
                                    <Video className="w-4" />
                                </a>
                                <a className="btn btn-neutral w-1/3 ml-2" href={project.repoLink}>
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