import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col items-center justify-center lg:flex-row lg:justify-normal lg:relative lg:overflow-x-hidden">
        <article className="flex flex-col items-center text-center gap-4 px-2 md:gap-6 lg:items-start lg:text-start lg:ml-28">
          <p className="text-xl text-wrap md:text-3xl lg:text-2xl">
            Un collectif de jeunes développeurs qui a soif d&apos;experiences
          </p>
          <p className="text-xl text-wrap md:text-3xl lg:text-2xl">
            Touchez un nouveau public avec
            <span className="font-bold "> votre propre site internet !</span>
          </p>
          <Link
            to="/contact"
            aria-label="contact"
            className="contact-btn text-lg font-bold flex justify-center w-80 lg:inline"
          >
            <span className="marquee" aria-hidden>
              Contactez-nous
            </span>
          </Link>
        </article>
        <img src="src\assets\images\mockup.png" className="lg:absolute lg:left-2/3" alt="image d'un écran d'ordinateur" />
      </section>
  )
}
