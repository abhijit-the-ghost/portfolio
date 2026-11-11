import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Instagram, Youtube, MapPin } from 'lucide-react';
import { siteConfig } from '../lib/site';
import meImage from '../assets/meImage.jpg';

const socials = [
    { Icon: Github, href: siteConfig.socials.github, label: 'GitHub' },
    { Icon: Linkedin, href: siteConfig.socials.linkedin, label: 'LinkedIn' },
    { Icon: Instagram, href: siteConfig.socials.instagram, label: 'Instagram' },
    { Icon: Youtube, href: siteConfig.socials.youtube, label: 'YouTube' },
];

const Hero = () => (
    <section id="hero" className="relative">
        <div className="relative h-56 sm:h-72 w-full bg-gradient-to-r from-[#0a66c2] via-[#004182] to-[#0a66c2]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.12),_transparent_60%)]" />
        </div>

        <div className="mx-auto max-w-5xl px-6 -mt-20 sm:-mt-24 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="bg-surface/95 backdrop-blur-md rounded-2xl shadow-xl border border-line/60 p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                        <div className="h-28 w-28 sm:h-36 sm:w-36 rounded-2xl overflow-hidden ring-4 ring-surface shadow-lg shadow-black/10">
                            <img src={meImage} alt={siteConfig.name} className="h-full w-full object-cover object-top" />
                        </div>
                    </div>

                    <div className="flex-1 min-w-0">
                        <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-content">{siteConfig.name}</h1>
                        <p className="mt-1.5 text-base sm:text-lg font-medium text-muted leading-snug">{siteConfig.headline}</p>
                        <div className="mt-2 flex items-center gap-1.5 text-sm text-muted"><MapPin className="h-3.5 w-3.5 text-[#0a66c2]" /><span>Based in {siteConfig.location}</span></div>

                        <div className="mt-5 flex flex-wrap gap-2.5">
                            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-[#0a66c2] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#004182] transition-colors">View Work <ArrowRight className="h-3.5 w-3.5" /></a>
                            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2 text-sm font-semibold text-content hover:bg-content/5 transition-colors">Contact</a>
                        </div>

                        <div className="mt-5 flex gap-2.5">
                            {socials.map(s => (
                                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="rounded-xl border border-line bg-surface p-2 text-muted hover:text-content hover:border-[#0a66c2]/40 transition-colors"><s.Icon className="h-4 w-4" /></a>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
);

export default Hero;
