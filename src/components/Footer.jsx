import React from "react";
import developerlogo from "../assets/Ik developers.svg";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <div class="py-14 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:gap-8 text-slate-500">
          <div class="text-left">
            <div data-aos="fade-up" data-aos-duration="800">
              <img
                width="138"
                height="32"
                class="h-8"
                src={developerlogo}
                alt="ContentStudio"
              />
              <p class="text-justify font-light py-5 sm:space-x-0">
                We believe in creating meaningful digital experiences through
                creativity, innovation, and technology. Our team focuses on
                delivering high-quality solutions that help businesses grow,
                solve real-world challenges, and build lasting connections with
                their customers.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            class=" w-[150px] lg:ml-40 md:ml-10 sm:ml-30"
          >
            <h3 class="font-semibold mb-4 ml-4">Links</h3>
            <ul class="font-light text-sm">
              <li className="my-3">
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>

              <li className="my-3">
                <Link to="services" smooth={true} duration={500}>
                  Services
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="caseStudies"
                  smooth={true}
                  duration={500}
                  offset={-100}
                >
                  Case Studies
                </Link>
              </li>
              <li className="my-3">
                <Link to="brands" smooth={true} duration={500}>
                  Testimonials
                </Link>
              </li>
              <li className="my-3">
                <Link to="timeLine" smooth={true} duration={500} offset={-100}>
                  How it Works
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="developmentApproach"
                  smooth={true}
                  duration={500}
                  offset={-100}
                >
                  Our Approach
                </Link>
              </li>
              <li className="my-3">
                <Link to="hireSection" smooth={true} duration={500}>
                  Hire Us
                </Link>
              </li>
            </ul>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            class="w-full lg:ml-40 md:ml-10 sm:ml-30"
          >
            <h3 class="font-semibold mb-4">Contact Us</h3>
            <p>
              Have a project in mind or need assistance? Get in touch with us.
              We'd love to hear from you and help bring your ideas to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
