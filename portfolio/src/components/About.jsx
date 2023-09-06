import React from "react";
import kk from "./kk.png";

export default function About() {
  return (
    <div id="about" className="relative bg-gradient-to-l from-gray-700 via-gray-900 to-black shadow-lg shadow-cyan-400 overflow-hidden">
      {/* Large Screen */}
      <div className="hidden lg:block">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text sm:text-6xl">
                About Me
              </h1>

              <p className="mt-4 text-xl text-gray-500">
                Kirti Kamal is a tech enthusiast and visionary community leader
                who is pursuing a Bachelor of Technology in Computer Science and
                Engineering at Trident Academy of Technology. As a Beta
                Microsoft Learn Student Ambassador, Kirti helps fellow students
                learn new technologies and develop their career skills for the
                future. Kirti also leads the Trident ACM Student Chapter and the
                Trident Hackathon Club, organizing engaging workshops, events,
                and hackathons for the tech community. With a strong dedication
                to open-source, Kirti has established an inclusive platform to
                guide newcomers through their tech journey. Kirti has also
                acquired multiple certifications and skills in DevOps,
                Networking, Linux, Docker, and Frontend Development,
                demonstrating technical expertise and a passion for continuous
                learning. Kirti strives to inspire others to explore, innovate,
                and excel in the ever-evolving realm of technology, by blending
                leadership skills, collaboration, and creativity.
              </p>
            </div>

            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <img
                          className="w-44 h-44 rounded-full lg:w-60 lg:h-60"
                          src={kk}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 text-left">
                  <a
                    href="#"
                    className="inline-block rounded-md border border-transparent bg-cyan-500 px-8 py-3 text-center text-base font-medium text-white hover:bg-cyan-600"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small Screen */}
      <div className="lg:hidden">
        <div className="px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              About Me
            </h1>

            <p className="mt-4 text-xl text-gray-500">
              Kirti Kamal is a tech enthusiast and visionary community leader
              who is pursuing a Bachelor of Technology in Computer Science and
              Engineering at Trident Academy of Technology. As a Beta Microsoft
              Learn Student Ambassador, Kirti helps fellow students learn new
              technologies and develop their career skills for the future. Kirti
              also leads the Trident ACM Student Chapter and the Trident
              Hackathon Club, organizing engaging workshops, events, and
              hackathons for the tech community. With a strong dedication to
              open-source, Kirti has established an inclusive platform to guide
              newcomers through their tech journey. Kirti has also acquired
              multiple certifications and skills in DevOps, Networking, Linux,
              Docker, and Frontend Development, demonstrating technical
              expertise and a passion for continuous learning. Kirti strives to
              inspire others to explore, innovate, and excel in the
              ever-evolving realm of technology, by blending leadership skills,
              collaboration, and creativity.
            </p>

            <div className="mt-10">
              <img
                className="mx-auto w-48 h-48 rounded-full lg:w-56 lg:h-56"
                src={kk}
                alt=""
              />
            </div>

            <div className="mt-10">
              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-cyan-500 px-8 py-3 text-center text-base font-medium text-white hover:bg-cyan-600"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
