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
  return (
    <>
      <Navbar isBordered className="bg-transparent">
        <NavbarContent justify="center">
          <NavbarItem>
            <motion.h1
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-blue-500 font-bold tracking-widest text-3xl md:text-3xl"
            >
              DACON
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-blue-500 font-sans tracking-wide text-lg md:text-md"
            >
              SHINE BRIGHT
            </motion.p>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          {navbarlinks.map((link) => {
            return (
              <NavbarItem>
                <div
                  key={link.linkName}
                  className="hidden items-center sm:w-full sm:h-full sm:flex sm:items-center "
                >
                  <Link
                    href={link.hrefLink}
                    className={`${link.classType} font-bold`}
                    type={link.typeLink}
                  >
                    {link.linkName}
                  </Link>
                </div>
              </NavbarItem>
            );
          })}
        </NavbarContent>
      </Navbar>
      <HomeTitle />
      <Servicii />
      <ClientCarousel />
      <Newsletter />
      <Footer />
    </>
  );
};
export default Home;
