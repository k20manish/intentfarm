import React from "react";
import { ThumbsDown, Shield } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKnight, faChessPawn } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "@fontsource/roboto/400.css";

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
            <div className="w-full max-w-[530px] h-auto rounded-b-2xl pt-8 flex flex-col sm:flex-row justify-between items-start gap-4 text-sm text-gray-700">
              <div className="flex-1 rounded-md bg-blue-50 p-2 text-[16px]">
                <p className="text-lg font-semibold text-blue-600 mb-1">
                  Campaign:
                </p>
                Event-led Campaigns, New Menu Launches, Brand Positioning &
                Awareness
              </div>
              <div className="flex-1 rounded-md bg-blue-50 p-2 text-[16px]">
                <p className="text-lg font-semibold text-blue-600 mb-1">
                  Industry:
                </p>
                F&B – Restaurant & Events
              </div>
              <div className="flex-1 rounded-md bg-blue-50 p-2 text-[16px]">
                <p className="text-lg font-semibold text-blue-600 mb-1">
                  Key Growth Levers:
                </p>
                Event Marketing | Social Media Presence
              </div>
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
        <div className="w-full max-w-[1080px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card Template */}
          {[
            {
              title: "Category Ambiguity",
              description:
                "Users didn’t fully grasp the difference between Hubble and cashback wallets or savings apps. This slowed install-to-activation journeys.",
            },
            {
              title: "Delayed Value Realization",
              description:
                "The perceived benefit of “extra value on brand spends” required explanation — users needed multiple exposures to unlock action.",
            },
            {
              title: "Early CAC Volatility",
              description:
                "Initial CPI hovered around ₹70–₹80, with poor install-to-active-user conversion due to unclear positioning and broad audience targeting.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl border border-blue-400 p-4 flex flex-col relative hover:bg-blue-100"
            >
              {/* Icon */}
              <div className="absolute top-4 right-4 bg-white shadow-xl p-3 rounded-full">
                <ThumbsDown className="text-black w-6 h-6 hover:bg-blue-300" />
              </div>

              {/* Title */}
              <h3 className="text-[30px] font-semibold text-black mt-16 ">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 mt-4 text-md">{card.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
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
          {/* Card 1 */}
          <div className="bg-gradient-to-r from-white to-[#bfded2] border border-blue-600 rounded-xl shadow p-5 min-h-[250px]">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-semibold text-black">
                Social Growth:
              </p>
              <div className="bg-blue-100 p-2 rounded-full">
                <Shield className="text-blue-600 w-10 h-10" />
              </div>
            </div>
            <p className="text-gray-700 mt-6 text-sm leading-relaxed">
              Grew from ~500 to 2800+ followers organically. That’s 450% growth
              -without heavy ad spends.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-r from-white to-[#bfded2] border border-blue-600 rounded-xl shadow p-5 min-h-[250px]">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-semibold text-black">
                Engagement Uplift
              </p>
              <div className="bg-blue-100 p-2 rounded-full">
                <Shield className="text-blue-600 w-10 h-10" />
              </div>
            </div>
            <p className="text-gray-700 mt-6 text-sm leading-relaxed">
              Hug A Tree reels, Coastal Fiesta Campaign + stories hit strong
              engagement- 4x increase in shares & saves vs regular content.
            </p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col gap-6 w-full lg:w-1/3 p-4 items-center justify-center">
          <div className="bg-[#e6ecfc] rounded-xl shadow p-5 min-h-[250px] w-full border border-blue-600">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-semibold text-black">
                Event Visibility:
              </p>
              <div className="bg-blue-100 p-2 rounded-full">
                <Shield className="text-blue-600 w-10 h-10" />
              </div>
            </div>
            <p className="text-gray-700 mt-6 text-sm leading-relaxed">
              Weekend events consistently sold out or were at full capacity.
              Branded events (like Lights Off, Dine In, Hug a Tree, Breakfast
              surrounded by nature) started drawing people purely for the
              experience, not just the food.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6 w-full lg:w-1/3 p-4">
          {/* Card 1 */}
          <div className="bg-gradient-to-r from-[#bfded2] to-white border border-blue-600 rounded-xl shadow p-5 min-h-[250px]">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-semibold text-black">
                Revenue Streams:
              </p>
              <div className="bg-blue-100 p-2 rounded-full">
                <Shield className="text-blue-600 w-10 h-10" />
              </div>
            </div>
            <p className="text-gray-700 mt-6 text-sm leading-relaxed">
              Breakfast service (weekends only) introduced in response to early
              crowd demand → now a steady source of footfall before 11 AM.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-r from-[#bfded2] to-white border border-blue-600 rounded-xl shadow p-5 min-h-[250px]">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-semibold text-black">
                Discoverability:
              </p>
              <div className="bg-blue-100 p-2 rounded-full">
                <Shield className="text-blue-600 w-10 h-10" />
              </div>
            </div>
            <p className="text-gray-700 mt-6 text-sm leading-relaxed">
              Footfall increases due to a combo of offline + digital visibility-
              customers now recognise the space as more than a restaurant.
            </p>
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
        className="w-full px-4 mt-40 flex justify-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-center leading-snug">
          Within 9 Months of Launch
          <br />
          Here Were Our <span className="text-blue-600">Results</span>
        </h2>
      </motion.div>

      <div className="flex flex-col justify-center items-center md:flex-row gap-8 md:gap-32 ml-4 md:ml-32 mt-10">
        <div className="flex flex-col items-center text-center">
          <p className="text-blue-600 font-bold text-3xl md:text-[40px]">
            10 L+
          </p>
          <p className="text-gray-600 text-base md:text-lg">App Installs</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="text-blue-600 font-bold text-3xl md:text-[40px]">₹30</p>
          <p className="text-gray-600 text-base md:text-lg">Avg CPI</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="text-blue-600 font-bold text-3xl md:text-[40px]">
            60%+
          </p>
          <p className="text-gray-600 text-base md:text-lg ml-14">
            Install to Active Rate
          </p>
        </div>
      </div>

    <div className="flex justify-center w-full">
  <div className="flex flex-col md:flex-row justify-center items-center bg-blue-200 rounded-lg md:rounded-full px-4 py-4 w-full md:w-[1150px] mt-6">
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
        success in <span className="font-semibold">category creation</span>{" "}
        — not just share-shift.
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
