import { useState } from "react";
import { motion } from "motion/react";
import { mountainsData } from "../data/shanhaijing-data";
import { ChevronRight } from "lucide-react";

interface LandingPageProps {
  onMountainSelect: (mountainId: string) => void;
}

export function LandingPage({ onMountainSelect }: LandingPageProps) {
  const [hoveredMountain, setHoveredMountain] = useState<string | null>(null);

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]">
      {/* Dark ink wash background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2432]/30 via-transparent to-[#2a1a1a]/30" />
      
      {/* Floating mist particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 rounded-full bg-white/5 blur-3xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 right-0 z-20 pt-8 pb-6 bg-gradient-to-b from-[#0a0a0a] to-transparent"
      >
        <div className="flex flex-col items-center gap-4">
          {/* Red Seal */}
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
            className="w-16 h-16 border-3 border-[#c8553d] bg-[#c8553d] rounded-sm shadow-lg transform -rotate-6"
            style={{ boxShadow: "0 4px 20px rgba(200, 85, 61, 0.5)" }}
          >
            <span 
              className="flex items-center justify-center h-full text-[#f5f1e8] text-sm"
              style={{ writingMode: "vertical-rl", letterSpacing: "0.1em" }}
            >
              山海经
            </span>
          </motion.div>

          {/* Title */}
          <div className="text-center">
            <h1 className="text-[#f5f1e8] mb-2" style={{ 
              fontSize: "2rem",
              letterSpacing: "0.3em",
              textShadow: "0 0 20px rgba(245, 241, 232, 0.3)"
            }}>
              山海图鉴
            </h1>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-12 h-px bg-[#b8956a]" />
              <p className="text-[#b8956a] text-xs tracking-widest">BESTIARY</p>
              <div className="w-12 h-px bg-[#b8956a]" />
            </div>
            <p className="text-[#f5f1e8]/60 text-sm" style={{ letterSpacing: "0.15em" }}>
              鱼类异兽的视觉流变
            </p>
          </div>
        </div>
      </motion.div>

      {/* Main Content - Horizontal Scroll */}
      <div className="absolute inset-0 flex items-center pt-32 pb-20">
        <div className="w-full">
          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center mb-6"
          >
            <div className="inline-block relative">
              <h3 className="text-[#f5f1e8] text-lg mb-1" style={{ letterSpacing: "0.2em" }}>
                古卷展阅·择山入境
              </h3>
              <p className="text-[#4a6fa5] text-xs">Horizontal Scroll · Choose Mountain</p>
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8553d] to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              />
            </div>
          </motion.div>

          {/* Horizontal scrolling container */}
          <div className="relative h-[400px] overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-[#4a6fa5]/30 scrollbar-track-transparent px-16">
            {/* Scroll axis line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b8956a]/20 to-transparent z-0" />

            {/* Mountains horizontal layout */}
            <motion.div 
              className="flex items-center gap-8 h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              {mountainsData.map((mountain, index) => (
                <motion.button
                  key={mountain.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 1.7 + index * 0.03,
                    duration: 0.5,
                  }}
                  onClick={() => onMountainSelect(mountain.id)}
                  onMouseEnter={() => setHoveredMountain(mountain.id)}
                  onMouseLeave={() => setHoveredMountain(null)}
                  className="group relative flex-shrink-0"
                  style={{ width: "200px" }}
                >
                  {/* Connection to axis */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-[#b8956a]/30 to-transparent group-hover:from-[#c8553d]/50 transition-colors" />
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-6 w-2 h-2 rounded-full border-2 border-[#4a6fa5] bg-[#0a0a0a] group-hover:border-[#c8553d] group-hover:bg-[#c8553d] transition-all z-10"
                    whileHover={{ scale: 1.5 }}
                  />

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="relative bg-gradient-to-br from-[#1a1a1a]/90 via-[#2a2a2a]/90 to-[#1a1a1a]/90 backdrop-blur-md border border-[#4a6fa5]/30 group-hover:border-[#c8553d] rounded-xl p-4 transition-all duration-300 h-[280px] flex flex-col"
                    style={{
                      boxShadow: hoveredMountain === mountain.id 
                        ? '0 8px 32px rgba(200, 85, 61, 0.4)' 
                        : '0 4px 16px rgba(0, 0, 0, 0.5)'
                    }}
                  >
                    {/* Corner decorations */}
                    <div className="absolute top-1 left-1 w-4 h-4 border-t border-l border-[#b8956a]/40" />
                    <div className="absolute top-1 right-1 w-4 h-4 border-t border-r border-[#b8956a]/40" />
                    <div className="absolute bottom-1 left-1 w-4 h-4 border-b border-l border-[#b8956a]/40" />
                    <div className="absolute bottom-1 right-1 w-4 h-4 border-b border-r border-[#b8956a]/40" />

                    {/* Mountain icon */}
                    <div className="flex justify-center mb-3">
                      <svg width="60" height="45" viewBox="0 0 60 45" className="opacity-50 group-hover:opacity-80 transition-opacity">
                        <defs>
                          <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#4a6fa5" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#4a5899" stopOpacity="0.4" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M 5 40 L 18 15 L 30 25 L 42 10 L 55 40 Z"
                          fill={`url(#grad-${index})`}
                          stroke="#b8956a"
                          strokeWidth="1"
                        />
                      </svg>
                    </div>

                    {/* Name */}
                    <h3 className="text-[#f5f1e8] text-center mb-1 group-hover:text-[#4a6fa5] transition-colors leading-tight" style={{ letterSpacing: "0.1em" }}>
                      {mountain.name}
                    </h3>
                    <p className="text-[#b8956a]/70 text-xs text-center mb-3 leading-tight">
                      {mountain.nameEn}
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-[#b8956a]/30 to-transparent my-2" />

                    {/* Info */}
                    <div className="flex-1 flex flex-col justify-center space-y-2 text-center">
                      <div>
                        <p className="text-[#4a6fa5] text-xs mb-1">水域</p>
                        <p className="text-[#f5f1e8]/60 text-xs leading-tight">{mountain.waters[0].name}</p>
                      </div>
                      <div>
                        <p className="text-[#c8553d] text-sm">{mountain.waters[0].fish}</p>
                      </div>
                    </div>

                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#4a6fa5]/5 to-[#c8553d]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    />
                  </motion.div>
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex items-center justify-center gap-2 mt-6 text-[#4a6fa5]"
          >
            <span className="text-xs">横向滚动以查看更多</span>
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative clouds */}
      <motion.div
        className="absolute top-32 left-10 opacity-5"
        animate={{
          x: [0, 20, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
      >
        <svg width="120" height="60" viewBox="0 0 120 60">
          <path
            d="M 15 30 Q 25 15, 40 28 Q 55 12, 70 28 Q 85 20, 95 30 Q 98 38, 85 42 Q 70 46, 55 42 Q 40 46, 25 42 Q 12 38, 15 30"
            fill="#f5f1e8"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-16 opacity-5"
        animate={{
          x: [0, -30, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
      >
        <svg width="150" height="80" viewBox="0 0 150 80">
          <path
            d="M 20 40 Q 30 20, 50 35 Q 70 15, 90 35 Q 110 25, 120 40 Q 125 50, 110 55 Q 90 60, 70 55 Q 50 60, 30 55 Q 15 50, 20 40"
            fill="#f5f1e8"
          />
        </svg>
      </motion.div>
    </div>
  );
}
