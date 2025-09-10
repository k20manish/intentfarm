import { ThumbsDown, Shield } from "lucide-react";

import {
  Users,
  HeartHandshake,
  TrendingUp,
  Activity,
  Star,
  CalendarCheck,
  Wallet,
  MapPin,
  CalendarHeart,
  Megaphone,
  PenTool,
  Handshake,
} from "lucide-react";

import { motion } from "framer-motion";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import { useState } from "react";

function Evo() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="h-fit pt-24 pb-10 px-8">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 px-10"
      >
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <div className="p-4 bg-white h-full">
            <div className="space-y-4 text-justify  ">
              {/* Headings */}
              <div className="leading-tight">
                <p className="text-2xl md:text-[40px] font-roboto  text-black">
                  Evo
                </p>
                <h1 className="text-2xl md:text-[40px]  font-roboto text-blue-600">
                  Case Study
                </h1>
              </div>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-black mt-6">
                How We Built a Premium Vegetarian Brand From Scratch and Drove
                200+ Covers in Its First Weekend.
              </p>

              {/* Description */}
              <p className="text-gray-700 mt-4">
                Evo is a premium vegetarian fine dining restaurant located in
                Jayanagar, Bangalore. Built for a discerning niche, primarily
                Brahmin and Marwadi families, Evo blends global vegetarian
                cuisine with an elegant, refined dining experience.
              </p>

              {/* Challenge section */}
              <div className="bg-white rounded-xl space-y-2 mt-8">
                <h3 className="text-xl font-semibold text-blue-600">
                  Key Business Challenge
                </h3>
                <p className="text-gray-700">
                  When Evo approached us, there was no name, no logo, no brand —
                  just a strong vision. The goal was to launch a high-end
                  vegetarian restaurant that felt personal, not pretentious.
                  They needed more than marketing; they needed a brand built
                  from scratch, with depth and clarity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center mt-7"
        >
          <div className="bg-white flex flex-col items-center px-2">
            {/* Image */}
            <img
              src="./Hubble.png"
              alt="Hubble App"
              className="rounded-t-2xl w-full max-w-[545px] h-auto object-cover"
            />

            {/* Bottom Info */}
            <div className="w-full max-w-[530px] h-auto rounded-b-2xl pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-stretch gap-4 text-sm text-gray-700">
              {[
                {
                  title: "Campaign:",
                  content:
                    "Event-led Campaigns, New Menu Launches, Brand Positioning & Awareness",
                },
                {
                  title: "Industry:",
                  content: "F&B – Restaurant & Events",
                },
                {
                  title: "Key Growth Levers:",
                  content: "Event Marketing | Social Media Presence",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="w-full sm:flex-1 min-h-[100px] flex flex-col justify-start rounded-md bg-blue-50 p-2 text-sm"
                >
                  <p className="text-base font-semibold text-blue-600 mb-1">
                    {item.title}
                  </p>
                  <p className="line-clamp-3 overflow-hidden leading-snug text-gray-700">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Diagnostic Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mt-16 px-2"
      >
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-2xl md:text-[45px]  text-black">
            Before Scaling We Conducted
          </p>
          <p className="text-2xl md:text-[45px] font-bold text-blue-500">
            A Detailed Diagnostic Exercise
          </p>
        </div>

        {/* Cards Container */}
        <div className="w-full max-w-[1080px] mx-auto flex flex-col gap-6">
          <div className="flex flex-wrap justify-center items-stretch gap-x-6 gap-y-10">
            {[
              {
                title: "Concept Development",
                description:
                  "We helped name the brand, define its personality, and create a narrative around 'elevated vegetarian dining.' The tone was warm, premium, and niche-friendly.",
                tag: "Branding",
              },
              {
                title: "Visual Identity & Brand Voice",
                description:
                  "Designed a visual system and content voice that felt both aspirational and grounded — no loud colours or overdone copy. Every detail was curated.",
                tag: "Design",
              },
              {
                title: "Launch Strategy",
                description:
                  "From pre-launch teasers to opening weekend campaigns, we built a calendar that generated curiosity without feeling massy. (Can show the Grid)",
                tag: "Strategy",
              },
              {
                title: "Social Media Setup & Content Production",
                description:
                  "Crafted everything in-house from food photography to storytelling reels to copy that spoke directly to Evo’s core audience. (Can add content production samples as a slideshow card)",
                tag: "Social",
              },
              {
                title: "Community Activation",
                description:
                  "Invited the right people — small, trusted, culturally aligned influencers — for previews and soft buzz. Focused on word-of-mouth credibility over paid hype.",
                tag: "Community",
              },
              {
                title: "Offline Launch Moments",
                description:
                  "Designed family-style offline activations to build goodwill with the exact communities Evo wanted to serve. (Can attach the flyers made)",
                tag: "Events",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="w-full sm:w-[48%] lg:w-[320px] group perspective"
              >
                <div className="card-inner relative h-full min-h-[150px]">
                  {/* Front Side */}
                  <div className="absolute w-full h-full bg-white shadow-md rounded-xl border border-blue-400 p-5 backface-hidden z-10 flex flex-col justify-center items-center">
                    <h3 className="text-lg font-semibold text-black text-center">
                      {card.title}
                    </h3>
                    <span className="mt-3 inline-block px-3 py-1 text-sm text-blue-600 bg-blue-100 rounded-full">
                      #{card.tag}
                    </span>
                  </div>

                  {/* Back Side */}
                  <div className="absolute w-full h-full bg-white shadow-md rounded-xl border border-blue-400 px-5 py-2 backface-hidden rotate-y-180  flex   justify-center">
                    <p className="text-gray-700 text-sm whitespace-pre-wrap">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

{/* Impact heading */}
     <div className="mt-28 text-center px-4">
       <p className="text-lg sm:text-[45px] font-semibold text-black">
    Impact (Data-Driven Results)
  </p>
</div>

 

{/* Cards Section */}

<motion.div
  className="w-full max-w-[1000px] mx-auto py-6 px-4 flex flex-col lg:flex-row justify-center gap-y-6 lg:gap-y-0 lg:gap-x-48 items-stretch "
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>

  {/* Left Section */}
  <div className="flex flex-col gap-6 w-full lg:w-[45%] p-2 items-stretch">
    {/* Card 1: Opening Weekend Success */}
    <div className="relative bg-gradient-to-r from-white to-[#bfded2] border border-blue-600 rounded-xl shadow p-4 flex flex-col overflow-hidden flex-1 h-full">
      <div className="absolute bottom-4 right-4 opacity-10 text-blue-500 text-[70px] pointer-events-none select-none">
        <TrendingUp />
      </div>
      <div className="flex flex-col flex-1 z-10 relative">
        <div className="flex items-center justify-between mb-3">
          <p className="text-lg font-semibold text-black">200+ Covers</p>
          <div className="bg-gradient-to-tr from-blue-500 to-white p-2 rounded-full">
            <CalendarCheck className="text-black w-6 h-6" />
          </div>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed flex-1">
          Strong bookings without deep discounts — driven purely by brand
          presence and buzz. <br />
          <span className="font-medium">
            200+ Covers in Opening Weekend – Strong bookings without deep
            discounts purely on the back of brand presence and buzz.
          </span>
        </p>
      </div>
    </div>

    {/* Card 2: Social Media Foundation */}
    <div className="relative bg-gradient-to-r from-white to-[#bfded2] border border-blue-600 rounded-xl shadow p-4 flex flex-col overflow-hidden flex-1 h-full">
      <div className="absolute bottom-4 right-4 opacity-10 text-blue-500 text-[70px] pointer-events-none select-none">
        <Users />
      </div>
      <div className="flex flex-col flex-1 z-10 relative">
        <div className="flex items-center justify-between mb-3">
          <p className="text-lg font-semibold text-black">
            Social Media Foundation
          </p>
          <div className="bg-gradient-to-tr from-blue-500 to-white p-2 rounded-full">
            <HeartHandshake className="text-black w-6 h-6" />
          </div>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed flex-1">
          Followers and engagement built entirely organically — premium
          content + storytelling ensured traction from Day 1. <br />
          <span className="font-medium">
            Social Media Foundation Set – Followers and engagement were
            built entirely organically. Premium content + storytelling ensured
            real traction from Day 1.
          </span>
        </p>
      </div>
    </div>
  </div>

  {/* Right Section */}
  <div className="flex flex-col gap-6 w-full lg:w-[45%] p-2 items-stretch">
    {/* Card: Brand Perception */}
    <div className="relative bg-[#e6ecfc] border border-blue-600 rounded-xl shadow p-4 flex flex-col overflow-hidden flex-1 h-full">
      <div className="absolute bottom-4 right-4 opacity-10 text-blue-500 text-[70px] pointer-events-none select-none">
        <Activity />
      </div>
      <div className="flex flex-col flex-1 z-10 relative">
        <div className="flex items-center justify-between mb-3">
          <p className="text-lg font-semibold text-black">
            Brand Perception Win
          </p>
          <div className="bg-gradient-to-tr from-blue-500 to-white p-2 rounded-full">
            <Star className="text-black w-6 h-6" />
          </div>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed flex-1">
          Core audience praised Evo as “premium, but personal” — exactly
          the positioning we aimed for. <br />
          <span className="font-medium">
            Brand Perception Win – Core audience (Brahmin, Marwadi, and
            vegetarian diners) praised Evo as “premium, but personal” —
            exactly what we aimed for.
          </span>
        </p>
      </div>
    </div>

    {/* Card: Community-Led Growth */}
    <div className="relative bg-gradient-to-r from-[#bfded2] to-white border border-blue-600 rounded-xl shadow p-4 flex flex-col overflow-hidden flex-1 h-full">
      <div className="absolute bottom-4 right-4 opacity-10 text-blue-500 text-[70px] pointer-events-none select-none">
        <Users />
      </div>
      <div className="flex flex-col flex-1 z-10 relative">
        <div className="flex items-center justify-between mb-3">
          <p className="text-lg font-semibold text-black">
            Community-Led Growth
          </p>
          <div className="bg-gradient-to-tr from-blue-500 to-white p-2 rounded-full">
            <Users className="text-black w-6 h-6" />
          </div>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed flex-1">
          Early footfall included family groups and regulars who connected
          with the brand’s values — not just the food. <br />
          <span className="font-medium">
            Community-Led Growth – Early footfall included large family
            groups and regulars who connected with the brand’s values, not just
            the food.
          </span>
        </p>
      </div>
    </div>
  </div>
</motion.div>


<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="w-full px-4 mt-16 flex justify-center"
>
  <p className="text-lg sm:text-xl text-center max-w-3xl text-black">
    Evo didn’t need loud marketing. It needed the right kind of presence,
    elegant, niche-aware, and culturally intuitive. We didn’t chase
    virality, we built resonance.
  </p>
</motion.div>


      {/* Results Section */}

      {/* <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full px-4 mt-32 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-semibold leading-snug">
          Within 9 Months of Launch
          <br />
          Here Were Our <span className="text-blue-600">Results</span>
        </h2>
      </motion.div> */}

      {/* <div className="mt-12 max-w-5xl mx-auto flex flex-col md:flex-row text-center bg-gradient-to-b from-blue-600 to-white rounded-xl overflow-hidden shadow-lg">
        <div className="flex-1 p-6 border-b md:border-b-0 md:border-r sm:border-blue-400 border-blue-100">
          <p className="text-black font-bold text-4xl md:text-5xl">10L+</p>
          <p className="text-gray-700 mt-2">App Installs</p>
        </div>
        <div className="flex-1 p-6 border-b md:border-b-0 md:border-r sm:border-blue-400 border-blue-100">
          <p className="text-black font-bold text-4xl md:text-5xl">₹30</p>
          <p className="text-gray-700 mt-2">Avg CPI</p>
        </div>
        <div className="flex-1 p-6 ">
          <p className="text-black font-bold text-4xl md:text-5xl">60%+</p>
          <p className="text-gray-700 mt-2">Install → Active</p>
        </div>
      </div> */}

      {/* <div className="flex justify-center w-full mt-10">
        <div className="flex flex-col md:flex-row justify-center items-center bg-blue-100 rounded-lg md:rounded-full px-4 py-4 w-full md:w-[1150px] mt-6"> */}
          {/* Button-style box */}
          {/* <div className="bg-white text-black font-bold rounded-full px-10 py-2 whitespace-nowrap mb-3 md:mb-0 md:ml-2">
            Bonus Win!
          </div> */}

          {/* Text content */}
          {/* <div className="md:ml-10 text-black text-base md:text-lg w-full text-center md:text-left">
            <p className="whitespace-normal">
              Early adopters had a 64% activation within 30 days — significantly
              higher than fintech app benchmarks.
            </p>
            <p className="mt-1">
              Most transactions came from new-to-category users, indicating
              success in{" "}
              <span className="font-semibold">category creation</span> — not
              just share-shift.
            </p>
          </div>
        </div>
      </div> */}

      {/* <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-20 ml-4  flex flex-col justify-center items-center leading-tight text-center md:text-left"
      >
        <p className="text-3xl md:text-[44px] font-medium text-black m-0 p-0 leading-none">
          Our Learnings
        </p>
        <p className="text-3xl md:text-[44px] text-blue-600 font-semibold m-0 p-0 leading-none">
          We Don't Just Run Campaigns
        </p>
        <p className="text-lg md:text-2xl text-black mt-2">
          We Solve Adoption Architecture for New-Economy Brands
        </p>
      </motion.div> */}

      {/* <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-10 max-w-6xl mx-auto px-4"
      > */}
        {/* First row */}
        {/* <div className="bg-white rounded-xl border border-blue-300 shadow-sm p-6 text-black md:col-span-3">
          <p>
            <span className="text-4xl text-blue-600 font-bold">01</span>
            <span className="block text-md md:text-lg mt-4">
              What worked? Prioritising events as the lead communication
              vehicle. We didn’t just say “Tall Oaks is a vibe” - we showed it
              through slow experiences, collaborations, nature-driven content,
              and experiential storytelling.
            </span>
          </p>
        </div>
        <div className="bg-white rounded-xl border border-blue-300 shadow-sm p-6 text-black md:col-span-2">
          <p>
            <span className="text-4xl text-blue-600 font-bold">02</span>
            <span className="block text-md md:text-lg mt-4">
              At RevLabs, we don’t just run campaigns. We build what the brand
              needs- thoughtfully, creatively, and always with the client’s
              goals at the centre.
            </span>
          </p>
        </div>

        <div className="bg-white rounded-xl border border-blue-300 shadow-sm p-6 text-black md:col-span-2">
          <p>
            <span className="text-4xl text-blue-600 font-bold">03</span>
            <span className="block text-md md:text-lg mt-4">
              In new categories, the best-performing messages are often not what
              the founders expect — only structured experimentation reveals the
              truth.
            </span>
          </p>
        </div> */}

        {/* Second row */}
        {/* <div className="bg-white rounded-xl border border-blue-300 shadow-sm p-6 text-black md:col-span-3">
          <p>
            <span className="text-4xl text-blue-600 font-bold">04</span>
            <span className="block text-md md:text-lg mt-4">
              Retargeting without deep event segmentation is a wasted lever for
              fintech apps.
            </span>
          </p>
        </div>
      </motion.div> */}

      {/* <div className="flex items-center justify-center px-4 text-center mt-6">
        <p className="text-lg md:text-xl text-black w-fit">
          For us, paid media isn’t about spend. It’s about creating behavioural
          momentum that converts.
        </p>
      </div> */}
    </div>
  );
}

export default Evo;
