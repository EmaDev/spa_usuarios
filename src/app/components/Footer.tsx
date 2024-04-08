import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { Link } from "@nextui-org/react";
export const Footer = () => {

    const calcularFecha = (): string => {
        return `© Copyright ${new Date().getFullYear()}. Todos los derechos reservados.`;
    }
    return (
        <footer className="w-full bg-accent text-textPrimary">
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1.5px] w-full" />
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="sm:col-span-2 space-y-2 text-sm">
                        <p className="text-base font-bold tracking-wide">Secciones</p>
                        <ul>
                            
                        </ul>
                    </div>
                    <div className="space-y-2 text-sm">
                        <p className="text-base font-bold tracking-wide">Contacto</p>
                        <div className="flex">
                            <p className="mr-1 text-textSecondary">Telefono:</p>
                            <a href="tel:850-123-5021" aria-label="Our phone" title="Our phone" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">+54 11-6434-0772</a>
                        </div>
                        <div className="flex">
                            <p className="mr-1 text-textSecondary">Email:</p>
                            <a href="mailto:info@lorem.mail" aria-label="Our email" title="Our email" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">emanuelcisterna@outlook.com</a>
                        </div>
                        <div className="flex">
                            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" aria-label="Our address" title="Our address" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                                San justo, Buenos Aires
                            </a>
                        </div>
                    </div>
                    <div>
                        <span className="text-base font-bold tracking-wide">Redes</span>
                        <div className="flex items-center mt-1 space-x-3">
                            <a href={""} target="_blank" className="transition-colors duration-300 hover:text-deep-purple-accent-400">
                                <FaGithub className="text-3xl" />
                            </a>
                            <a href={""} className="transition-colors duration-300 hover:text-deep-purple-accent-400">
                                <FaLinkedin className="text-3xl" />
                            </a>
                        </div>
                        <p className="mt-4 text-sm text-textSecondary">
                            Podes encontrame en estas redes socilales.
                        </p>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />
                <div className="flex flex-col-reverse justify-between pt-5 pb-10 lg:flex-row">
                    <p className="text-sm">
                        {calcularFecha()}
                    </p>
                </div>
            </div>
        </footer>
    )
}