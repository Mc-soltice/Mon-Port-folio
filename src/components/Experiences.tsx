import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgPYTHON from "../assets/techno/python.png";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgLARAVEL from "../assets/techno/laravel.png";
import glotelho from "../assets/companies/glotelho.png";
import umbrella from "../assets/companies/umbrella.png";
import ShinyText from "../ui/ShinyText";
import AnimatedContent from "../ui/AnimatedContent";

const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 4, name: "React", image: imgREACT },
    { id: 8, name: "Next.js", image: imgNEXT },
    { id: 9, name: "Laravel", image: imgLARAVEL },
    { id: 5, name: "Node.js", image: imgNODE },
    { id: 7, name: "Python", image: imgPYTHON },
];

const experiences = [
    {
        id: 1,
        role: "Fullstack Developer",
        company: "Umbrella Industrial Services",
        period: "Juillet 2025 - Novembre 2025",
        description: [
            "Création d'une plateforme interne de collaboration pour les équipes.",
            "Mise en place d'une architecture scalable et optimisée.",
        ],
        image: umbrella,
    },
    {
        id: 2,
        role: "Fullstack Developer",
        company: "Umbrella Industrial Services",
        period: "Mais 2025 - Juillet 2025",
        description: [
            "Développement et mise en production du site web de Umbrella Industrial Services.",
            "Collaboration avec l'équipe de design pour améliorer l'UX/UI.",
        ],
        image: umbrella,
    },
    {
        id: 3,
        role: "Stagiaire Backend Developer",
        company: "Glotelho CM",
        period: "Aout 2024 - Oct 2024",
        description: [
            "Développement d'un backend laravel pour une machine ATM (Automated Teller Machine).",
            "Implémentation de l'architecture S.O.L.I.D.S pour une meilleure maintenabilité du code.",
        ],
        image: glotelho,
    },
];

const Experiences = () => {
    return (
        <div id="Experiences">
            <AnimatedContent
                distance={50}
                duration={0.8}
                delay={0.1}
            >
                <ShinyText
                    text="Experiences"
                    disabled={false}
                    speed={2.5}
                />
            </AnimatedContent>
            
            <div className="flex flex-col-reverse md:flex-row justify-center items-center ">
                {/* Section Compétences avec animation */}
                <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
                    {skills.map((skill, index) => (
                        <AnimatedContent
                            key={skill.id}
                            distance={30}
                            direction="vertical"
                            reverse={true}
                            duration={0.6}
                            delay={index * 0.1}
                            scale={0.6}
                            initialOpacity={0.7}
                        >
                            <div className="flex justify-center items-center flex-col">
                                <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                                    <img 
                                        src={skill.image} 
                                        alt={skill.name}
                                        className="object-cover rounded-full h-full w-full"
                                    />
                                </div>
                                <span className="mt-2 text-sm">{skill.name}</span>
                            </div>
                        </AnimatedContent>
                    ))}
                </div>

                {/* Section Expériences avec animation séquentielle */}
                <div className="md:ml-4 flex flex-col space-y-4">
                    {experiences.map((experience, index) => (
                        <AnimatedContent
                            key={experience.id}
                            distance={80}
                            direction="vertical"
                            reverse={true}
                            duration={0.8}
                            delay={index * 0.2}
                            scale={0.6}
                            initialOpacity={0}
                        >
                            <div className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg">
                                <div className="flex items-center">
                                    <img
                                        src={experience.image}
                                        alt={experience.company}
                                        className="object-cover h-10 w-10"
                                    />
                                    <div className="ml-4">
                                        <h1 className="text-xl text-accent font-bold">
                                            {experience.role} , {experience.company}
                                        </h1>
                                        <span className="text-sm">{experience.period}</span>
                                    </div>
                                </div>
                                <ul className="list-disc ml-16 mt-2">
                                    {experience.description.map((desc, descIndex) => (
                                        <li key={descIndex}>
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experiences;