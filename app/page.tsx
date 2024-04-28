import React from "react";

const HomePageContent = {
  HeroTitle: "Information Systems, Security and Forensics Lab",
  HomeMainParagraph: `The Information Systems, Security, and Forensics (ISSF) laboratory is
          founded on a vision of transferring mathematical and statistical tools
          employed in the signal processing to analyze large-scale data to solve
          challenging problems in the areas of deepfakes, automotive
          cybersecurity, sensor data integrity verification, and multimedia
          forensics. The ISSF lab provides the resources required to train a
          workforce of professionals in the areas of deepfakes, automotive
          cybersecurity, cyber-physical system security, sensor security,
          information security, forensic science, and multimedia processing.
          This lab is equipped with a number of desktop computers and laptops, a
          variety of smartphones, sensors, a Ford Focus vehicle, a test-bed for
          in-vehicle network communication, sound recording equipment, a
          recording studio with controlled reverberations, microphone
          calibration equipment, digital video cameras, and a repository of
          software for acquiring in-vehicle network (IVN) traffic, tools to
          analyze large scale data and manipulating digital media.`,
  LabNews: [
    "07/23: Congratulations Rafi Ud Daula Refat (now Dr. Rafi) on successfully defending your PhD dissertation!!!",
    "07/23: Congratulations Abdul Rahman Abu Elkhalil (now Dr. Abdul) on successfully defending your PhD dissertation!!!",
    "11/22: Congratulations Ali Hassani (now Dr. Ali Hassani) on successfully defending your PhD dissertation!!!",
    "04/21: Congratulations Raghavendar (Raghu) Changalvala (now Dr. Raghavendar (Raghu) Changalvala) on successfully defending your PhD dissertation!!!",
    "04/21: Congratulations Brandon Fedoruk on successfully defending your Master's thesis!!!",
    "03/21: Our paper on cryptojacking was accepted in DSN 2021.",
    "03/21: Our paper on automotive cybersecurity was accepted in Intelligent Systems Conference 2021 (IntelliSys'21).  ",
    "03/21: Malik and Mohammadi receives NSF grant for $478K to secure connected autonomous vehicles against cyber threats.",
    "08/20: Congratulations Dr. Azeem Hafeez on accepting a faculty position in the Department of Electrical and Computer Engineering at the University of Michigan - Dearborn!!!",
    "07/20: Our Dark Firmware paper was accepted in RAID 2020.",
    "Dr. Malik gave keynote talk during International Workshop Cybersecurity of Connected & Autonomous Vehicle: Challenges and Opportunities held by the Center of Excellence in Information Assurance at the King Saud University on December 2, 2020",
    "Dr. Malik gave keynote talk during International Conference on Digitalization and Cyber Security 2020 during June 30 & July 1 by the Virtual University of Pakistan  ",
    "Azeem Hafeez successfully defended his PhD dissertation. Congratulations Dr. Azeem Hafeez!",
    "Dr. Malik gave keynote talk titled “Cybersecurity for Connected Autonomous Vehicles: Threats & Solutions,” during 2nd Int. Conference on Communication Technologies 2019 (ComTech-2019) at the Military College of Signals, National University of Science and Technology, Pakistan. ",
  ],
};

function Home() {
  return (
    <div>
      <div className="text-center max-h-80 h-80 text-lg md:text-3xl content-center">
        {HomePageContent.HeroTitle}
      </div>
      <div className="md:text-lg text-sm my-8">
        <p>{HomePageContent.HomeMainParagraph}</p>
      </div>
      <div>
        <h1 className="text-3xl">Lab News:</h1>
        <ul className="list-disc md:text-lg text-sm list-inside">
          {HomePageContent.LabNews.map((News, index) => (
            <li className="my-4" key={index}>{News}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
