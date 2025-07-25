import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

import socialApp from "../assets/images/social-media.png";
import BkashMerchant from "../assets/images/bkash-merchant.png"
import Weather from "../assets/images/weather.png"
import TelegramBot from "../assets/images/telegram_bot.png"
import SslCommerzImage from "../assets/images/sslcommerz.png";

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const projects = [
    {
      title: "SocialSphere - A Modern Social Media App",
      description:
        "SocialSphere is a feature-rich social media application that enables users to connect, share content, and interact seamlessly. Built with the latest web technologies, it offers real-time updates, media sharing, and an intuitive UI.",
      tags: ["React", "Node.js", "MongoDB", "WebSockets"],
      links: {
        github: "https://github.com/sajib-bd/social-media",
        demo: "https://matrix-media.vercel.app/",
      },
      image: socialApp,
      featured: true,
    },
    {
      title: "bKash Merchant - Node.js & React Payment Integration",
      description:
        "bKash Merchant is a payment integration app using bKash API that allows merchants to handle payments securely and efficiently. Built with Node.js backend and React frontend to provide smooth transaction management.",
      tags: ["React", "Node.js", "Express", "REST API"],
      links: {
        github: "https://github.com/SajibHub/bkash-merchant",
        demo: "https://bkash-merchant-i3su.vercel.app/",
      },
      image: BkashMerchant,
      featured: false,
    },
    {
      title: "SSLCommerz Payment Gateway Integration",
      description:
        "A complete SSLCommerz sandbox integration using Node.js and Express with a clean HTML/CSS frontend. Users can enter an amount, choose from dynamic payment options (Visa, Mastercard, bKash, Nagad, etc.), and get real-time payment validation and feedback.",
      tags: ["Node.js", "Express", "SSLCommerz", "HTML", "JavaScript"],
      links: {
        github: "https://github.com/SajibHub/sslcommerz", // Replace with your repo link
        demo: "https://sslcommerz.sajib.xyz/"
      },
      image: SslCommerzImage, // Add your imported image for this project
      featured: false
    },
    {
      title: "WeatherApp - Real-time Weather Forecast",
      description:
        "WeatherApp provides accurate, real-time weather updates for any location. Built with React and styled with Tailwind CSS, it fetches data from external weather APIs to display current conditions and forecasts with a clean, responsive UI.",
      tags: ["React", "Tailwind CSS", "API"],
      links: {
        github: "https://github.com/SajibHub",
        demo: "https://weather.sajib.xyz/",
      },
      image: Weather,
      featured: false,
    },
    {
      title: "Unknown Wallet Telegram Bot",
      description:
        "A versatile Telegram bot that allows users to get their ID, check balance, set PIN, send money, view transaction history, and earn bonuses via referral. Supports sending money and sending messages seamlessly through the Telegram interface.",
      tags: ["Telegram Bot", "Node.js", "Bot API", "Payment", "Referral System"],
      links: {
        demo: "https://t.me/unknow_wallet_bot",
        github: null, // Add GitHub repo link if available
      },
      image: TelegramBot, // Add bot image or icon if available
      featured: false,
    },
  ];


  const location = useLocation()

  return (
    <>
      <Helmet>
        <title>Projects – Mohammad Sajib | MERN Stack Portfolio</title>
        <meta name="description" content="Browse full-stack and backend projects developed by Mohammad Sajib using the MERN stack and REST APIs." />
        <meta name="keywords" content="Portfolio, projects, MERN stack, REST API, Node.js, React apps, Sajib work" />
        <link rel="canonical" href={`https://sajib.xyz${location.pathname}`} />
      </Helmet>
      <div className="pt-40 min-h-screen bg-[#0f1629] p-8 text-slate-100">
        <div className="max-w-7xl mx-auto space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg"
            >
              {/* Image Section */}
              <div className="md:w-1/2 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Text Section */}
              <Card className="md:w-1/2 bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6">
                <MacOsButtons />

                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                        Featured Project
                      </div>
                      <CardTitle className="text-slate-100 text-3xl font-bold">
                        {project.title}
                      </CardTitle>
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.links.github}
                        className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={22} />
                      </a>
                      <a
                        href={project.links.demo}
                        className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={22} />
                      </a>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="mt-4">
                  <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectShowcase;
