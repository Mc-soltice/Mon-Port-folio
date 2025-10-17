import { Container } from "lucide-react"

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex justify-center md:justify-between items-center p-4">
                <a href="#"
                    className="flex items-center font-bold text-3xl md:text-xl"
                >
                    <Container className="mr-2" />
                    Mc
                    <span className="text-accent">-Soltice</span>
                </a>

                <ul className="hidden md:flex space-x-4">
                    <li>
                        <a href="#Home"
                            className="btn btn-sm btn-ghost"
                        >
                            Accueil
                        </a>
                    </li>
                    <li>
                        <a href="#About"
                            className="btn btn-sm btn-ghost"
                        >
                            À propos
                        </a>
                    </li>

                    <li>
                        <a href="#Experiences"
                            className="btn btn-sm btn-ghost"
                        >
                            Mes expériences
                        </a>
                    </li>

                    <li>
                        <a href="#Projects"
                            className="btn btn-sm btn-ghost"
                        >
                            Mes projets
                        </a>
                    </li>
                </ul>
            </div>


  



        </nav>
    )
}

export default Navbar