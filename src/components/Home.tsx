import { Mail } from "lucide-react";
import img from '../assets/img2.jpg';
import StarBorder from "../ui/StarBorder";

const Home = () => {
    const handleClick = () => {
        window.open("https://wa.me/237696063115", "_blank");
    };
    
    return (
        <div id="Home" className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10 px-4 md:px-0">
            <div className="flex flex-col w-full md:w-1/2 max-w-2xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left mt-4 md:mt-0">
                    Bonjour, <br /> je suis {" "}
                    <span className="text-accent">Christian MPONDO</span>
                </h1>

                <p className="my-4 text-sm sm:text-base text-center md:text-left leading-relaxed">
                    Développeur Full-Stack passionné, je conçois des applications
                    web modernes, performantes et évolutives. Curieux, rigoureux et
                    toujours en quête d'excellence, j'accorde une attention particulière
                    à l'architecture logicielle, aux bonnes pratiques et à la qualité
                    du code afin de transformer chaque idée en une solution fiable
                    et durable.
                </p>

                <div className="flex justify-center md:justify-start">
                    <StarBorder
                        as="button"
                        onClick={handleClick}
                        className="custom-class cursor-pointer w-full sm:w-auto"
                        color="cyan"
                        speed="2s"
                        thickness={2}
                    >
                        <div className="flex justify-center items-center gap-2 text-gray-900 px-4 py-2">
                            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="text-sm sm:text-base">Contactez-moi</span>
                        </div>
                    </StarBorder>
                </div>
            </div>

            <div className="md:ml-60 mb-8 md:mb-0">
                <img 
                    src={img} 
                    alt="Christian MPONDO" 
                    className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover border-4 sm:border-8 border-accent shadow-xl"
                    style={{
                        borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%"
                    }}
                />
            </div>
        </div>
    );
};

export default Home;