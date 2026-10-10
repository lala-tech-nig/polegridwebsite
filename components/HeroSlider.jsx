import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Radio, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  MapPin, 
  Play
} from "lucide-react";

const heroSlides = [
  {
    id: 1,
    tag: "National Site Intelligence Network",
    title: "Your Land Could Be Part of Nigeria's Next Infrastructure Opportunity.",
    subtitle:
      "Own land anywhere in Nigeria? Register your property with Polegrid and put its information on the radar for potential telecommunications, connectivity and digital infrastructure opportunities.",
    description:
      "Polegrid is building a national infrastructure intelligence network that helps bring relevant property and location information into view as infrastructure needs evolve.",
    primaryCta: {
      text: "REGISTER YOUR PROPERTY — FREE",
      href: "/register-property",
    },
    secondaryCta: {
      text: "SEE HOW IT WORKS",
      href: "#how-it-works",
    },
    badgeText: "No payment is required to register your property.",
    disclaimer:
      "Registration provides an opportunity for your property to be considered. Further assessment or commercial engagement may apply where appropriate.",
    bgMedia: "video",
    sideImage: "/hero1.JPG",
    locationTag: "Lekki-Epe Corridor, Lagos",
  },
  {
    id: 2,
    tag: "Geospatial Location Intelligence",
    title: "Telecommunications and Digital Infrastructure Depend on Suitable Locations.",
    subtitle:
      "As Nigeria continues to expand its digital infrastructure, suitable locations remain an important part of the process.",
    description:
      "Polegrid helps organize and maintain relevant property and location information that may become useful as infrastructure opportunities arise.",
    primaryCta: {
      text: "REGISTER YOUR PROPERTY — FREE",
      href: "/register-property",
    },
    secondaryCta: {
      text: "EXPLORE SERVICES",
      href: "/services",
    },
    badgeText: "100% Free Preliminary Geospatial Screening",
    disclaimer:
      "Location intelligence helps connect physical property assets with long-term infrastructure planning.",
    bgMedia: "image",
    bgImage: "/hero2.jpg",
    sideImage: "/hero2.jpg",
    locationTag: "Abuja Central & Satellite Corridors",
  },
  {
    id: 3,
    tag: "Strategic Timing & Opportunity",
    title: "What If Your Property Is in the Right Place at the Right Time?",
    subtitle:
      "You may not know today. That is why Polegrid exists.",
    description:
      "Place your property information within a growing national infrastructure intelligence network. Your location data helps guide telecom site selection as networks expand.",
    primaryCta: {
      text: "PUT MY PROPERTY ON THE RADAR",
      href: "/register-property",
    },
    secondaryCta: {
      text: "CONNECT WITH POLEGRID",
      href: "/organization-enquiry",
    },
    badgeText: "Put Your Land on the Radar",
    disclaimer:
      "Commercial engagements and lease structures are established only when a verified infrastructure need is matched.",
    bgMedia: "image",
    bgImage: "/hero3.jpg",
    sideImage: "/hero4.jpg",
    locationTag: "Kano & Port Harcourt Growth Hubs",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 8500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = heroSlides[current];

  return (
    <div 
      className="relative min-h-[680px] md:min-h-[760px] lg:min-h-[820px] flex items-center bg-zinc-950 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Media: Cinematic Video or Full Photography without gradients */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            slide.bgMedia === "video" ? "opacity-35" : "opacity-15"
          }`}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Clean solid dark overlay for high readability without gradients */}
        <div className="absolute inset-0 bg-zinc-950/75" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Slide Text Content (7 cols) */}
          <div className="lg:col-span-7 space-y-7 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Minimal Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-900 text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{slide.tag}</span>
                </div>

                {/* Main Headline - Bold, clean, large */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed">
                  {slide.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl font-light">
                  {slide.description}
                </p>

                {/* Solid CTA Buttons - No gradients, no borders */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                  <Link
                    to={slide.primaryCta.href}
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold text-zinc-950 bg-white hover:bg-zinc-200 active:bg-zinc-300 rounded-full transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <Radio className="w-4 h-4 text-emerald-600" />
                    <span>{slide.primaryCta.text}</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>

                  {slide.secondaryCta.href.startsWith("#") ? (
                    <a
                      href={slide.secondaryCta.href}
                      className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 rounded-full transition"
                    >
                      <span>{slide.secondaryCta.text}</span>
                    </a>
                  ) : (
                    <Link
                      to={slide.secondaryCta.href}
                      className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 rounded-full transition"
                    >
                      <span>{slide.secondaryCta.text}</span>
                    </Link>
                  )}
                </div>

                {/* No Payment Required Badge + Disclaimer */}
                <div className="pt-3 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-medium text-emerald-400">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>{slide.badgeText}</span>
                  </div>
                  <p className="text-xs text-zinc-500 leading-normal font-light">
                    {slide.disclaimer}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* High-Impact Photographic Showcase Card (5 cols) - Focused on real photography */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative group">
              <div className="img-zoom-wrapper rounded-3xl overflow-hidden shadow-2xl bg-zinc-900 aspect-[4/3] relative">
                <img
                  src={slide.sideImage}
                  alt="Infrastructure Location Site"
                  className="img-zoom w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-zinc-950/25 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Clean Photo Caption */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-zinc-950/85 backdrop-blur-md text-white space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-zinc-400">
                    <span className="flex items-center gap-1 font-semibold text-zinc-300">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      {slide.locationTag}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold">
                      Verified Site
                    </span>
                  </div>
                  <p className="text-xs font-normal text-zinc-300">
                    Suitable terrain, road access, and structural readiness for telecom deployment.
                  </p>
                </div>
              </div>

              {/* Minimal Stats Pill */}
              <div className="mt-4 flex items-center justify-between text-xs text-zinc-400 px-2 font-light">
                <span>Free Registration Across All 36 States + FCT</span>
                <span className="text-white font-medium">SCUML Certified</span>
              </div>
            </div>
          </div>

        </div>

        {/* Minimal Slide Controls - Clean lines and buttons */}
        <div className="flex items-center justify-between pt-12 mt-12 border-t border-zinc-900">
          <div className="flex items-center gap-3">
            {heroSlides.map((s, index) => (
              <button
                key={s.id}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-300 rounded-full h-1.5 ${
                  current === index
                    ? "w-8 bg-white"
                    : "w-2 bg-zinc-700 hover:bg-zinc-500"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
            <span className="text-xs text-zinc-500 font-mono ml-2">
              0{current + 1} / 0{heroSlides.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
              }
              className="p-3 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % heroSlides.length)}
              className="p-3 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
