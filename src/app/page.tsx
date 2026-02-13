"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Instagram, ExternalLink, Sun, Moon, Mail, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)
  const [activeSection, setActiveSection] = useState("home")
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [currentCertificate, setCurrentCertificate] = useState(0)

  const certificates = [
    {
      title: "Blockchain Basics",
      image: "/Blockchain Basics.jpg?height=300&width=300",
      issuer: "Coursera",
    },
    {
      title: "Bitcoin for Developers",
      image: "/Bitcoin for Developers.jpg?height=300&width=300",
      issuer: "Saylor Academy",
    },
    {
      title: "Bitcoin for Everybody",
      image: "/Bitcoin for Everybody.jpg?height=300&width=300",
      issuer: "Saylor Academy",
    },
    {
      title: "Full Stack Development",
      image: "/Web developer.jpg?height=300&width=300",
      issuer: "Udemy",
    },
    {
      title: "Ethereum Learner",
      image: "/Learner.png?height=300&width=300",
      issuer: "HackQuest",
    },
    {
      title: "Ethereum Builder",
      image: "/Builder.png?height=300&width=300",
      issuer: "HackQuest",
    },

    {
      title: "Starknet Basecamp 13 Graduate",
      image: "/Starknet.png?height=300&width=300",
      issuer: "Starknet Foundation",
    },
  ]

  const nextCertificate = () => {
    setCurrentCertificate((prev) => (prev + 1) % certificates.length)
  }

  const prevCertificate = () => {
    setCurrentCertificate((prev) => (prev - 1 + certificates.length) % certificates.length)
  }

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Anubhav_Singh_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    console.log("Contact form submitted:", contactForm)
    
    setIsContactModalOpen(false)
    setContactForm({ name: "", email: "", message: "" })
   
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const experiences = [
    {
      company: "Anabi.aI",
      logo: "/Anabi.png?height=60&width=60",
      position: "Software Engineer",
      duration: "March 2024 -August 2024",
      location: "Remote, India",
      description:
        "Developed automated reporting solutions and cross-database integration systems, significantly reducing manual effort and improving data compatibility.Built scalable backend architecture using tRPC, Prisma, and FastAPI while designing access control workflows that enhanced data governance.",
      website: "https://anabi.ai/",
      isActive: false,
    },
    {
      company: "OnlyDust",
      logo: "/OnlyDust.png?height=60&width=60",
      position: "Open Source Contributor",
      duration: "August 2025 - December 2025",
      location: "Remote",
      description:
        "Actively contributed to multiple open source repositories on the OnlyDust platform, successfully merging 20+ pull requests across various projects. Primarily focused on JavaScript and TypeScript contributions, with significant participation during their OSS Wave programs. Additionally contributed to Ctrl+g Projects by creating and providing training data in the form of programming problems across multiple languages including Go, Rust, and C++, helping train frontier AI models for code generation and problem-solving capabilities.",
      website: "https://onlydust.com/",
      isActive: false,
    },
    {
      company: "Drips Network",
      logo: "/Drips.png?height=60&width=60",
      position: "Open Source Contributor",
      duration: "Jan 2026 - Present",
      location: "Remote",
      description:
        "Contributing to multiple open source projects under the Stellar Wave initiative. Successfully merged 5 pull requests during the Day 10 Stellar Wave, working on projects that have received grants from the Stellar Development Foundation. Supporting ecosystem development through code contributions and collaboration with grant-funded teams.",
      website: "https://www.drips.network/",
      isActive: true,
    },
  ]

  const projects = [


    {
      title: "ERC-20 Token",
      description:
        "Production-ready ERC-20 token (Indian Rupee, symbol INR) with full standard compliance: transfer, approve, transferFrom, balance queries, and event emissions. Modern React DApp built with TypeScript and Tailwind CSS, featuring RainbowKit wallet integration, Wagmi hooks for real-time blockchain data, persistent transaction history, and real-time event monitoring. Deployed on Sepolia testnet. Smart contracts developed with Hardhat and OpenZeppelin; frontend includes TokenDashboard, TransferForm, ApprovalManager, BalanceChecker, and TransactionHistory components with glassmorphism UI.",
      image: "/ERC20.png?height=200&width=400",
      demo: "https://erc-20-token-six.vercel.app/",
      github: "https://github.com/anumukul/ERC-20-Token-",
      tags: ["ERC-20", "React", "TypeScript", "Tailwind", "Hardhat", "Solidity"],
    },
    

    {
      title: "Decentralized Healthcare Management System",
      description:
        "Developed a decentralized application (dApp) for secure patient record management on the Ethereum blockchain. Implemented Solidity smart contracts for record access, addition, and provider authorization, with role-based control for patients and owners. Integrated Ethers.js for blockchain interaction, React.js for the user interface, and Hardhat for deployment and testing.",
      image: "/Healthcare.png?height=200&width=400",
      demo: "https://health-care-dapp.vercel.app/",
      github: "https://github.com/anumukul/healthCare-Dapp",
      tags: ["Ethereum", "Healthcare", "Reactjs", "Solidity"],
    },

    {
      title: "Decentrazlized Exchange",
      description:
        "Built a decentralized exchange (DEX) enabling users to connect MetaMask wallets and seamlessly swap ERC-20 tokens on the Ethereum blockchain. Utilized Ethers.js for reliable blockchain interactions and Hardhat for efficient smart contract development and deployment. Designed a secure, gas-optimized frontend with React to ensure a smooth and intuitive user experience.",
      image: "/DEX.png?height=200&width=400",
      demo: "https://decentralized-exchange-peach.vercel.app/",
      github: "https://decentralized-exchange-peach.vercel.app/",
      tags: ["Reactjs", "Ethereum", "Soldity"],
    },

    {
      title: "Staking Protocol",
      description:
        "A decentralized staking platform that allows users to stake ERC20 tokens and earn rewards on the Ethereum Sepolia testnet. Implemented secure Solidity smart contracts with reentrancy protection, automatic reward calculation, and continuous distribution model. Built a modern Next.js frontend with RainbowKit for wallet connection, Wagmi hooks for contract interactions, and real-time balance and reward tracking.",
      image: "/Staking.png?height=200&width=400",
      demo: "https://staking-project-rosy.vercel.app/",
      github: "https://github.com/anumukul/Staking-Project-",
      tags: ["NextJs", "Solidity", "Ethereum", "Wagmi", "TypeScript"],
    },

    {
      title: "VoteOnChain",
      description:
        "An advanced on-chain governance dApp for Ethereum that enables users to create proposals, vote with token balance or delegated power, and execute outcomes on the Sepolia testnet. Built with Solidity smart contracts featuring ERC20 governance tokens, voting system with quorum requirements, and optional target contract execution. Developed a modern Next.js frontend with RainbowKit, Wagmi, and Viem for seamless wallet integration, proposal management, delegation system, and real-time voting results.",
      image: "/VoteOnchain.png?height=200&width=400",
      demo: "https://vote-on-chain.vercel.app/",
      github: "https://github.com/anumukul/VoteOnChain",
      tags: ["NextJs", "Solidity", "Ethereum", "Hardhat", "TypeScript", "Wagmi"],
    },

    {
      title: "Uniswap V1 Clone",
      description:
        "A complete recreation of Uniswap V1, the first version of the popular decentralized exchange protocol. Converted the original Vyper contracts to Solidity while maintaining exact functionality and economic model. Implemented core features including token swaps using constant product formula (x * y = k), liquidity provision and removal, exchange creation via factory pattern, and 0.3% trading fee distribution. Built a modern Next.js frontend with Wagmi and Viem for seamless wallet integration, real-time price calculations, and comprehensive liquidity management interface.",
      image: "/UniswapV1.png?height=200&width=400",
      demo: "https://uniswap-v1-clone-ruby.vercel.app/",
      github: "https://github.com/anumukul/Uniswap-v1-Clone",
      tags: ["NextJs", "Solidity", "Ethereum", "DeFi", "TypeScript", "Wagmi"],
    },
    {
      title: "NFT Forge",
      description:
        "Full-stack NFT collection platform with an ERC721 smart contract featuring four rarity tiers (Common, Rare, Epic, Legendary), whitelist and Dutch auction minting, and in-contract staking. Built with Solidity and OpenZeppelin; max supply 1000 with weighted random rarity, EIP-2981 royalties, pause and emergency stop. Next.js frontend (App Router, TypeScript, Tailwind, shadcn/ui) with RainbowKit/Wagmi for wallet connection, pages for mint (public/whitelist/auction), my NFTs, staking, collection, auction, stats, and owner admin dashboard. Deployed on Sepolia.",
      image: "/NFTForge.png?height=200&width=400",
      demo: "https://nft-forge-six.vercel.app/",
      github: "https://github.com/anumukul/NFTForge",
      tags: ["NextJs", "Solidity", "ERC721", "TypeScript", "Hardhat", "Wagmi"],
    },
    
   
    
  ]

  const skills = [
    { name: "Ethereum", level: 90, category: "Blockchain" },
    { name: "Solidity", level: 80, category: "Blockchain" },
    { name: "DeFi", level: 90, category: "Blockchain" },
    { name: "React JS", level: 70, category: "Frontend" },
    { name: "Next.js", level: 70, category: "Frontend" },
    { name: "TypeScript", level: 70, category: "Frontend" },
    { name: "JavaScript", level: 80, category: "Frontend" },
    { name: "Node.js", level: 70, category: "Backend" },
    { name: "Express.js", level: 60, category: "Backend" },
    { name: "GIT and Github", level: 70, category: "Tools" },
    { name: "HTML", level: 60, category: "Frontend" },
    { name: "CSS", level: 50, category: "Frontend" },
  ]

  const education = {
    institution: "Indian Institute of Technology (ISM), Dhanbad",
    logo: "/IIT.jpg?height=80&width=80",
    degree: "Bachelor of Technology (BTech)",
    duration: "Dec 2021 - May 2025",
    coursework: ["Data structures and algorithms (CSE201)", "Principles of Blockchain Technologies (CSO506)"],
  }

  const hackathons: Array<{
    title: string
    logo: string
    projectTitle: string
    projectDescription: string
    projectImage: string
    github: string
    demo: string
  }> = [
    {
      title: "EthGlobal New Delhi 2025",
      logo: "/EthGlobal.jpeg?height=60&width=60",
      projectTitle: "ROSCA-Guard",
      projectDescription:
        "A privacy-preserving identity verification platform for decentralized Rotating Savings and Credit Associations (ROSCAs) powered by Self Protocol and PYUSD. Revolutionizes traditional rotating savings circles by combining blockchain technology with zero-knowledge identity verification. Features include zero-knowledge KYC using Self Protocol (Passport & Aadhaar support), PYUSD integration for stablecoin-based automated payments, cross-chain architecture with KYC on Celo and ROSCA operations on Ethereum, smart contract automation, reputation system for merit-based payout selection, and DeFi yield generation on pooled funds.",
      projectImage: "/ROSCA.png?height=200&width=400",
      github: "https://github.com/anumukul/ROSCA-Guard",
      demo: "https://rosca-guard.vercel.app/",
    },
    {
      title: "Somnia DeFi Hackathon 2025",
      logo: "/Somnia.jpg?height=60&width=60",
      projectTitle: "PixelVerse",
      projectDescription:
        "A real-time collaborative NFT canvas platform with live analytics overlay, deployed on the Somnia blockchain. Enables multiple users to collaborate simultaneously on a shared pixel canvas, creating unique NFT artworks together. Features real-time synchronization, live analytics dashboard showing participation metrics, NFT minting capabilities, and seamless blockchain integration for transparent ownership and trading.",
      projectImage: "/PixelVerse.png?height=200&width=400",
      github: "https://github.com/anumukul/PixelVerse",
      demo: "https://pixel-verse-hazel.vercel.app/",
    },
    {
      title: "Movement M1 Hackathon 2025",
      logo: "/Movement.jpeg?height=60&width=60",
      projectTitle: "StreamGift",
      projectDescription:
        "A social DeFi primitive that combines real-time salary streaming with viral social gifting. Users can stream tokens to anyone using just their Twitter handle or email address, and recipients can claim accumulated funds instantly with zero gas fees. Built on Movement Network using Move language smart contracts, featuring embedded wallets via Privy, gasless transactions through Shinami sponsorship, and seamless social verification. Enables continuous money streams to any Twitter handle or email with recipients claiming anytime without needing a wallet.",
      projectImage: "/StreamGift.png?height=200&width=400",
      github: "https://github.com/anumukul/StreamGift",
      demo: "#",
    },
    {
      title: "EthGlobal HackMoney 2026",
      logo: "/EthGlobal.jpeg?height=60&width=60",
      projectTitle: "Abyss Protocol",
      projectDescription:
        "A comprehensive decentralized finance (DeFi) trading platform built on the Sui blockchain, featuring real-time market analytics, advanced trading tools, multi-chain intelligence, and privacy-preserving intent-based trading. Integrates with DeepBook V3, Mysten Seal, and NEAR Protocol. Features include Telegram bot for natural language trading commands, professional trading terminal with instant swaps, limit orders, flash arbitrage, and margin trading, AI-powered multi-chain agent supporting 15+ blockchains, real-time market indexer with DeepBook V3 analytics, zkLogin authentication for passwordless access, and private intent trading with encrypted conditional strategies.",
      projectImage: "/Abyss.png?height=200&width=400",
      github: "https://github.com/Naveen-6087/sui-tma",
      demo: "https://sui-tma.vercel.app/",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? "dark" : ""}`}>
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 text-white min-h-screen">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 right-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-slate-900/80 border-b border-slate-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    AS
                  </div>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  {["Home", "Experience", "Hackathons", "Projects", "Education", "Skills", "Certificates"].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                        activeSection === item.toLowerCase()
                          ? "text-blue-400 bg-blue-500/20 shadow-lg"
                          : "text-gray-300 hover:text-blue-400 hover:bg-slate-800/50"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="ml-4 hover:bg-slate-800/50 text-gray-300 hover:text-blue-400"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </nav>

        <section id="home" className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[90vh]">
              <div className="space-y-8 z-10 relative">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm text-blue-300">Available for new opportunities</span>
                  </div>

                  <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                      Anubhav
                    </span>
                    <br />
                    <span className="text-white">Singh</span>
                  </h1>

                  <p className="text-2xl text-blue-300 font-medium">
                    I build stuffs for Web3 <span className="text-red-400">❤️</span>
                  </p>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                  Hey there! I&apos;m a blockchain developer passionate about DeFi protocols, Web3 innovation, and
                  decentralized technologies. My goal? Building software that doesn&apos;t just function—but transforms how
                  we interact with the digital world. Ready to connect and craft something revolutionary together.
                </p>

                <div className="flex space-x-4">
                  <Link
                    href="https://www.linkedin.com/in/anubhav-singh-59762322a/"
                    className="group p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                  >
                    <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </Link>
                  <Link
                    href="https://github.com/anumukul"
                    className="group p-4 bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl hover:from-slate-600 hover:to-slate-700 transition-all duration-300 shadow-lg hover:shadow-slate-500/25 hover:scale-105"
                  >
                    <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </Link>
                  <Link
                    href="https://instagram.com"
                    className="group p-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl hover:from-pink-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-pink-500/25 hover:scale-105"
                  >
                    <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </Link>
                  <Link
                    href="https://x.com/AnubhavSingh456"
                    className="group p-4 bg-gradient-to-r from-slate-800 to-black rounded-2xl hover:from-slate-700 hover:to-slate-900 transition-all duration-300 shadow-lg hover:shadow-slate-500/25 hover:scale-105"
                  >
                    <svg
                      className="w-6 h-6 group-hover:scale-110 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={() => setIsContactModalOpen(true)}
                    className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                  >
                    <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Contact Me
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => scrollToSection("projects")}
                    className="border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 px-8 py-4 rounded-2xl font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-blue-400"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Projects
                  </Button>
                </div>
              </div>

              <div className="relative lg:justify-self-end">
                <div className="relative w-96 h-96 mx-auto">
                  <div
                    className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-spin"
                    style={{ animationDuration: "20s" }}
                  ></div>
                  <div
                    className="absolute inset-4 rounded-full border-2 border-cyan-500/20 animate-spin"
                    style={{ animationDuration: "15s", animationDirection: "reverse" }}
                  ></div>
                  <div
                    className="absolute inset-8 rounded-full border-2 border-indigo-500/20 animate-spin"
                    style={{ animationDuration: "10s" }}
                  ></div>

                  <div className="absolute inset-12 bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-600 rounded-3xl p-1 shadow-2xl">
                    <div className="w-full h-full bg-slate-900 rounded-3xl overflow-hidden">
                      <Image
                        src="/Anubhav.jpg?height=320&width=320"
                        alt="Anubhav Singh"
                        width={320}
                        height={320}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce"
                    style={{ animationDelay: "1s" }}
                  >
                    <span className="text-2xl">🚀</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {isContactModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsContactModalOpen(false)}
            ></div>

            <div className="relative bg-white text-gray-900 rounded-3xl p-8 w-full max-w-md mx-4 shadow-2xl">
              <div className="text-center pb-4">
                <h2 className="text-2xl font-bold text-blue-400 mb-2">Contact Me</h2>
                <p className="text-sm text-gray-600">
                  Email:{" "}
                  <a
                    href="mailto:ayushranjanofficial27@gmail.com"
                    className="text-blue-400 hover:text-blue-600 hover:underline transition-all duration-200 cursor-pointer"
                  >
                    anumukul009@gmail.com
                  </a>
                </p>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-gray-700 font-medium">
                    Name :
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-blue-50 border-0 rounded-xl px-4 py-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-gray-700 font-medium">
                    Email :
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-blue-50 border-0 rounded-xl px-4 py-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-gray-700 font-medium">
                    Message :
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full bg-blue-50 border-0 rounded-xl px-4 py-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-200 resize-none focus:outline-none"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    Send
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setIsContactModalOpen(false)}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 rounded-full transition-all duration-300"
                  >
                    Close
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                Experience
              </h2>
              <p className="text-gray-400 text-lg">My professional journey in Web3 and blockchain development</p>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="group bg-slate-800/50 border-slate-700/50 backdrop-blur-xl hover:bg-slate-800/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-0.5">
                          <div className="w-full h-full bg-slate-800 rounded-2xl flex items-center justify-center">
                            <Image
                              src={exp.logo || "/placeholder.svg"}
                              alt={exp.company}
                              width={40}
                              height={40}
                              className="rounded-lg"
                            />
                          </div>
                        </div>
                        {exp.isActive && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-blue-400 mb-2 group-hover:text-cyan-400 transition-colors">
                              {exp.position}
                            </h3>
                            <div className="flex items-center space-x-4 text-gray-300 mb-2">
                              <span className="font-semibold">{exp.company}</span>
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1 text-gray-400">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.duration}</span>
                            </div>
                          </div>
                          {exp.isActive && (
                            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Current</Badge>
                          )}
                        </div>

                        <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                        <div className="flex space-x-4">
                          <Link
                            href={exp.website}
                            className="inline-flex items-center text-blue-400 hover:text-cyan-400 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Website
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="hackathons" className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                Hackathons
              </h2>
              <p className="text-gray-400 text-lg">Competitive projects built under time constraints</p>
            </div>

            <div className="space-y-8">
              {hackathons.map((hackathon, index) => (
                <Card
                  key={index}
                  className="group bg-slate-800/50 border-slate-700/50 backdrop-blur-xl hover:bg-slate-800/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 md:items-start">
                      {/* Left half: logo + hackathon title (row), then project image */}
                      <div className="flex flex-col gap-4 md:min-h-0">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden bg-slate-700/80 border border-slate-600/50 flex-shrink-0">
                            <Image
                              src={hackathon.logo || "/placeholder.svg"}
                              alt={hackathon.title}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="text-lg md:text-xl font-bold text-blue-400 group-hover:text-cyan-400 transition-colors leading-tight">
                            {hackathon.title}
                          </h3>
                        </div>
                        <div className="relative w-full aspect-square max-h-64 md:max-h-[280px] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600/50 flex-shrink-0">
                          <Image
                            src={hackathon.projectImage || "/placeholder.svg"}
                            alt={hackathon.projectTitle}
                            width={400}
                            height={400}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                      {/* Right half: project title, description, buttons */}
                      <div className="flex flex-col min-w-0">
                        <h4 className="text-xl md:text-2xl font-semibold text-white leading-tight mb-3">
                          {hackathon.projectTitle}
                        </h4>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base flex-1">
                          {hackathon.projectDescription}
                        </p>
                        <div className="flex gap-3 mt-6 pt-4 border-t border-slate-700/50">
                          <Link href={hackathon.demo} target="_blank" rel="noopener noreferrer">
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white rounded-xl group/btn"
                            >
                              <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                              Demo
                            </Button>
                          </Link>
                          <Link href={hackathon.github} target="_blank" rel="noopener noreferrer">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-slate-600 text-gray-300 hover:bg-slate-700/50 rounded-xl group/btn"
                            >
                              <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                              Code
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {hackathons.length === 0 && (
                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-xl">
                  <CardContent className="p-12 text-center">
                    <p className="text-gray-400 text-lg">No hackathons added yet. Check back soon!</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                My Projects
              </h2>
              <p className="text-gray-400 text-lg">Blockchain and Web2 applications</p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="group bg-slate-800/50 border-slate-700/50 backdrop-blur-xl overflow-hidden hover:bg-slate-800/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="font-bold text-xl mb-3 text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 text-sm mb-6 leading-relaxed line-clamp-4">{project.description}</p>

                    <div className="flex gap-3">
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white rounded-xl flex-1 group/btn"
                        >
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                          Demo
                        </Button>
                      </Link>
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-slate-600 text-gray-300 hover:bg-slate-700/50 rounded-xl flex-1 group/btn"
                        >
                          <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                          Code
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                Education
              </h2>
            </div>

            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-xl p-8 max-w-5xl mx-auto hover:bg-slate-800/70 transition-all duration-500">
              <div className="flex items-start space-x-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-0.5 flex-shrink-0 overflow-hidden">
                  <div className="w-full h-full bg-slate-800 rounded-2xl overflow-hidden">
                    <Image
                      src={education.logo || "/placeholder.svg"}
                      alt={education.institution}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-blue-400 mb-6">{education.institution}</h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <p className="text-lg mb-2">
                        <span className="font-semibold text-white">Course:</span>{" "}
                        <span className="text-gray-300">{education.degree}</span>
                      </p>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{education.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-4 text-lg">Relevant Computer Science Courseworks:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {education.coursework.map((course, index) => (
                        <div key={index} className="flex items-center space-x-2 text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                          <span className="text-sm">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                Skills
              </h2>
              <p className="text-gray-400 text-lg">Technical expertise across blockchain and web development</p>
            </div>

            <div className="max-w-4xl mx-auto">
              {["Blockchain", "Frontend", "Backend", "Tools"].map((category) => (
                <div key={category} className="mb-12">
                  <h3 className="text-2xl font-bold text-white mb-6">{category}</h3>
                  <div className="space-y-6">
                    {skills
                      .filter((skill) => skill.category === category)
                      .map((skill, index) => (
                        <div key={index} className="group">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-300 font-medium">{skill.name}</span>
                            <span className="text-blue-400 font-semibold">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out group-hover:from-blue-400 group-hover:to-cyan-400"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                Certificates
              </h2>
              <p className="text-gray-400 text-lg">Certifications in blockchain development</p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-blue-400 text-xl font-semibold bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50">
                  {currentCertificate + 1}/{certificates.length}
                </span>
              </div>

              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-xl p-8 hover:bg-slate-800/70 transition-all duration-500">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">{certificates[currentCertificate].title}</h3>
                  <p className="text-gray-300">Issued by {certificates[currentCertificate].issuer}</p>
                </div>
                <div className="aspect-square bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center border border-slate-700/50">
                  <Image
                    src={certificates[currentCertificate].image || "/placeholder.svg"}
                    alt={certificates[currentCertificate].title}
                    width={300}
                    height={300}
                    className="rounded-xl"
                  />
                </div>
              </Card>

              <div className="flex justify-center space-x-4 mt-8">
                <Button
                  onClick={prevCertificate}
                  variant="ghost"
                  size="icon"
                  className="text-blue-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-full w-12 h-12"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </Button>
                <Button
                  onClick={nextCertificate}
                  variant="ghost"
                  size="icon"
                  className="text-blue-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-full w-12 h-12"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="fixed bottom-8 right-8 z-50">
          <Button
            onClick={downloadResume}
            className="group bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110"
            size="lg"
          >
            <svg
              className="w-6 h-6 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="ml-2 font-semibold">Resume</span>
          </Button>
        </div>

        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold">
                  AS
                </div>
                <div>
                  <p className="text-white font-semibold">Anubhav</p>
                  <p className="text-gray-400 text-sm">Singh</p>
                </div>
              </div>

              <div className="flex space-x-6">
                <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Privacy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Terms
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-700/50 text-center">
              <p className="text-gray-400">© 2025 Anubhav Singh. Built with Next.js, Tailwind CSS, and lots of ☕</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}