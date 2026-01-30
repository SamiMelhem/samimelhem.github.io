'use client'

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import BlogCard from "./BlogCard";
import ContactIcons from "./ContactIcons";

interface PostMeta {
    slug: string;
    title: string;
    date: string;
    excerpt?: string;
    image?: string;
    type: 'industry-update' | 'personal';
    tags: string[];
}

export default function BlogListClient({ posts }: { posts: PostMeta[] }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [showAllIndustryUpdates, setShowAllIndustryUpdates] = useState(false);

    // Separate posts by type
    const industryUpdates = useMemo(() => 
        posts.filter(p => p.type === 'industry-update'), 
        [posts]
    );
    
    const latestIndustryUpdate = industryUpdates[0];

    // Get all unique tags
    const allTags = useMemo(() => {
        const tagSet = new Set<string>();
        posts.forEach(post => post.tags.forEach(tag => tagSet.add(tag)));
        return Array.from(tagSet).sort();
    }, [posts]);

    // Filter posts based on search and tag
    const filteredPosts = useMemo(() => {
        let filtered = posts;

        // Filter by search query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(post => 
                post.title.toLowerCase().includes(query) ||
                post.excerpt?.toLowerCase().includes(query) ||
                post.tags.some(tag => tag.toLowerCase().includes(query))
            );
        }

        // Filter by selected tag
        if (selectedTag) {
            filtered = filtered.filter(post => post.tags.includes(selectedTag));
        }

        // If showing all industry updates, filter to only those
        if (showAllIndustryUpdates) {
            filtered = filtered.filter(post => post.type === 'industry-update');
        }

        return filtered;
    }, [posts, searchQuery, selectedTag, showAllIndustryUpdates]);

    const handleTagClick = (tag: string) => {
        setSelectedTag(selectedTag === tag ? null : tag);
    };

    const clearFilters = () => {
        setSearchQuery("");
        setSelectedTag(null);
        setShowAllIndustryUpdates(false);
    };

    const hasActiveFilters = searchQuery || selectedTag || showAllIndustryUpdates;

    return (
        <main className="relative min-h-screen flex flex-col text-white">
            <div className="relative z-10 flex-1 max-w-6xl mx-auto py-8 sm:py-12 px-4">
                {/* Animated, underlined title */}
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 sm:mb-12 underline decoration-teal-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    Blog
                </motion.h1>

                {/* Featured Industry Updates Section */}
                {latestIndustryUpdate && !hasActiveFilters && (
                    <motion.section 
                        className="mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                            <h2 className="text-lg font-medium text-purple-300 uppercase tracking-wider">
                                Industry Updates
                            </h2>
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 items-stretch">
                            {/* View All Button */}
                            <div 
                                className="relative rounded-xl overflow-hidden border border-purple-500/30 bg-gradient-to-br from-purple-900/20 via-black to-indigo-900/20 p-8 flex flex-col justify-center items-center min-h-[280px] cursor-pointer hover:border-purple-400/50 transition-all duration-300 group"
                                onClick={() => setShowAllIndustryUpdates(true)}
                            >
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute inset-0" style={{
                                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.3) 1px, transparent 0)',
                                        backgroundSize: '24px 24px'
                                    }}></div>
                                </div>
                                
                                <div className="relative z-10 text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                                        View All Industry Updates
                                    </h3>
                                    <p className="text-gray-400 mb-4">
                                        Weekly tech news, AI developments, and market insights
                                    </p>
                                    <span className="inline-flex items-center gap-2 text-purple-400 font-medium group-hover:gap-3 transition-all duration-300">
                                        Browse {industryUpdates.length} updates
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            {/* Latest Industry Update Card */}
                            <div className="rounded-xl overflow-hidden shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] border border-purple-500/30 hover:border-purple-400 transition-all duration-300">
                                <BlogCard {...latestIndustryUpdate} compact />
                            </div>
                        </div>
                    </motion.section>
                )}

                {/* Search and Filter Section */}
                <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                >
                    {/* Search Input */}
                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search articles by title, content, or tags..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all duration-300"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>

                    {/* Tag Filter Pills */}
                    <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-sm text-gray-400 mr-2">Filter by tag:</span>
                        {allTags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => handleTagClick(tag)}
                                className={`px-3 py-1 text-sm rounded-full border transition-all duration-200 ${
                                    selectedTag === tag
                                        ? 'bg-teal-500/30 border-teal-400 text-teal-300'
                                        : 'bg-white/5 border-gray-600 text-gray-400 hover:border-gray-500 hover:text-gray-300'
                                }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>

                    {/* Active Filters Indicator */}
                    {hasActiveFilters && (
                        <div className="flex items-center gap-4 mt-4 p-3 bg-white/5 rounded-lg border border-gray-700">
                            <span className="text-sm text-gray-300">
                                Showing {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''}
                                {showAllIndustryUpdates && <span className="text-purple-400"> in Industry Updates</span>}
                                {selectedTag && <span className="text-teal-400"> tagged &quot;{selectedTag}&quot;</span>}
                                {searchQuery && <span className="text-gray-400"> matching &quot;{searchQuery}&quot;</span>}
                            </span>
                            <button
                                onClick={clearFilters}
                                className="ml-auto text-sm text-red-400 hover:text-red-300 flex items-center gap-1 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                Clear filters
                            </button>
                        </div>
                    )}
                </motion.div>

                {/* Section Title when showing all industry updates */}
                {showAllIndustryUpdates && (
                    <motion.div 
                        className="flex items-center gap-3 mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button
                            onClick={() => setShowAllIndustryUpdates(false)}
                            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to all posts
                        </button>
                        <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                        <h2 className="text-lg font-medium text-purple-300">
                            All Industry Updates ({filteredPosts.length})
                        </h2>
                    </motion.div>
                )}

                {/* Blog Grid */}
                <motion.div 
                    className="grid gap-6 sm:gap-8 md:grid-cols-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                >
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post) => (
                            <div
                                key={post.slug}
                                className={`group relative rounded-xl overflow-hidden cursor-pointer
                                    shadow-[0_0_10px_rgba(20,184,166,0.3)] hover:shadow-[0_0_20px_rgba(20,184,166,0.6)]
                                    border ${post.type === 'industry-update' ? 'border-purple-500/30 hover:border-purple-400' : 'border-white hover:border-teal-400'} 
                                    transition-all duration-300`}
                            >
                                <BlogCard {...post} />
                            </div>
                        ))
                    ) : (
                        <div className="col-span-2 text-center py-16">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-800 flex items-center justify-center">
                                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-medium text-gray-400 mb-2">No posts found</h3>
                            <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
                            <button
                                onClick={clearFilters}
                                className="px-4 py-2 bg-teal-500/20 text-teal-400 rounded-lg hover:bg-teal-500/30 transition-colors"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </motion.div>
            </div>
            
            <ContactIcons />
        </main>
    );
}
