'use client'
import Navbar from './home/partials/navbar';
import ServiceProcess from './home/partials/service-process';
import Desc from './home/partials/desc';
import Projects from './home/partials/projects';
import Testimonials from './home/partials/testimonials';
import ContactForm from './home/partials/contact-form';
import Hero from './home/partials/hero';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Desc />
      <Projects />
      <Testimonials />
      <ServiceProcess />
      <ContactForm/>
    </div>
  );
}
