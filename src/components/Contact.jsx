import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Github, Instagram, Youtube, Linkedin } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submission
        setTimeout(() => {
            setIsSubmitting(false);
            setFormState({ name: '', email: '', message: '' });
            alert('Message transmitted to the void (and Ghost).');
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-black/80 border border-ghost-accent/30 rounded-lg p-1 shadow-[0_0_50px_rgba(0,243,255,0.1)]"
                >
                    <div className="bg-ghost-dark/90 p-8 rounded border border-ghost-light/5">
                        <div className="flex items-center justify-between mb-8 border-b border-ghost-muted pb-4">
                            <h2 className="text-2xl font-bold font-mono text-ghost-accent flex items-center gap-2">
                                <span className="animate-pulse">_</span> ESTABLISH_UPLINK
                            </h2>
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <p className="text-gray-400 mb-8 font-mono text-sm leading-relaxed">
                  // Ready to start a new quest? <br />
                  // Or just want to chat about anime? <br />
                  // Send a transmission below.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3 text-gray-400 hover:text-ghost-accent transition-colors">
                                        <Mail className="w-5 h-5" />
                                        <span className="font-mono text-sm">abhijitguragain546@gmail.com</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-400 hover:text-ghost-accent transition-colors">
                                        <MapPin className="w-5 h-5" />
                                        <span className="font-mono text-sm">Kathmandu, Nepal</span>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    {[
                                        { Icon: Github, url: 'https://github.com/abhijit-the-ghost/', label: 'GitHub' },
                                        { Icon: Instagram, url: 'https://instagram.com/ig_abhijit.4/', label: 'Instagram' },
                                        { Icon: Youtube, url: 'https://youtube.com/@abhijitguragain8639', label: 'YouTube' },
                                        { Icon: Linkedin, url: 'https://linkedin.com/in/abhijit-guragain/', label: 'LinkedIn' }
                                    ].map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            className="p-3 bg-ghost-muted rounded hover:bg-ghost-accent hover:text-ghost-dark transition-all duration-300"
                                        >
                                            <social.Icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Contact Form - Temporarily Commented Out */}
                            {/* <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-mono text-ghost-secondary mb-1">IDENTIFIER (NAME)</label>
                                    <input
                                        type="text"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full bg-black/50 border border-ghost-muted rounded p-3 text-ghost-light focus:border-ghost-accent focus:outline-none focus:ring-1 focus:ring-ghost-accent transition-all font-mono text-sm"
                                        placeholder="Enter your name..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-mono text-ghost-secondary mb-1">FREQUENCY (EMAIL)</label>
                                    <input
                                        type="email"
                                        required
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full bg-black/50 border border-ghost-muted rounded p-3 text-ghost-light focus:border-ghost-accent focus:outline-none focus:ring-1 focus:ring-ghost-accent transition-all font-mono text-sm"
                                        placeholder="Enter your email..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-mono text-ghost-secondary mb-1">TRANSMISSION (MESSAGE)</label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        className="w-full bg-black/50 border border-ghost-muted rounded p-3 text-ghost-light focus:border-ghost-accent focus:outline-none focus:ring-1 focus:ring-ghost-accent transition-all font-mono text-sm resize-none"
                                        placeholder="Type your message..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3 bg-ghost-accent/10 border border-ghost-accent text-ghost-accent font-mono hover:bg-ghost-accent hover:text-ghost-dark transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'TRANSMITTING...' : (
                                        <>
                                            SEND_DATA <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form> */}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
