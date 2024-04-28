import React from "react";
import Image from "next/image";
import Link from "next/link";

const MemberPageContent = {
  MemberTitle: "Members",
  cName: "text-center max-h-80 h-80 text-2xl md:text-4xl content-center",
  Faculty: {
    FacultyImage: "/Malik.png",
    alt: "Picture of Professor Malik",
    width: 350,
    height: 350,
  },
  CurrentPhd: [
    {
      Name: "Hashim Ali (Winter'21 - Present)",
      discription:
        "Ph.D. candidate in the Department of Electrical & Computer Engineering at the University of Michigan Dearborn. ",
    },
    {
      Name: "Abdul Karim Seikh(Winter'2023 - Present)",
      discription:
        "Ph.D. student in the Department of Electrical & Computer Engineering at the University of Michigan Dearborn.",
    },
  ],
  PastPhd: [
    {
        Name: "Dr. Abdul Rehman Abu Elkhalil (Summer'2023)",
        discription: "Cybersecurity Engineer at Ford Motor Company, Michigan, USA."
    },
    {
        Name: "Dr. Rafi Ud Daula Refat (Summer'2023)",
        discription: "Software Engineer at Ford Motor Company, Michigan, USA."
    },
    {
        Name: "Dr. Ali Hassani",
        discription: "AI/ML Engineer, Ford Motor Company, Michigan, USA."
    },
    {
        Name: "Dr. Muteb Aljasem (Fall'21)",
        discription: "Faculty in the Bowling Green State University, Ohio, USA."
    },
    {
        Name: "Dr. Raghavendar Changalvala (Winter'21)",
        discription: "Global Manager at Stellantis."
    },
    {
        Name: "Dr. Azeem Hafeez (Winter'20)",
        discription: "Faculty in the Department of Electrical and Computer Engineering at the University of Michigan - Dearborn."
    },
    {
        Name: "Dr. Ali Javed (Fall'16)",
        discription: "Assistant Professor at the University of Engineering and Technology, Texila, Pakistan."
    },
    {
        Name: "Dr. Hong Zaho (Winter'13)",
        discription: "Radar Feature Algorithm Engineer at Veoneer."
    },
    {
        Name: "Dr. Qurratul Ain Minhas (Winter'14)",
        discription: "Assistant Professor in the Department of Electronics at the Quaid-i-Azam University, Islamabad, Pakistan."
    },
    {
        Name: "Dr. Hammad Dilpazir (Winter'15)",
        discription: "Assistant Professor in the Department of Electronics at the Quaid-i-Azam University, Islamabad, Pakistan."
    }
  ]
};

function MemberPage() {
  return (
    <div>
      <div className={MemberPageContent.cName}>
        {MemberPageContent.MemberTitle}
      </div>
      <div>
        <h1 className="text-xl md:text-3xl mt-4">Faculty:</h1>
        <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 grid-cols-1 gap-1 justify-around mt-4 place-items-center">
          <Image
            src={MemberPageContent.Faculty.FacultyImage}
            alt={MemberPageContent.Faculty.alt}
            width={MemberPageContent.Faculty.height}
            height={MemberPageContent.Faculty.height}
            priority={true}
            className="place-content-center"
          />
          <div className="mt-4">
            <p>Hafiz Malik</p>
            <p>Professor</p>
            <p>Department of Electrical and Computer Engineering</p>
            <p>University of Michigan – Dearborn</p>
            <p>Dearborn, MI 48128</p>
            <p>Office: 2065 ELB</p>
            <p>Phone: 313-593-5677</p>
            <p>
              URL:
              <Link href="http://www-personal.umich.edu/~hafiz">
                http://www-personal.umich.edu/~hafiz
              </Link>
            </p>
            <p>Email: my-last-name at umich dot edu</p>
          </div>
        </div>
        <h1 className="text-xl md:text-3xl mt-14">Current Ph.D. Students:</h1>
        <div>
            <ul className="list-disc md:text-lg text-sm">
                {MemberPageContent.CurrentPhd.map((item, index) => (
                    <li key={index} className="mt-4 list-inside">{item.Name}<br/><p>{item.discription}</p></li>
                ))}
            </ul>
        </div>
        <h1 className="text-xl md:text-3xl mt-4">Past PhD Students:</h1>
        <div>
        <ul className="list-disc md:text-lg text-sm">
                {MemberPageContent.PastPhd.map((item, index) => (
                    <li key={index} className="mt-4 list-inside">{item.Name}<br/><p>{item.discription}</p></li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
}

export default MemberPage;
