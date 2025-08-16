"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import LogoSVG from "@/helpers/LogoSVG";
import { Link } from "@heroui/link";
import { navbarlinks } from "@/helpers/NavBarLinks";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HomeTitle from "./HomeTitle";
import Servicii from "./Servicii";
import ClientCarousel from "./Clienti";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
const Home = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize()
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <Navbar isBordered isBlurred>
        <NavbarBrand>
          {windowWidth !== null && (
            <LogoSVG percentage={windowWidth > 764 ? "8" : "25"} />
          )}
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.6, duration: 0.8 }}
            className="text-blue-500 font-bold tracking-wider text-xl md:text-xl"
          >
            DACON
          </motion.h1>
        </NavbarBrand>
        {}
        <NavbarContent justify="center">
          {navbarlinks.map((link) => {
            return (
              <div
                key={link.linkName}
                className="hidden items-center sm:w-full sm:h-full sm:flex sm:items-center "
              >
                <NavbarItem>
                  <Link
                    href={link.hrefLink}
                    className={`${link.classType} font-bold`}
                    type={link.typeLink}
                  >
                    {link.linkName}
                  </Link>
                </NavbarItem>
              </div>
            );
          })}
        </NavbarContent>
      </Navbar>
      <HomeTitle />
      <Servicii />
      <ClientCarousel />
      <Newsletter />
      <Footer />
    </div>
  );
};
export default Home;
