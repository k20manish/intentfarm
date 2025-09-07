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

function BodySection() {
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
                  Tall Oaks
                </p>
                <h1 className="text-2xl md:text-[40px]  font-roboto text-blue-600">
                  Case Study
                </h1>
              </div>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-black mt-6">
                How We Helped Tall Oaks Increase Footfall, Visibility, and
                Revenue With the Right Kind of Marketing.
              </p>

              {/* Description */}
              <p className="text-gray-700 mt-4">
                Tall Oaks is a nature-led dining destination in Whitefield,
                Bangalore. Known for its sprawling open-air space, it's a
                restaurant that blurs the lines between a meal out and a
                slow-living experience, perfect for families, groups, and solo
                diners alike.
              </p>

              {/* Challenge section */}
              <div className="bg-white rounded-xl space-y-2 mt-8">
                <h3 className="text-xl font-semibold text-blue-600">
                  Key Business Challenge
                </h3>
                <p className="text-gray-700">
                  When we started working with Tall Oaks, the brand had
                  potential but lacked traction, both online and offline. The
                  problem? - Low social presence, an unclear brand voice, weak
                  visibility for events, and no strong recall in a crowded
                  market. People liked it once they discovered it, but
                  discoverability was the issue
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
        title: "Brand Communication Reboot",
        description:
          "Streamlined messaging across platforms. Shifted the focus from just food to “nature as luxury”. Reframed Tall Oaks as a calm experience, not just a restaurant.",
        tag: "Branding",
      },
      {
        title: "Content-Led Social Strategy",
        description:
          "Built content around ambient dining, nature sounds, and soulful storytelling. Strong push on Reels + Stories → shifted perception from unknown spot to weekend ritual.",
        tag: "Social",
      },
      {
        title: "Event Marketing as a Core Lever",
        description:
          "Curated campaigns that made the space more than just a dining venue: Hug A Tree (Earth Day), Coastal Fiesta (seasonal fare), Weekend Breakfast Launch (early footfall).",
        tag: "Events",
      },
      {
        title: "Collaborations & IRL Experiences",
        description:
          "Partnered with the Run Scene for offline synergy & new audience. Weekend workshops (e.g., dumpling making) increased dwell time & experience value.",
        tag: "Experience",
      },
      {
        title: "Influencer & OOH Strategy",
        description:
          "Selected aligned creators — authenticity over just reach. Local outdoor ads in Whitefield reinforced visual identity.",
        tag: "Influencers",
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
          <div className="absolute w-full h-full bg-white shadow-md rounded-xl border border-blue-400 p-5 backface-hidden rotate-y-180 overflow-y-auto flex items-center justify-center">
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

      {/* full funnel section */}
      <div className="mt-28 text-center px-4">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          A Full-Funnel Rethink
        </p>
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500 mt-2">
          Not Just A Tactical Deployment
        </p>
      </div>
      <motion.div
        className="w-full max-w-[1200px] mx-auto py-6 px-4 flex flex-col lg:flex-row justify-between gap-6"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Left Section */}
        <div className="flex flex-col gap-6 w-full lg:w-1/3 p-4">
          {/* Card 1: Social Growth */}
          <div className="relative bg-gradient-to-r from-white to-[#bfded2] border border-blue-600 rounded-xl shadow p-5 min-h-[200px] flex flex-col overflow-hidden">
            {/* <div className="absolute top-2 left-4 bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full shadow sm:mb-1 mb-2">
            🌟 Featured
          </div> */}
            <div className="absolute bottom-4 right-4 opacity-10 text-blue-500 text-[80px] pointer-events-none select-none">
              <Users />
            </div>
            <div className="flex flex-col flex-1 z-10 relative">
              <div className="flex items-center justify-between mb-4 sm:mt-0 mt-4">
                <p className="text-2xl font-semibold text-black">
                  Social Growth
                </p>
                <div className="bg-gradient-to-tr from-blue-500 to-white p-2 rounded-full">
                  <Users className="text-black sm:w-8 sm:h-8 w-6 h-6" />
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">
                Grew from ~500 to 2800+ followers organically. That’s 450%
                growth – without heavy ad spends.
              </p>
            </div>
          </div>

          {/* Card 2: Engagement Uplift */}
          <div className="relative bg-gradient-to-r from-white to-[#bfded2] border border-blue-600 rounded-xl shadow p-5 min-h-[200px] flex flex-col overflow-hidden">
            {/* <div className="absolute top-2 left-4 bg-pink-100 text-pink-800 text-xs font-bold px-2 py-1 rounded-full shadow">
            🔥 Trending
          </div> */}
            <div className="absolute bottom-4 right-4 opacity-10 text-blue-500 text-[80px] pointer-events-none select-none">
              <HeartHandshake />
            </div>
            <div className="flex flex-col flex-1 z-10 relative">
              <div className="flex items-center justify-between mb-4 sm:mt-0 mt-4">
                <p className="text-2xl font-semibold text-black">
                  Engagement Uplift
                </p>
                <div className="bg-gradient-to-tr from-blue-500 to-white p-2 rounded-full">
                  <HeartHandshake className="text-black sm:w-8 sm:h-8 w-6 h-6" />
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">
                Hug A Tree reels, Coastal Fiesta Campaign + stories hit strong
                engagement – 4x increase in shares & saves vs regular content.
              </p>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col gap-6 w-full lg:w-1/3 p-4 items-center justify-center">
          {/* Card: Event Visibility */}
          <div className="relative bg-[#e6ecfc] border border-blue-600 rounded-xl shadow p-5 min-h-[200px] w-full overflow-hidden flex flex-col">
            {/* <div className="absolute top-2 left-4 bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full shadow">
            ✅ Sold Out
          </div> */}
            <div className="absolute bottom-4 right-4 opacity-10 text-blue-500 text-[80px] pointer-events-none select-none">
              <Activity />
            </div>
            <div className="flex flex-col flex-1 z-10 relative">
              <div className="flex items-center justify-between mb-4 sm:mt-0 mt-4">
                <p className="text-2xl font-semibold text-black">
                  Event Visibility
                </p>
                <div className="bg-gradient-to-tr from-blue-500 to-white p-2 rounded-full">
                  <CalendarCheck className="text-black sm:w-8 sm:h-8 w-6 h-6" />
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">
                Weekend events consistently sold out or were at full capacity.
                Branded events started drawing people purely for the experience,
                not just the food.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6 w-full lg:w-1/3 p-4">
          {/* Card: Revenue Streams */}
          <div className="relative bg-gradient-to-r from-[#bfded2] to-white border border-blue-600 rounded-xl shadow p-5 min-h-[200px] flex flex-col overflow-hidden">
            {/* <div className="absolute top-2 left-4 bg-purple-100 text-purple-800 text-xs font-bold px-2 py-1 rounded-full shadow">
            🍳 New Service
          </div> */}
            <div className="absolute bottom-4 right-4 opacity-10 text-blue-500 text-[80px] pointer-events-none select-none">
              <TrendingUp />
            </div>
            <div className="flex flex-col flex-1 z-10 relative">
              <div className="flex items-center justify-between mb-4 sm:mt-0 mt-4">
                <p className="text-2xl font-semibold text-black">
                  Revenue Streams
                </p>
                <div className="bg-gradient-to-tr from-blue-500 to-white p-2 rounded-full">
                  <Wallet className="text-black sm:w-8 sm:h-8 w-6 h-6" />
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">
                Breakfast service introduced due to demand → now a steady source
                of footfall before 11 AM.
              </p>
            </div>
          </div>

          {/* Card: Discoverability */}
          <div className="relative bg-gradient-to-r from-[#bfded2] to-white border border-blue-600 rounded-xl shadow p-5 min-h-[200px] flex flex-col overflow-hidden">
            {/* <div className="absolute top-2 left-4 bg-indigo-100 text-indigo-800 text-xs font-bold px-2 py-1 rounded-full shadow">
            📍 Location Buzz
          </div> */}
            <div className="absolute bottom-4 right-4 opacity-10 text-blue-500 text-[80px] pointer-events-none select-none">
              <Activity />
            </div>
            <div className="flex flex-col flex-1 z-10 relative">
              <div className="flex items-center justify-between mb-4 sm:mt-0 mt-4">
                <p className="text-2xl font-semibold text-black">
                  Discoverability
                </p>
                <div className="bg-gradient-to-tr from-blue-500 to-white p-2 rounded-full">
                  <MapPin className="text-black sm:w-8 sm:h-8 w-6 h-6" />
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">
                Footfall increased via offline + digital visibility – now known
                as a weekend destination, not just a restaurant.
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
        className="w-full px-4 mt-20 flex justify-center"
      >
        <p className="text-xl sm:text-2xl text-center max-w-4xl  text-black">
          Over 3 quarters, we progressively shifted from broad acquisition to
          precision-led cohort targeting. Messaging matured from generic “save
          more” claims to contextual brand-aligned propositions (“Extra 10% on
          your Zomato spends” etc.). As user understanding improved, CPI
          compressed and quality of installs rose sharply.
        </p>
      </motion.div>

      <motion.div
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
      </motion.div>

     <div className="mt-12 max-w-5xl mx-auto flex flex-col md:flex-row text-center bg-gradient-to-b from-blue-600 to-white rounded-xl overflow-hidden shadow-lg">
  <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-blue-400">
    <p className="text-black font-bold text-4xl md:text-5xl">10L+</p>
    <p className="text-gray-700 mt-2">App Installs</p>
  </div>
  <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-blue-400">
    <p className="text-black font-bold text-4xl md:text-5xl">₹30</p>
    <p className="text-gray-700 mt-2">Avg CPI</p>
  </div>
  <div className="flex-1 p-6">
    <p className="text-black font-bold text-4xl md:text-5xl">60%+</p>
    <p className="text-gray-700 mt-2">Install → Active</p>
  </div>
