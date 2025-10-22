import { Mail } from "lucide-react"
import img from '../assets/img2.jpg'
import StarBorder from "../ui/StarBorder"

const Home = () => {
    return (
        <div id="Home" className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">

            <div className="flex flex-col ">
                <h1 className="text-5xl md:text-5xl font-bold text-center md:text-left mt-4 md:mt-0">
                    Bonjour , <br /> je suis {" "}
                    <span className="text-accent">Mc-Soltice</span>
                </h1>

                <p className="my-4 text-md text-center md:text-left">
                    Je suis un développeur fullstack <br />
                    avec 5 ans d'expérience, utilisant React <br /> et Node.js. Contactez-moi si vous avez besoin
                    de mes services.
                </p>

                <StarBorder
                    as="button"
                    className="custom-class"
                    color="cyan"
                    speed="2s"
                    thickness={2}
                >
                    <div className="flex justify-center items-center gap-2">

                        <a
                            href="https://wa.me/237696063115"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-green-600 hover:underline"
                        >
                            <Mail className="w-5 h-5" />
                            Contacter sur WhatsApp
                        </a>

                        Contactez-moi
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
