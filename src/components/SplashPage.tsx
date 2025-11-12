import { useState } from "react";
import { motion } from "motion/react";

interface SplashPageProps {
  onEnter: () => void;
}

export function SplashPage({ onEnter }: SplashPageProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleEnter = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      onEnter();
    }, 1500);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#E8E4D9] flex items-center justify-center">
      {/* Parchment Paper Texture */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='0.5' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Main Cinematic Container - 16:9 aspect ratio */}
      <div className="relative w-full max-w-[90vw] mx-auto" style={{ aspectRatio: "16/9" }}>
        
        {/* Ancient Scroll Background - Ink Wash Landscape */}
        <div className="absolute inset-0">
          <InkWashLandscape />
        </div>

        {/* Central Mystical Fish */}
        <div className="absolute inset-0 flex items-center justify-center">
          <MysticalFish />
        </div>

        {/* Vermilion Seal Stamp - Top Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 1, type: "spring", stiffness: 100 }}
          className="absolute top-8 right-8 w-20 h-20 md:w-24 md:h-24 bg-[#C93A3E] border-4 border-[#a03d25]"
          style={{
            boxShadow: "0 6px 20px rgba(201, 58, 62, 0.4), inset -3px -3px 6px rgba(0,0,0,0.3)",
          }}
        >
          <div
            className="flex items-center justify-center h-full text-[#F7F4ED]"
            style={{
              writingMode: "vertical-rl",
              letterSpacing: "0.25em",
              fontSize: "clamp(1rem, 2vw, 1.3rem)",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            山海经
          </div>
        </motion.div>

        {/* Bottom UI - Title and Button */}
        <div className="absolute bottom-0 left-0 right-0 pb-12 px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-center space-y-6"
          >
            {/* Title */}
            <div className="space-y-2">
              <h1
                className="text-[#0A0A0A]"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  letterSpacing: "0.2em",
                  textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                山海经·鱼志
              </h1>
              <p
                className="text-[#666666]"
                style={{
                  fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
                  letterSpacing: "0.15em",
                }}
              >
                千年之变，一目山海
              </p>
              <p
                className="text-[#999999] text-sm"
                style={{ letterSpacing: "0.1em" }}
              >
                The Millennial Evolution of Mythical Fish
              </p>
            </div>

            {/* Enter Button */}
            <motion.button
              onClick={handleEnter}
              className="relative px-12 py-4 md:px-16 md:py-5 bg-[#0A0A0A] border-2 border-[#0A0A0A] text-[#F7F4ED] overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                boxShadow: "0 6px 24px rgba(10, 10, 10, 0.3)",
                letterSpacing: "0.3em",
                minHeight: "44px",
              }}
            >
              {/* Jade shimmer on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7CB8A5]/30 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
              
              <div className="relative z-10 space-y-1">
                <div style={{ fontSize: "clamp(1rem, 2.5vw, 1.3rem)" }}>
                  进入山海
                </div>
                <div className="text-xs opacity-90" style={{ letterSpacing: "0.2em" }}>
                  Enter the Archive
                </div>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Transition Effect */}
      {isTransitioning && <InkTransition />}
    </div>
  );
}

