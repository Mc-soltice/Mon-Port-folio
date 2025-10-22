import img from '../assets/img.jpg'
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";
import ShinyText from "../ui/ShinyText";
import AnimatedContent from '../ui/AnimatedContent';

const aboutSections = [
    {
        id: 1,
        title: "Développeur Frontend",
        description: "Je suis un développeur frontend avec une expérience grandissante.",
        icon: <LetterText className="text-accent scale-150" />,
    },
    {
        id: 2,
        title: "Développeur Backend",
        description: "Je maîtrise les bases du développement backend pour créer des APIs robustes.",
        icon: <CalendarSync className="text-accent scale-150" />,
    },
    {
        id: 3,
        title: "Developpeur Mobile",
        description: "Creer des applications mobiles performantes et réactives sous flutter ",
        icon: <Paintbrush className="text-accent scale-150" />,
    },
    {
        id: 4,
        title: "Passionné par l'UI/UX",
        description: "Créer des interfaces utilisateur attrayantes et fonctionnelles est ma priorité.",
        icon: <Paintbrush className="text-accent scale-150" />,
    },
];

const About = () => {
    return (
        <div className="bg-base-300 p-10 mb-10" id="About">
            <ShinyText
                text="À propos"
                disabled={false}
                speed={2.5}
            />
            <div className="md:h-screen flex justify-center items-center">
                <div className="hidden md:block">
                    <AnimatedContent
                        distance={50}
                        direction="vertical"
                        reverse={true}
                        duration={2}
                        scale={0.6}
                        delay={0.2}
                    >
                        <img 
                            src={img} 
                            alt="" 
                            className="w-96 object-cover rounded-xl"
                        />
                    </AnimatedContent>
                </div>

                <div className="md:ml-4 space-y-4">
                    {aboutSections.map((section, index) => (
                        <AnimatedContent
                            key={section.id}
                            distance={50}
                            direction="vertical"
                            reverse={true}
                            duration={2}
                            scale={0.6}
                            delay={0.1 * (index + 1)} // Délai progressif pour chaque section
                        >
                            <div 
                                className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl"
                            >
                                <div className="mb-2 md:mb-0">
                                    {section.icon}
                                </div>
                                <div className="md:ml-4 text-center md:text-left">
                                    <h2 className="text-xl font-bold mb-1">
                                        {section.title}
                                    </h2>
                                    <p className="text-sm">
                                        {section.description}
                                    </p>
                                </div>
                            </div>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About