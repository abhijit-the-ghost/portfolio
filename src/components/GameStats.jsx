import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Clock, Heart, Zap, MapPin, Sword } from 'lucide-react';

const GameStats = () => {
    const stats = [
        { label: 'Current Quest', value: 'DRF', icon: <Sword className="w-5 h-5 text-yellow-500" /> },
        { label: 'Location', value: 'Kathmandu, Nepal', icon: <MapPin className="w-5 h-5 text-red-500" /> },
        { label: 'HP', value: '100/100', icon: <Heart className="w-5 h-5 text-green-500" /> },
        { label: 'Mana', value: '85/100', icon: <Zap className="w-5 h-5 text-blue-500" /> },
        { label: 'Playtime', value: '500 hrs', icon: <Clock className="w-5 h-5 text-purple-500" /> },
        { label: 'Achievements', value: '42 Unlocked', icon: <Trophy className="w-5 h-5 text-gold-500" /> },
    ];

    const favorites = [
        { category: 'Anime', items: ['One Piece', 'Attack On Titan', 'Naruto'] },
        { category: 'Games', items: ['Ghost of Tsushima', 'God of War (2018)', 'Genshin Impact'] },
        { category: 'Music', items: ['Classic', 'R&B', 'Pop'] },
    ];

    return (
        <section id="game-stats" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-ghost-muted/40 border border-ghost-light/10 rounded-2xl p-8 backdrop-blur-sm"
                >
                    <div className="flex flex-col md:flex-row gap-12">
                        {/* Character Model Placeholder */}
                        <div className="w-full md:w-1/3 flex flex-col items-center justify-center border-r border-ghost-light/10 pr-0 md:pr-12">
                            <div className="w-48 h-64 bg-black/50 rounded-lg flex items-center justify-center mb-4 border border-ghost-accent/20 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-t from-ghost-accent/20 to-transparent opacity-50 animate-pulse-slow" />
                                <span className="font-mono text-ghost-accent animate-pulse">CHARACTER_MODEL_404</span>
                            </div>
                            <h3 className="text-2xl font-bold font-mono text-ghost-light">GHOST</h3>
                            <p className="text-ghost-secondary font-mono text-sm">Lvl. 25 Cyber-Mage</p>
                        </div>

                        {/* Stats Grid */}
                        <div className="w-full md:w-2/3">
                            <h3 className="text-xl font-bold font-mono mb-6 text-ghost-accent flex items-center gap-2">
                                <Zap className="w-5 h-5" /> PLAYER_STATS
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center justify-between p-3 bg-black/30 rounded border border-ghost-light/5 hover:border-ghost-accent/30 transition-colors"
                                    >
                                        <div className="flex items-center gap-3 text-gray-400">
                                            {stat.icon}
                                            <span className="font-mono text-sm">{stat.label}</span>
                                        </div>
                                        <span className="font-mono font-bold text-ghost-light">{stat.value}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold font-mono mb-4 text-ghost-secondary">FAVORITES</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {favorites.map((fav) => (
                                    <div key={fav.category}>
                                        <h4 className="font-bold text-gray-500 mb-2 text-sm uppercase tracking-wider">{fav.category}</h4>
                                        <ul className="space-y-1">
                                            {fav.items.map((item) => (
                                                <li key={item} className="text-ghost-light/80 text-sm font-mono hover:text-ghost-accent transition-colors cursor-default">
                                                    {'>'} {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GameStats;
