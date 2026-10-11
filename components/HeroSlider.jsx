import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Radio, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  MapPin
} from "lucide-react";

const heroSlides = [
  {
    id: 1,
    tag: "NATIONAL SITE INTELLIGENCE NETWORK",
    title: "YOUR LAND COULD BE PART OF NIGERIA'S NEXT INFRASTRUCTURE OPPORTUNITY.",
    subtitle:
      "Own land anywhere in Nigeria? Register your property with Polegrid and put its information on the radar for potential telecommunications, connectivity and digital infrastructure opportunities.",
    primaryCta: {
      text: "REGISTER YOUR PROPERTY — FREE",
      href: "/register-property",
    },
    secondaryCta: {
      text: "SEE HOW IT WORKS",
      href: "#how-it-works",
    },
    badgeText: "NO PAYMENT IS REQUIRED TO REGISTER YOUR PROPERTY",
    disclaimer:
      "Registration provides an opportunity for your property to be considered. Further assessment or commercial engagement may apply where appropriate.",
    mediaType: "video",
    mediaSrc: "/hero-video.mp4",
    caption: "National Video Site Intelligence • Nationwide Deployment",
  },
  {
    id: 2,
    tag: "TELECOM TOWERS & GREENFIELD SITES",
    title: "SUITABLE LOCATIONS FOR GROUND-BASED TELECOM MASTS & TOWERS.",
    subtitle:
      "Open plots, perimeter land, and agricultural borders evaluated for telecom mast expansion across all 36 States and the FCT.",
    primaryCta: {
      text: "REGISTER YOUR PROPERTY — FREE",
      href: "/register-property",
    },
    secondaryCta: {
      text: "EXPLORE SERVICES",
      href: "/services",
    },
    badgeText: "100% FREE PRELIMINARY GEOSPATIAL SCREENING",
    disclaimer:
      "Location intelligence helps connect physical property assets with long-term infrastructure planning.",
    mediaType: "image",
    mediaSrc: "/hero1.JPG",
    caption: "Greenfield Telecom Mast Site • Lekki-Epe Axis",
  },
  {
    id: 3,
    tag: "ROOFTOPS & HIGH-ELEVATION STRUCTURES",
    title: "COMMERCIAL ROOFTOPS POWERING URBAN 4G & 5G CONNECTIVITY.",
    subtitle:
      "Commercial buildings and high-elevation structures provide vital transmission height for urban micro-cells, small-cells and telecom relays.",
    primaryCta: {
      text: "REGISTER YOUR ROOFTOP — FREE",
      href: "/register-property",
    },
    secondaryCta: {
      text: "FOR ORGANIZATIONS",
      href: "/organization-enquiry",
    },
    badgeText: "COMMERCIAL & RESIDENTIAL ELEVATED ROOFTOPS ELIGIBLE",
    disclaimer:
      "Structural suitability and load-bearing capacity are screened during technical assessment.",
    mediaType: "image",
    mediaSrc: "/hero2.jpg",
    caption: "Commercial Rooftop Antenna Installation • Lagos Metro",
  },
  {
    id: 4,
    tag: "POWER & EQUIPMENT INFRASTRUCTURE",
    title: "POWER INTEGRATION, ACCESS ROADS & SECURE SITE PERIMETERS.",
    subtitle:
      "Verified road access, power proximity, and secure perimeters are essential requirements for long-term telecom infrastructure development.",
    primaryCta: {
      text: "PUT MY PROPERTY ON THE RADAR",
      href: "/register-property",
    },
    secondaryCta: {
      text: "SEE HOW IT WORKS",
      href: "#how-it-works",
    },
    badgeText: "HEAVY TRUCK ACCESS & UTILITIES SCREENING",
    disclaimer:
      "Grid availability and generator/solar footprint evaluated for uninterrupted connectivity.",
    mediaType: "image",
    mediaSrc: "/hero3.jpg",
    caption: "Power & Equipment Shelter Facility • Abuja Central Hub",
  },
  {
    id: 5,
    tag: "STRATEGIC TIMING & EXPANSION",
    title: "WHAT IF YOUR PROPERTY IS IN THE RIGHT PLACE AT THE RIGHT TIME?",
    subtitle:
      "You may not know today. That is why Polegrid organizes and maintains property intelligence to match telecom operators as networks grow.",
    primaryCta: {
      text: "REGISTER YOUR PROPERTY — FREE",
      href: "/register-property",
    },
    secondaryCta: {
      text: "CONNECT WITH POLEGRID",
      href: "/organization-enquiry",
    },
    badgeText: "NATIONWIDE INFRASTRUCTURE RADAR",
    disclaimer:
      "Commercial engagements and lease structures are established only when a verified infrastructure need is matched.",
    mediaType: "image",
    mediaSrc: "/hero5.jpg",
    caption: "High-Capacity Lattice Macro Tower • Growth Corridor",
  },
  {
    id: 6,
    tag: "COMMUNITY CONNECTIVITY & VALUE",
    title: "CONNECTING NIGERIAN LANDOWNERS WITH LONG-TERM INFRASTRUCTURE VALUE.",
    subtitle:
      "Telecom operators and tower companies seek suitable locations for 10–30 year lease opportunities. Property registration is 100% free.",
    primaryCta: {
      text: "REGISTER YOUR PROPERTY — FREE",
      href: "/register-property",
    },
    secondaryCta: {
      text: "EXPLORE SERVICES",
      href: "/services",
    },
    badgeText: "10–30 YEAR LONG-TERM LEASE POTENTIAL",
    disclaimer:
      "Registration provides an opportunity for consideration with zero upfront payment required.",
    mediaType: "image",
    mediaSrc: "/hero6.jpg",
    caption: "Suburban Connectivity Mast • Kano-Kaduna Growth Hub",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-sliding Carousel every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = heroSlides[current];

  return (
    <div 
      className="relative min-h-[460px] md:min-h-[500px] lg:min-h-[540px] flex items-center bg-black overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Media: Video or high-res photography */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          {slide.mediaType === "video" ? (
            <motion.div
              key="video-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={slide.mediaSrc} type="video/mp4" />
              </video>
            </motion.div>
          ) : (
            <motion.div
              key={`img-${slide.id}`}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full"
            >
              <img
                src={slide.mediaSrc}
                alt={slide.caption}
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dark overlay (bg-black/45) so the background video & images play clearly while white text is 100% crisp and readable */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Main Content: Centered, Bold, White & Readable */}
      <div className="max-w-5xl text-white mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 relative z-10 w-full text-center flex flex-col items-center">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-4 sm:space-y-5 flex flex-col items-center"
          >
            {/* Tag Pill - Pure White Lettering with Crisp Contrast */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider bg-black/80 text-white border border-white/25 backdrop-blur-md shadow-xl">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white drop-shadow">{slide.tag}</span>
            </div>

            {/* Headline - Pure White, Maximum Boldness & High-Contrast Shadow */}
            <h1 
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black !text-white tracking-tight leading-[1.08] max-w-4xl [text-shadow:_0_3px_20px_rgba(0,0,0,1),_0_6px_40px_rgba(0,0,0,0.95)]"
              style={{ color: "#ffffff" }}
            >
              {slide.title}
            </h1>

            {/* Subtitle - Pure White, High-Contrast Text */}
            <p 
              className="text-lg sm:text-xl md:text-2xl !text-white font-bold leading-relaxed max-w-3xl [text-shadow:_0_2px_14px_rgba(0,0,0,1),_0_4px_24px_rgba(0,0,0,0.9)]"
              style={{ color: "#ffffff" }}
            >
              {slide.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto">
              <Link
                to={slide.primaryCta.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 text-sm sm:text-base font-black text-zinc-950 bg-white hover:bg-zinc-200 active:bg-zinc-300 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <Radio className="w-4 h-4 text-emerald-600" />
                <span>{slide.primaryCta.text}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>

              {slide.secondaryCta.href.startsWith("#") ? (
                <a
                  href={slide.secondaryCta.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm sm:text-base font-bold text-white bg-black/75 hover:bg-black/95 rounded-full border border-white/30 backdrop-blur-md transition hover:scale-105 shadow-xl"
                >
                  <span className="text-white drop-shadow">{slide.secondaryCta.text}</span>
                </a>
              ) : (
                <Link
                  to={slide.secondaryCta.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm sm:text-base font-bold text-white bg-black/75 hover:bg-black/95 rounded-full border border-white/30 backdrop-blur-md transition hover:scale-105 shadow-xl"
                >
                  <span className="text-white drop-shadow">{slide.secondaryCta.text}</span>
                </Link>
              )}
            </div>

            {/* Corresponding Image / Video Caption Pill - Pure White Lettering */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/80 border border-white/20 backdrop-blur-md text-xs sm:text-sm font-bold text-white mt-1 shadow-xl">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-white drop-shadow">{slide.caption}</span>
            </div>

            {/* Badge - Pure White Lettering */}
            <div className="pt-1">
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-black text-white [text-shadow:_0_2px_10px_rgba(0,0,0,1)] bg-black/60 px-4 py-1.5 rounded-full border border-white/15 backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-white">{slide.badgeText}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Slide Indicators & Controls */}
        <div className="flex items-center justify-between w-full max-w-md pt-6 mt-4">
          <button
            onClick={() =>
              setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
            }
            className="p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 backdrop-blur-md transition hover:scale-110 shadow-lg"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          {/* Indicator Pills */}
          <div className="flex items-center gap-2">
            {heroSlides.map((s, index) => (
              <button
                key={s.id}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-300 rounded-full h-2.5 ${
                  current === index
                    ? "w-8 bg-emerald-400 shadow-md shadow-emerald-400/50"
                    : "w-2.5 bg-white/50 hover:bg-white"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
            <span className="text-xs text-white font-black ml-2 [text-shadow:_0_1px_6px_rgba(0,0,0,0.9)]">
              0{current + 1} / 0{heroSlides.length}
            </span>
          </div>

          <button
            onClick={() => setCurrent((prev) => (prev + 1) % heroSlides.length)}
            className="p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 backdrop-blur-md transition hover:scale-110 shadow-lg"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

      </div>
    </div>
  );
}
