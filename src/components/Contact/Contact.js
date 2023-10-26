import React from "react";
import BusinessCard from "./BusinessCard";
import ContactForm from "./ContactForm";
import HeaderForRoute from "../shared/HeaderForRoute";
import Footer from "../Home/Footer";

function Contact() {
  return (
    <div>
      <HeaderForRoute></HeaderForRoute>
      <div class="bg-bcgd bg-cover py-28">
        <div class="container flex justify-center items-center text-center mx-auto mt-7">
          <h2 class="h4 text-white">
          "We're here to assist you. Send us a message, and we'll be in touch shortly. Your questions and feedback are important to us."
          </h2>
        </div>

        <div class="min-h-screen flex flex-col lg:flex-row">
          <div class="lg:w-1/2 mt-16 lg:mt-0">
            <div class="px-4">
              <div class="mb-8">
                <BusinessCard />
              </div>
            </div>
          </div>

          <div class="mt-4 lg:w-1/2">
            <div class="min-h-screen">
              <div class="flex flex-col justify-center px-4 lg:px-16">
                <div>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Contact;
