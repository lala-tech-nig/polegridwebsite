"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function AboutSection() {
  useEffect(() => {
    gsap.fromTo(
      ".fade-up",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        scrollTrigger: ".fade-up",
      }
    );
  }, []);

  return (
    <section id="about" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADER */}
        <div className="max-w-3xl mb-16 fade-up">
          <span className="text-green-600 font-semibold tracking-wide uppercase text-sm">
            About Polegrid Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
            The Bridge to Nigeria’s <br /> Digital Infrastructure
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            We are building the trust layer that accelerates telecom
            infrastructure deployment across Nigeria.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">

          {/* LEFT – IMAGE */}
          <div className="relative fade-up h-full">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-full flex">
              <img
                src="/about1.jpg"
                alt="Polegrid Solutions Infrastructure"
                className="w-full h-full object-cover aspect-[3/4]"
              />
            </div>

            {/* IMAGE OVERLAY */}
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-lg px-6 py-4 max-w-xs">
              <p className="text-sm text-gray-600">
                Verified land sites powering
              </p>
              <p className="text-xl font-bold text-gray-900">
                Nigeria’s Digital Growth
              </p>
            </div>
          </div>

          {/* RIGHT – CONTENT */}
          <div className="space-y-10 fade-up">

            {/* INTRO */}
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Polegrid Solutions is a tech-enabled marketplace connecting
                <strong> verified landowners</strong> with telecom operators and
                tower companies building Nigeria’s digital future.
              </p>

              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                In an industry plagued by land disputes and unverified titles,
                we provide the <strong>Trust Layer</strong> — transforming raw
                land into <strong>shovel-ready infrastructure sites</strong>.
              </p>
            </div>

            {/* WHAT WE DO */}
            <div className="grid sm:grid-cols-2 gap-6">

              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  For Landowners
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  We convert dormant land into long-term income by certifying
                  properties as <strong>Polegrid Verified</strong>, ready for
                  10–20 year telecom leases.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  For TowerCos & Telcos
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  We eliminate acquisition risks with pre-vetted, legally
                  cleared, and technically audited land — enabling deployment
                  up to <strong>5× faster</strong>.
                </p>
              </div>

            </div>

            {/* VERIFICATION */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The Power of Verification
              </h3>

              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">01</span>
                  <span>Fast-track GIS satellite mapping & document review</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">02</span>
                  <span>Deep legal title verification at State Land Registries</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">03</span>
                  <span>Engineering audits for terrain, access & power readiness</span>
                </li>
              </ul>
            </div>

            {/* VISION */}
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our vision is to become Africa’s most trusted Land Bank for
                digital infrastructure — accelerating connectivity while
                creating sustainable wealth for landowners.
              </p>
            </div>

            <div className="fade-up">
  <p className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-50 text-green-700 font-semibold tracking-wide shadow-sm border border-green-100">
    <span className="w-2 h-2 rounded-full bg-green-600"></span>
    Verification. Connection. Infrastructure.
  </p>
</div>


          </div>
        </div>
      </div>
    </section>
  );
}