</div>



      <div className="flex justify-center w-full mt-10">
        <div className="flex flex-col md:flex-row justify-center items-center bg-blue-100 rounded-lg md:rounded-full px-4 py-4 w-full md:w-[1150px] mt-6">
          {/* Button-style box */}
          <div className="bg-white text-black font-bold rounded-full px-10 py-2 whitespace-nowrap mb-3 md:mb-0 md:ml-2">
            Bonus Win!
          </div>

          {/* Text content */}
          <div className="md:ml-10 text-black text-base md:text-lg w-full text-center md:text-left">
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
      </div>

      <motion.div
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
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-10 max-w-6xl mx-auto px-4"
      >
        {/* First row */}
        <div className="bg-white rounded-xl border border-blue-200 shadow-sm p-6 text-black md:col-span-3">
          <p>
            <span className="text-4xl text-blue-400 font-bold">01</span>
            <span className="block text-md md:text-lg mt-4">
              What worked? Prioritising events as the lead communication
              vehicle. We didn’t just say “Tall Oaks is a vibe” - we showed it
              through slow experiences, collaborations, nature-driven content,
              and experiential storytelling.
            </span>
          </p>
        </div>
        <div className="bg-white rounded-xl border border-blue-200 shadow-sm p-6 text-black md:col-span-2">
          <p>
            <span className="text-4xl text-blue-400 font-bold">02</span>
            <span className="block text-md md:text-lg mt-4">
              At RevLabs, we don’t just run campaigns. We build what the brand
              needs- thoughtfully, creatively, and always with the client’s
              goals at the centre.
            </span>
          </p>
        </div>

        <div className="bg-white rounded-xl border border-blue-200 shadow-sm p-6 text-black md:col-span-2">
          <p>
            <span className="text-4xl text-blue-400 font-bold">03</span>
            <span className="block text-md md:text-lg mt-4">
              In new categories, the best-performing messages are often not what
              the founders expect — only structured experimentation reveals the
              truth.
            </span>
          </p>
        </div>

        {/* Second row */}
        <div className="bg-white rounded-xl border border-blue-200 shadow-sm p-6 text-black md:col-span-3">
          <p>
            <span className="text-4xl text-blue-400 font-bold">04</span>
            <span className="block text-md md:text-lg mt-4">
              Retargeting without deep event segmentation is a wasted lever for
              fintech apps.
            </span>
          </p>
        </div>
      </motion.div>

      <div className="flex items-center justify-center px-4 text-center mt-6">
        <p className="text-lg md:text-xl text-black w-fit">
          For us, paid media isn’t about spend. It’s about creating behavioural
          momentum that converts.
        </p>
      </div>
    </div>
  );
}

export default BodySection;
