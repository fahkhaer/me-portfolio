'use client';
import Navbar from './home/partials/navbar';
import ServiceProcess from './home/partials/service-process';
import Desc from './home/partials/desc';
import Projects from './home/partials/projects';
import Skills from './home/partials/skills';
import Clients from './home/partials/clients';
import Strength from './home/partials/strength';
import { Footer } from './home/partials/footer';
import Testi from './home/partials/testi';
import ContactForm from './home/partials/contact-form';
import Hero from './home/partials/hero';
import Services from './home/partials/services';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Desc />
      <Services />
      <Skills />
      <Strength />  
      <Projects />
      <Clients />
      <Testi />
      <ServiceProcess />
      <ContactForm />
      <Footer />
    </div>
  );
}