// Ink Wash Landscape Background
function InkWashLandscape() {
  return (
    <svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 1920 1080" 
      preserveAspectRatio="xMidYMid slice"
      className="opacity-80"
    >
      <defs>
        {/* Gradients for ink wash effect */}
        <linearGradient id="mountainGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0A0A0A" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#0A0A0A" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="mountainGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3a3a3a" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#3a3a3a" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="mountainGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0A0A0A" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0A0A0A" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="mountainGrad4" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0A0A0A" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#0A0A0A" stopOpacity="0.25" />
        </linearGradient>

        {/* Cloud texture */}
        <filter id="cloudBlur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
        </filter>
      </defs>

      {/* Distant Mountains - Layer 1 (Lightest) */}
      <motion.g
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.2 }}
      >
        <path
          d="M 0 500 Q 300 400, 600 450 T 1200 480 Q 1500 460, 1800 500 L 1920 520 L 1920 1080 L 0 1080 Z"
          fill="url(#mountainGrad1)"
        />
      </motion.g>

      {/* Mid-Distant Mountains - Layer 2 */}
      <motion.g
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.4 }}
      >
        <path
          d="M 0 580 Q 400 480, 800 530 T 1600 580 L 1920 600 L 1920 1080 L 0 1080 Z"
          fill="url(#mountainGrad2)"
        />
      </motion.g>

      {/* Mid Mountains - Layer 3 */}
      <motion.g
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.6 }}
      >
        <path
          d="M 0 700 Q 500 600, 1000 650 T 1920 700 L 1920 1080 L 0 1080 Z"
          fill="url(#mountainGrad3)"
        />
      </motion.g>

      {/* Foreground Mountains - Layer 4 (Darkest) */}
      <motion.g
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.8 }}
      >
        <path
          d="M 0 820 Q 600 750, 1200 800 T 1920 850 L 1920 1080 L 0 1080 Z"
          fill="url(#mountainGrad4)"
        />
      </motion.g>

      {/* Gnarled Pine Trees on rocky outcrops */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        opacity="0.5"
      >
        {/* Left Pine Tree */}
        <g transform="translate(280, 740)">
          {/* Trunk */}
          <path
            d="M 0 0 Q -5 30, 0 60 Q 5 90, 0 120"
            stroke="#0A0A0A"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          {/* Branches */}
          <path d="M 0 30 Q -20 25, -35 20" stroke="#0A0A0A" strokeWidth="2.5" fill="none" />
          <path d="M 0 50 Q 25 45, 40 40" stroke="#0A0A0A" strokeWidth="2.5" fill="none" />
          <path d="M 0 70 Q -30 65, -45 60" stroke="#0A0A0A" strokeWidth="2.5" fill="none" />
          <path d="M 0 90 Q 20 85, 35 80" stroke="#0A0A0A" strokeWidth="2.5" fill="none" />
          {/* Foliage clusters */}
          <circle cx="-35" cy="20" r="8" fill="#0A0A0A" opacity="0.3" />
          <circle cx="40" cy="40" r="8" fill="#0A0A0A" opacity="0.3" />
          <circle cx="-45" cy="60" r="8" fill="#0A0A0A" opacity="0.3" />
          <circle cx="35" cy="80" r="8" fill="#0A0A0A" opacity="0.3" />
        </g>

        {/* Right Pine Tree */}
        <g transform="translate(1640, 780)">
          <path
            d="M 0 0 Q 5 25, 0 50 Q -5 75, 0 100"
            stroke="#0A0A0A"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
          />
          <path d="M 0 25 Q 20 20, 30 15" stroke="#0A0A0A" strokeWidth="2" fill="none" />
          <path d="M 0 45 Q -25 40, -35 35" stroke="#0A0A0A" strokeWidth="2" fill="none" />
          <path d="M 0 65 Q 18 60, 28 55" stroke="#0A0A0A" strokeWidth="2" fill="none" />
          <circle cx="30" cy="15" r="6" fill="#0A0A0A" opacity="0.3" />
          <circle cx="-35" cy="35" r="6" fill="#0A0A0A" opacity="0.3" />
          <circle cx="28" cy="55" r="6" fill="#0A0A0A" opacity="0.3" />
        </g>
      </motion.g>

      {/* Swirling Clouds/Mist */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.4, 0.4] }}
        transition={{ duration: 3, delay: 1 }}
      >
        {/* Cloud 1 */}
        <ellipse
          cx="400"
          cy="450"
          rx="200"
          ry="40"
          fill="#999999"
          opacity="0.2"
          filter="url(#cloudBlur)"
        />
        <motion.ellipse
          cx="400"
          cy="450"
          rx="200"
          ry="40"
          fill="#999999"
          opacity="0.15"
          filter="url(#cloudBlur)"
          animate={{
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Cloud 2 */}
        <ellipse
          cx="1300"
          cy="520"
          rx="180"
          ry="35"
          fill="#999999"
          opacity="0.2"
          filter="url(#cloudBlur)"
        />
        <motion.ellipse
          cx="1300"
          cy="520"
          rx="180"
          ry="35"
          fill="#999999"
          opacity="0.15"
          filter="url(#cloudBlur)"
          animate={{
            x: [0, -25, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Cloud 3 */}
        <ellipse
          cx="800"
          cy="650"
          rx="150"
          ry="30"
          fill="#999999"
          opacity="0.2"
          filter="url(#cloudBlur)"
        />
      </motion.g>

      {/* Serene River at Bottom */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.2 }}
      >
        <defs>
          <linearGradient id="riverGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3a3a3a" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#3a3a3a" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 0 920 Q 480 910, 960 920 T 1920 920 L 1920 1080 L 0 1080 Z"
          fill="url(#riverGrad)"
          animate={{
            d: [
              "M 0 920 Q 480 910, 960 920 T 1920 920 L 1920 1080 L 0 1080 Z",
              "M 0 920 Q 480 930, 960 920 T 1920 920 L 1920 1080 L 0 1080 Z",
              "M 0 920 Q 480 910, 960 920 T 1920 920 L 1920 1080 L 0 1080 Z",
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.g>

      {/* Rocky Outcrops */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.9 }}
        opacity="0.4"
      >
        {/* Left Rock */}
        <ellipse cx="200" cy="850" rx="80" ry="30" fill="#0A0A0A" />
        <ellipse cx="200" cy="840" rx="70" ry="35" fill="#0A0A0A" opacity="0.6" />

        {/* Right Rock */}
        <ellipse cx="1720" cy="880" rx="100" ry="35" fill="#0A0A0A" />
        <ellipse cx="1720" cy="870" rx="90" ry="40" fill="#0A0A0A" opacity="0.6" />
      </motion.g>
    </svg>
  );
}

// Mystical Ethereal Fish - Central Focus
function MysticalFish() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: 0,
      }}
      transition={{ duration: 2, delay: 1.5, type: "spring", stiffness: 50 }}
      className="relative"
    >
      {/* Floating animation wrapper */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg 
          width="600" 
          height="400" 
          viewBox="0 0 600 400" 
          className="drop-shadow-2xl"
        >
          <defs>
            {/* Jade glow gradient */}
            <radialGradient id="jadeGlow" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#7CB8A5" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#5A9C89" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#7CB8A5" stopOpacity="0" />
            </radialGradient>

            {/* Fish body gradient */}
            <linearGradient id="fishBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7CB8A5" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#5A9C89" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#7CB8A5" stopOpacity="0.4" />
            </linearGradient>

            {/* Inner glow filter */}
            <filter id="innerGlow">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
              <feComposite in="blur" in2="SourceGraphic" operator="in" result="glowInside" />
              <feMerge>
                <feMergeNode in="glowInside" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Outer glow */}
            <filter id="outerGlow">
              <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Ancient pattern */}
            <pattern id="ancientPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="#0A0A0A" opacity="0.15" />
              <path d="M 15 20 L 25 20 M 20 15 L 20 25" stroke="#0A0A0A" strokeWidth="0.5" opacity="0.1" />
            </pattern>
          </defs>

          {/* Ambient jade glow halo */}
          <motion.ellipse
            cx="300"
            cy="200"
            rx="280"
            ry="160"
            fill="url(#jadeGlow)"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Fish body - main shape */}
          <motion.path
            d="M 150 200 Q 200 140, 300 130 Q 420 125, 470 200 Q 420 275, 300 270 Q 200 260, 150 200"
            fill="url(#fishBody)"
            stroke="#7CB8A5"
            strokeWidth="2"
            opacity="0.7"
            filter="url(#outerGlow)"
            animate={{
              d: [
                "M 150 200 Q 200 140, 300 130 Q 420 125, 470 200 Q 420 275, 300 270 Q 200 260, 150 200",
                "M 150 200 Q 200 145, 300 135 Q 420 130, 470 200 Q 420 270, 300 265 Q 200 255, 150 200",
                "M 150 200 Q 200 140, 300 130 Q 420 125, 470 200 Q 420 275, 300 270 Q 200 260, 150 200",
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Ancient patterns on body */}
          <ellipse
            cx="300"
            cy="200"
            rx="160"
            ry="70"
            fill="url(#ancientPattern)"
            opacity="0.4"
          />

          {/* Decorative scales with ancient symbols */}
          <g opacity="0.5">
            {[...Array(12)].map((_, i) => (
              <motion.g
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              >
                <circle
                  cx={220 + i * 25}
                  cy={200 + Math.sin(i * 0.6) * 30}
                  r="6"
                  fill="#5A9C89"
                  stroke="#7CB8A5"
                  strokeWidth="1"
                />
                <path
                  d={`M ${220 + i * 25 - 3} ${200 + Math.sin(i * 0.6) * 30} L ${220 + i * 25 + 3} ${200 + Math.sin(i * 0.6) * 30}`}
                  stroke="#0A0A0A"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              </motion.g>
            ))}
          </g>

          {/* Flowing tail */}
          <motion.g
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "150px 200px" }}
          >
            <path
              d="M 150 200 Q 100 170, 60 150 Q 80 165, 100 180 Q 120 190, 150 200 Q 120 210, 100 220 Q 80 235, 60 250 Q 100 230, 150 200"
              fill="url(#fishBody)"
              stroke="#7CB8A5"
              strokeWidth="2"
              opacity="0.6"
              filter="url(#outerGlow)"
            />
            {/* Tail detail lines */}
            <path
              d="M 150 200 L 90 170 M 150 200 L 90 230 M 110 185 L 110 215"
              stroke="#5A9C89"
              strokeWidth="1.5"
              opacity="0.4"
            />
          </motion.g>

          {/* Dorsal fin */}
          <motion.g
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <path
              d="M 300 130 Q 280 80, 270 60 Q 275 70, 285 85 Q 295 100, 300 130 Q 305 100, 315 85 Q 325 70, 330 60 Q 320 80, 300 130"
              fill="url(#fishBody)"
              stroke="#7CB8A5"
              strokeWidth="2"
              opacity="0.6"
              filter="url(#innerGlow)"
            />
            {/* Fin rays */}
            <path d="M 290 120 L 285 85 M 300 120 L 300 70 M 310 120 L 315 85" stroke="#5A9C89" strokeWidth="1" opacity="0.3" />
          </motion.g>

          {/* Ventral fin */}
          <motion.g
            animate={{
              y: [0, 3, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <path
              d="M 300 270 Q 280 320, 270 340 Q 275 330, 285 315 Q 295 300, 300 270 Q 305 300, 315 315 Q 325 330, 330 340 Q 320 320, 300 270"
              fill="url(#fishBody)"
              stroke="#7CB8A5"
              strokeWidth="2"
              opacity="0.6"
              filter="url(#innerGlow)"
            />
          </motion.g>

          {/* Side fins */}
          <motion.g
            animate={{
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "240px 180px" }}
          >
            <path
              d="M 240 180 Q 200 170, 180 160 Q 190 172, 220 178"
              fill="url(#fishBody)"
              stroke="#7CB8A5"
              strokeWidth="1.5"
              opacity="0.5"
            />
          </motion.g>

          <motion.g
            animate={{
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            style={{ transformOrigin: "240px 220px" }}
          >
            <path
              d="M 240 220 Q 200 230, 180 240 Q 190 228, 220 222"
              fill="url(#fishBody)"
              stroke="#7CB8A5"
              strokeWidth="1.5"
              opacity="0.5"
            />
          </motion.g>

          {/* Eye - glowing jade */}
          <motion.g
            animate={{
              opacity: [1, 0.6, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <circle
              cx="440"
              cy="190"
              r="12"
              fill="#7CB8A5"
              filter="url(#outerGlow)"
            />
            <circle
              cx="442"
              cy="188"
              r="5"
              fill="#F7F4ED"
            />
            <circle
              cx="443"
              cy="187"
              r="3"
              fill="#0A0A0A"
            />
          </motion.g>

          {/* Whiskers/barbels */}
          <motion.g
            animate={{
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "450px 205px" }}
          >
            <path
              d="M 450 205 Q 480 215, 500 220"
              stroke="#7CB8A5"
              strokeWidth="2"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M 450 205 Q 480 200, 500 195"
              stroke="#7CB8A5"
              strokeWidth="2"
              fill="none"
              opacity="0.6"
            />
          </motion.g>

          {/* Flowing energy particles around fish */}
          {[...Array(20)].map((_, i) => (
            <motion.circle
              key={i}
              cx={150 + i * 20 + Math.random() * 40}
              cy={180 + Math.sin(i * 0.5) * 50 + Math.random() * 30}
              r="2"
              fill="#7CB8A5"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.6, 0],
                y: [0, -20, -40],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeOut",
              }}
            />
          ))}
        </svg>
      </motion.div>
    </motion.div>
  );
}

// Ink Transition Effect
function InkTransition() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute inset-0 z-50 flex items-center justify-center bg-[#0A0A0A]"
    >
      {/* Ink splash spreading effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 3, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          background: "radial-gradient(circle, rgba(122,184,165,0.2) 0%, #0A0A0A 70%)",
        }}
      />

      {/* Central jade glow */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [0, 1.5, 1],
          opacity: [0, 0.8, 0],
        }}
        transition={{ duration: 1.5 }}
        className="w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, #7CB8A5 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Seal stamp */}
      <motion.div
        initial={{ scale: 0, rotate: -90, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute w-32 h-32 bg-[#C93A3E] border-4 border-[#BFA065]"
        style={{
          boxShadow: "0 0 80px rgba(201, 58, 62, 0.8)",
        }}
      >
        <div
          className="flex items-center justify-center h-full text-[#F7F4ED]"
          style={{
            writingMode: "vertical-rl",
            letterSpacing: "0.3em",
            fontSize: "1.5rem",
          }}
        >
          入海
        </div>
      </motion.div>
    </motion.div>
  );
}
