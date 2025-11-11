import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { mountainsData, fishDatabase } from "../data/shanhaijing-data";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface WaterViewProps {
  waterId: string;
  onBack: () => void;
  onFishSelect: (fishId: string) => void;
}

export function WaterView({ waterId, onBack, onFishSelect }: WaterViewProps) {
  // Find the water from all mountains
  let water = null;
  let mountainName = "";
  
  for (const mountain of mountainsData) {
    const foundWater = mountain.waters.find(w => w.id === waterId);
    if (foundWater) {
      water = foundWater;
      mountainName = mountain.name;
      break;
    }
  }

  if (!water) return null;

  const fishDetail = fishDatabase[water.fishId];

  return (
    <div className="h-screen bg-gradient-to-b from-[#0a0a0a] via-[#0f1419] to-[#1a1a1a] relative overflow-hidden">
      {/* Dark underwater atmosphere */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2432]/30 via-[#0f1419]/50 to-[#2a1a1a]/40" />
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 40%, rgba(74, 111, 165, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 70% 60%, rgba(74, 89, 153, 0.2) 0%, transparent 50%)`,
          }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#4a6fa5]/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Light rays */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`ray-${i}`}
          className="absolute top-0 w-px h-full bg-gradient-to-b from-[#4a6fa5]/20 via-[#4a6fa5]/5 to-transparent"
          style={{
            left: `${30 + i * 20}%`,
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: i * 1,
          }}
        />
      ))}

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-[#b8956a] hover:text-[#f5f1e8] transition-colors border border-[#b8956a]/30 hover:border-[#4a6fa5] px-4 py-2 rounded bg-[#1a1a1a]/80 backdrop-blur-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm">返回 / Back</span>
      </motion.button>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-6 left-1/2 -translate-x-1/2 z-20 text-center"
      >
        <div className="border border-[#4a6fa5]/30 rounded bg-[#1a1a1a]/90 backdrop-blur-md px-6 py-2">
          <h2 className="text-[#f5f1e8] text-lg" style={{ letterSpacing: "0.15em" }}>{water.name}</h2>
          <p className="text-[#4a6fa5] text-xs">{water.nameEn} · {mountainName}</p>
        </div>
      </motion.div>

      {/* Main Content - add padding for navigation bar */}
      <div className="relative z-10 h-full flex items-center justify-center px-8 pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mb-8"
          >
            <h3 className="text-[#f5f1e8] text-lg mb-1" style={{ letterSpacing: "0.2em" }}>临水观鱼</h3>
            <p className="text-[#4a6fa5] text-xs">Observe the Fish</p>
          </motion.div>

          {/* Fish Card - Compact version */}
          <motion.button
            onClick={() => onFishSelect(water.fishId)}
            className="group relative w-full"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative p-4 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] rounded-2xl">
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-12 h-12">
                <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#c8553d]/60" />
              </div>
              <div className="absolute top-0 right-0 w-12 h-12">
                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#c8553d]/60" />
              </div>
              <div className="absolute bottom-0 left-0 w-12 h-12">
                <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#c8553d]/60" />
              </div>
              <div className="absolute bottom-0 right-0 w-12 h-12">
                <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#c8553d]/60" />
              </div>

              <div className="relative border-2 border-[#4a6fa5]/30 group-hover:border-[#4a6fa5] rounded-xl overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] transition-all duration-500">
                {/* Fish image - compact height */}
                <motion.div 
                  className="relative h-64 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <ImageWithFallback
                    src={fishDetail?.image || ""}
                    alt={water.fish}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#1a1a1a]/50" />

                  {/* Seal on image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute top-4 right-4 w-12 h-12 border-3 border-[#c8553d] bg-[#c8553d] rounded-sm shadow-xl transform rotate-12"
                    style={{ boxShadow: "0 4px 20px rgba(200, 85, 61, 0.5)" }}
                  >
                    <span 
                      className="flex items-center justify-center h-full text-[#f5f1e8] text-xs"
                      style={{ writingMode: "vertical-rl" }}
                    >
                      {water.fish.slice(0, 2)}
                    </span>
                  </motion.div>
                </motion.div>

                {/* Fish info - compact */}
                <div className="p-6 bg-[#1a1a1a]/90 backdrop-blur-sm">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="text-center mb-4"
                  >
                    <h1 className="text-[#f5f1e8] text-2xl mb-1 group-hover:text-[#4a6fa5] transition-colors" style={{ letterSpacing: "0.2em" }}>
                      {water.fish}
                    </h1>
                    <p className="text-[#b8956a] text-sm">{fishDetail?.nameEn}</p>
                  </motion.div>

                  <div className="h-px bg-gradient-to-r from-transparent via-[#b8956a]/50 to-transparent mb-4" />

                  {fishDetail && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.1 }}
                      className="space-y-3"
                    >
                      <div className="text-center">
                        <p className="text-[#f5f1e8]/70 text-sm leading-relaxed">{fishDetail.description}</p>
                      </div>
                      
                      <div className="flex items-center justify-center gap-2 pt-2">
                        <span className="text-[#4a6fa5] text-xs">功能:</span>
                        <span className="text-[#f5f1e8] text-sm">{fishDetail.function}</span>
                      </div>
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="mt-4 border border-[#c8553d]/30 group-hover:border-[#c8553d] rounded-lg p-3 bg-gradient-to-r from-[#c8553d]/5 to-[#4a5899]/5 transition-all duration-500"
                  >
                    <p className="text-center text-[#f5f1e8]/80 text-sm" style={{ letterSpacing: "0.1em" }}>
                      格物致知·观其流变
                    </p>
                    <p className="text-center text-[#b8956a] text-xs mt-1">
                      View Evolution Analysis
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-[#4a6fa5]/20 via-[#c8553d]/20 to-[#4a6fa5]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 -z-10"
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}