import React from 'react'
import {Link} from 'react-router-dom'
import { Typography } from "@material-tailwind/react";
import { BiSolidCameraMovie } from "react-icons/bi";

 
const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="pt-6 bg-neutral-content text-neutral relative w-full"> {/* Reduced from pt-8 to pt-6 */}
    <div className="mx-auto w-full max-w-7xl px-6"> {/* Reduced padding from px-8 to px-6 */}
        <div className="grid grid-cols-1 justify-between gap-3 md:grid-cols-2"> {/* Reduced gap from gap-4 to gap-3 */}
            <Typography variant="h5" className="text-2xl mb-2 flex items-center gap-1"> {/* Reduced text-3xl to text-2xl and gap-2 to gap-1 */}
                <BiSolidCameraMovie className="text-2xl" /> WATCH {/* Reduced icon size */}
            </Typography>
            <div className="grid grid-cols-2 justify-between gap-3">
                <div>
                    <Typography variant="small" color="blue-gray" className="text-lg mb-1 font-medium opacity-40"> {/* Reduced text-xl to text-lg */}
                        Company
                    </Typography>
                    <ul className="space-y-1"> {/* Added space-y-1 for consistent small spacing */}
                        <li>
                            <Link to="./Contact" className="hover:text-info py-0.5 font-normal transition-colors text-neutral text-sm"> {/* Reduced to py-0.5 and added text-sm */}
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="./About" className="hover:text-info py-0.5 font-normal transition-colors text-neutral text-sm">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Typography variant="small" color="blue-gray" className="text-lg mb-1 font-medium opacity-40">
                        Legal
                    </Typography>
                    <ul className="space-y-1">
                        <li>
                            <Link to="#" className="hover:text-info py-0.5 font-normal transition-colors text-neutral text-sm">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-info py-0.5 font-normal transition-colors text-neutral text-sm">
                                Terms of Service
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-info py-0.5 font-normal transition-colors text-neutral text-sm">
                                Cookie Policy
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="mt-4 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-3 md:flex-row md:justify-between"> {/* Reduced mt-6 to mt-4 and py-4 to py-3 */}
            <Typography
                variant="small"
                className="mb-1 text-center font-normal text-blue-gray-900 md:mb-0 text-sm"> {/* Reduced mb-2 to mb-1 and added text-sm */}
            
                &copy; {currentYear} <a href="https://material-tailwind.com/">Material Tailwind</a>. All Rights Reserved.
            </Typography>
            <div className="flex gap-3 text-blue-gray-900 sm:justify-center"> {/* Reduced gap-4 to gap-3 */}
                {/* Social icons - consider reducing their size if needed */}
                <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> {/* Reduced h-5/w-5 to h-4/w-4 */}
                        {/* SVG path remains the same */}
                    </svg>
                </Typography>
                {/* Repeat size reduction for other social icons */}
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer