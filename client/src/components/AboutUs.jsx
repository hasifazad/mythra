import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AboutUs() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0b0d18] via-[#0f1224] to-[#0b0d18] text-zinc-100">
      {<Navbar />}

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-[#F5C77A] via-purple-400 to-[#6C5CE7] bg-clip-text text-transparent">
          About Mythra
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto mb-10 text-lg sm:text-xl">
          Mythra is not just a tracker, it's a story journal for your life.
          <p>Relive your favorite stories anytime.</p>
        </p>
      </section>

      {/* OUR STORY SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image / Visual */}
        <div className="h-64 md:h-96 bg-gradient-to-br from-purple-700/40 to-indigo-700/40 rounded-3xl flex items-center justify-center text-zinc-300 text-xl font-semibold shadow-lg">
          Image / Illustration
        </div>

        {/* Text */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-[#F5C77A] via-purple-400 to-[#6C5CE7] bg-clip-text text-transparent">
            Our Story
          </h2>
          <p className="text-zinc-400 text-lg">
            Mythra was created for people who love stories—whether on screen or on the page. We wanted a platform where you could track every movie you watch and every book you read, all in one beautiful place.
          </p>
          <p className="text-zinc-400 text-lg">
            With Mythra, your experiences become memories. Discover new favorites, rate your journey, and keep a personal record of the stories that inspire you.
          </p>
        </div>
      </section>

      {/* FOOTER */}
     {<Footer />}
    </div>
  );
}

export default AboutUs;
