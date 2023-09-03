import Img from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";
import Img4 from "../assets/img4.jpg";
import Img5 from "../assets/img5.jpg";

import Stars from "../assets/Group 3.svg";
import Service1 from "../assets/1.png";
import Service2 from "../assets/2.png";
import Service3 from "../assets/3.png";
import Service4 from "../assets/4.png";
import Service5 from "../assets/5.png";

import caseStudy1 from "../assets/CS1.png";
import caseStudy2 from "../assets/CaseStudy2.svg";
import caseStudy3 from "../assets/CaseStudy3.svg";

import Bg1 from "../assets/Rectangle1.svg";
import Logo1 from "../assets/developApp1.svg";

import Bg2 from "../assets/Rectangle2.svg";
import Logo2 from '../assets/developApp2.svg'

import Bg3 from "../assets/Rectangle3.svg";
import Logo3 from '../assets/developApp3.svg'

import Bg4 from "../assets/Rectangle4.svg";
import Logo4 from '../assets/developApp4.svg'

import Bg5 from "../assets/Rectangle5.svg";
import Logo5 from '../assets/developApp5.svg'

import Bg6 from "../assets/Rectangle6.svg";
import Logo6 from '../assets/developApp6.svg'

export const data = [
  {
    id: 1,
    name: "puel1",
    Profession: "Engineer",
    Testimonial:
      "Hi ,Lorem augue te feugiat lacus, quis consequat lectus. Proin pellentesque rhoncus condimentum. ",
    Image: Img,
    Rating: Stars,
  },
  {
    id: 2,
    name: "puel2",
    Profession: "Engineer",
    Testimonial:
      "2nd Loremero suscipit, madrerit augue tempor quis. Suspendisse quis elit eu tellus convallis volutpat. Vivamus ac feugiat lacus, quis consequat lectus. Proin pellentesque rhoncus condimentum. ",
    Image: Img2,
    Rating: Stars,
  },
  {
    id: 3,
    name: "puel3",
    Profession: "Engineer",
    Testimonial:
      "3rd ..um erat, vel hendrerit augue tempor quis. Suspendisse quis elit eu tellus convallis volutpat. Vivamus ac feugiat lacus, quis consequat lectus. Proin pellentesque rhoncus condimentum.",
    Image: Img3,
    Rating: Stars,
  },
  {
    id: 4,
    name: "puel4",
    Profession: "Engineer",
    Testimonial: "4th...Lorem ipsum dolor sit amet, s condimentum.",
    Image: Img4,
    Rating: Stars,
  },
  {
    id: 4,
    name: "puel5",
    Profession: "Engineer",
    Testimonial:
      "4th...imentum erat, vel hendrerit augue tempor quis. Suspendisse quis elillentesque rhoncus condimentum.",
    Image: Img5,
    Rating: Stars,
  },
];

export const services = [
  {
    id: 1,
    serviceName: "Application Development",
    serviceDesc:
      "Whether you are a small agency or a big one. Our influencer database will help you get better results for your clients.",
    Image: Service1,
  },
  {
    id: 2,
    serviceName: "Mobile Application Development",
    serviceDesc:
      "Whether you are a small agency or a big one. Our influencer database will help you get better results for your clients.",
    Image: Service2,
  },
  {
    id: 3,
    serviceName: "Web Design & Development",
    serviceDesc:
      "Whether you are a small agency or a big one. Our influencer database will help you get better results for your clients.",

    Image: Service3,
  },
  {
    id: 4,
    serviceName: "Software Testing Services",
    serviceDesc:
      "Whether you are a small agency or a big one. Our influencer database will help you get better results for your clients.",

    Image: Service4,
  },
  {
    id: 5,
    serviceName: "Software Testing",
    serviceDesc:
      "Whether you are a small agency or a big one. Our influencer database will help you get better results for your clients.",

    Image: Service5,
  },
];

export const casestudies = [
  {
    id: 1,
    caseStudyHeading: "Website Design for SCFC Canada",
    caseStudyDesc:
      "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    Image: caseStudy1,
    color: "#F5EEF8",
  },
  {
    id: 2,
    caseStudyHeading: "Website Design for SCFC Canada ",
    caseStudyDesc:
      "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",

    Image: caseStudy2,
    color: "#D1F2EB",
  },
  {
    id: 3,
    caseStudyHeading: "Website Design for SCFC Canada ",
    caseStudyDesc:
      "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",

    Image: caseStudy3,
    color: "#FDEDEC",
  },
];

export const timeline = [
  {
    id: 1,
    stepNo: "1",
    timeLineHeading: "Assemble the right team",
    timeLineDesc:
      "We handle all aspects of vetting and choosing the right team that you don't have the time , expertise, or desire to do .",
  },
  {
    id: 2,
    stepNo: "3",
    timeLineHeading: "Team architecture ",
    timeLineDesc:
      "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently .",
  },
  
  {
    id: 3,
    stepNo: "5",
    timeLineHeading: "Code reviews",
    timeLineDesc:
      "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells .",
  },

];

export const timeline2 = [
  {
    id: 1,
    stepNo: "2",
    timeLineHeading: "Sprint planning",
    timeLineDesc:
      "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
  },
  {
    id: 2,
    stepNo: "4",
    timeLineHeading: "Standups & weekly demos",
    timeLineDesc:
      "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
  },

  {
    id: 3,
    stepNo: "6",
    timeLineHeading: "Iterative delivery",
    timeLineDesc:
      "We divide the implementation process into several checkpoints rather than a single deadline.",
  },
];
export const timelineforsmallerscreen = [
  {
    id: 1,
    stepNo: "1",
    timeLineHeading: "Assemble the right team",
    timeLineDesc:
      "We handle all aspects of vetting and choosing the right team that you don't have the time , expertise, or desire to do .",
  },
  {
    id: 2,
    stepNo: "2",
    timeLineHeading: "Sprint planning",
    timeLineDesc:
      "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
  },

  {
    id: 3,
    stepNo: "3",
    timeLineHeading: "Team architecture ",
    timeLineDesc:
      "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently .",
  },

  {
    id: 4,
    stepNo: "4",
    timeLineHeading: "Standups & weekly demos",
    timeLineDesc:
      "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
  },
  {
    id: 5,
    stepNo: "5",
    timeLineHeading: "Code reviews",
    timeLineDesc:
      "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells .",
  },

  {
    id: 6,
    stepNo: "6",
    timeLineHeading: "Iterative delivery",
    timeLineDesc:
      "We divide the implementation process into several checkpoints rather than a single deadline.",
  },
];

export const developmentApproach = [
  {
    id: 1,
    developAppHeading: "UX Driven Engineering",
    developAppDesc:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    developAppBg: Bg1,
    developAppLogo: Logo1,
  },
  {
    id: 2,

    developAppHeading: "Proven Experience and Expertise",
    developAppDesc:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",

    developAppBg: Bg2,
    developAppLogo: Logo2,
  },
  {
    id: 3,
    developAppHeading: "Iterative delivery",
    developAppDesc:"Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    developAppBg: Bg3,
    developAppLogo: Logo3,
  },
  {
    id: 4,
    developAppHeading: "UX Driven Engineering",
    developAppDesc:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    developAppBg: Bg4,
    developAppLogo: Logo4,
  },
  {
    id: 5,

    developAppHeading: "Proven Experience and Expertise",
    developAppDesc:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",

    developAppBg: Bg5,
    developAppLogo: Logo5,
  },
  {
    id: 6,

    developAppHeading: "Quality Assurance & Testing",
    developAppDesc:"Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    developAppBg: Bg6,
    developAppLogo: Logo6,
  },
];
