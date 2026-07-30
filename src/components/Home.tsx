import { Mail } from "lucide-react";
import img from '../assets/img2.jpg';
import StarBorder from "../ui/StarBorder";

const Home = () => {
    const handleClick = () => {
        window.open("https://wa.me/237696063115", "_blank");
    };
    return (
        <div id="Home" className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">

            <div className="flex flex-col ">
                <h1 className="text-5xl md:text-5xl font-bold text-center md:text-left mt-4 md:mt-0">
                    Bonjour , <br /> je suis {" "}
                    <span className="text-accent">Mc-Soltice</span>
                </h1>

                <p className="my-4 text-md text-center md:text-left">
  Développeur Full-Stack passionné, je conçois des applications
  web modernes, performantes et évolutives. Curieux, rigoureux et
  toujours en quête d'excellence, j'accorde une attention particulière
  à l'architecture logicielle, aux bonnes pratiques et à la qualité
  du code afin de transformer chaque idée en une solution fiable
  et durable.
</p>

                <StarBorder
                    as="button"
                    onClick={handleClick}
                    className="custom-class cursor-pointer"
                    color="cyan"
                    speed="2s"
                    thickness={2}
                >
                    <div className="flex justify-center items-center gap-2 text-gray-900">
                        <Mail className="w-5 h-5" />
                        <span>Contactez-moi</span>
                    </div>
                </StarBorder>


            </div>

            <div className="md:ml-60">
                <img src={img} alt="" className="w-96 h-96 object-cover border-8 border-accent shadow-xl"
                    style={{
                        borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%"
                    }}
                />
            </div>
        </div>
    )
}

export default Home
