"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com/yourusername", label: "Twitter" },
    { icon: FaEnvelope, href: "mailto:yad.4322@gmail.com", label: "Email" },
  ];

  return (
    <footer className="border-t border-gray-800 bg-black/30 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="mb-8 flex flex-wrap justify-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="mb-8 flex justify-center gap-6">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-white"
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <div className="text-center text-xs text-gray-500">
          © {currentYear} Yad Hussein. All rights reserved.
        </div>
      </div>
    </footer>
  );
}