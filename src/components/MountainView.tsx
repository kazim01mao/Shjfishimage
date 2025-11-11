import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { mountainsData } from "../data/shanhaijing-data";

interface MountainViewProps {
  mountainId: string;
  onBack: () => void;
  onWaterSelect: (waterId: string) => void;
}

export function MountainView({ mountainId, onBack, onWaterSelect }: MountainViewProps) {
  const mountain = mountainsData.find(m => m.id === mountainId);

  if (!mountain) return null;

  return (
    <div className="h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f1419] relative overflow-hidden">
      {/* Dark mystical background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1733218526152-91e19994578f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwaW5rJTIwcGFpbnRpbmclMjBtb3VudGFpbnxlbnwxfHx8fDE3NjI4MzM3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2432]/20 via-transparent to-[#0a0a0a]/50" />
      </div>

      {/* Floating mist */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-40 h-40 rounded-full bg-[#4a6fa5]/5 blur-3xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Content - add padding for navigation bar */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 pt-24">
        {/* Mountain Title with Seal */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          {/* Red Seal */}
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="inline-block mb-6 w-16 h-16 border-3 border-[#c8553d] bg-[#c8553d] rounded-sm shadow-lg transform rotate-6"
            style={{ boxShadow: "0 4px 20px rgba(200, 85, 61, 0.5)" }}
          >
            <span 
              className="flex items-center justify-center h-full text-[#f5f1e8] text-sm"
              style={{ writingMode: "vertical-rl", letterSpacing: "0.1em" }}
            >
              {mountain.name.slice(0, 3)}
            </span>
          </motion.div>

          <motion.h1
            className="text-[#f5f1e8] mb-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            style={{ 
              fontSize: "2rem",
              letterSpacing: "0.2em",
              textShadow: "0 0 30px rgba(245, 241, 232, 0.3)"
            }}
          >
            {mountain.name}
          </motion.h1>
          <motion.p
            className="text-[#4a6fa5] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {mountain.nameEn}
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "150px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-transparent via-[#b8956a] to-transparent mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-[#f5f1e8]/60 text-sm"
            style={{ letterSpacing: "0.15em" }}
          >
            山经·水脉 / Mountain's Waters
          </motion.p>
        </motion.div>

        {/* Waters Display - Compact horizontal layout */}
        <div className="max-w-5xl w-full">
          <div className="flex flex-wrap justify-center gap-6">
            {mountain.waters.map((water, index) => (
              <motion.button
                key={water.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.2, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={() => onWaterSelect(water.id)}
                className="group relative w-72"
              >
                <div className="relative bg-gradient-to-br from-[#1a1a1a]/90 via-[#2a2a2a]/90 to-[#1a1a1a]/90 backdrop-blur-xl border-2 border-[#4a6fa5]/30 group-hover:border-[#4a6fa5] rounded-2xl p-6 transition-all duration-500 overflow-hidden"
                  style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)" }}
                >
                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#b8956a]/20" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#b8956a]/20" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#b8956a]/20" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#b8956a]/20" />

                  {/* Water wave decoration */}
                  <div className="flex justify-center mb-4">
                    <svg width="80" height="40" viewBox="0 0 80 40">
                      <motion.path
                        d="M 5 20 Q 15 12, 25 20 T 45 20 T 65 20 T 75 20"
                        fill="none"
                        stroke="#4a6fa5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="opacity-60 group-hover:opacity-100"
                        animate={{
                          d: [
                            "M 5 20 Q 15 12, 25 20 T 45 20 T 65 20 T 75 20",
                            "M 5 20 Q 15 28, 25 20 T 45 20 T 65 20 T 75 20",
                            "M 5 20 Q 15 12, 25 20 T 45 20 T 65 20 T 75 20",
                          ]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                        }}
                      />
                    </svg>
                  </div>

                  {/* Water name */}
                  <div className="text-center mb-4">
                    <h3 className="text-[#f5f1e8] text-xl mb-1 group-hover:text-[#4a6fa5] transition-colors" style={{ letterSpacing: "0.15em" }}>
                      {water.name}
                    </h3>
                    <p className="text-[#b8956a]/70 text-xs">{water.nameEn}</p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-[#b8956a]/50 to-transparent mb-4" />

                  {/* Fish info */}
                  <div className="text-center">
                    <p className="text-[#4a6fa5] text-xs mb-1 tracking-widest">水中异兽 / Creature</p>
                    <p className="text-[#c8553d]" style={{ letterSpacing: "0.1em" }}>{water.fish}</p>
                  </div>

                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#4a6fa5]/0 via-[#4a6fa5]/5 to-[#4a6fa5]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>

                {/* Outer glow */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-[#4a6fa5]/20 to-[#c8553d]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 -z-10"
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative clouds */}
      <motion.div
        className="absolute bottom-20 right-16 opacity-5"
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
      >
        <svg width="150" height="80" viewBox="0 0 150 80">
          <path
            d="M 20 40 Q 40 20, 65 38 Q 90 15, 115 38 Q 135 30, 140 42 Q 142 52, 125 56 Q 100 60, 75 56 Q 50 60, 30 56 Q 15 52, 20 40"
            fill="#f5f1e8"
          />
        </svg>
      </motion.div>
    </div>
  );
}