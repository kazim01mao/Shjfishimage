import { motion } from "motion/react";
import { Home, Mountain, Droplets, Fish } from "lucide-react";

interface NavigationBarProps {
  currentLevel: "home" | "mountain" | "water" | "fish";
  mountainName?: string;
  waterName?: string;
  fishName?: string;
  onNavigateHome: () => void;
  onNavigateMountain?: () => void;
  onNavigateWater?: () => void;
}

export function NavigationBar({
  currentLevel,
  mountainName,
  waterName,
  fishName,
  onNavigateHome,
  onNavigateMountain,
  onNavigateWater,
}: NavigationBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#0a0a0a]/95 via-[#1a1a1a]/95 to-[#1a1a1a]/80 backdrop-blur-md border-b border-[#4a6fa5]/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center gap-3">
          {/* Home */}
          <motion.button
            onClick={onNavigateHome}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
              currentLevel === "home"
                ? "bg-[#c8553d]/20 border border-[#c8553d]/50 text-[#c8553d]"
                : "border border-[#4a6fa5]/20 text-[#b8956a] hover:border-[#4a6fa5]/50 hover:bg-[#4a6fa5]/10"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Home className="w-4 h-4" />
            <span className="text-sm">山海图鉴</span>
          </motion.button>

          {/* Mountain */}
          {(currentLevel === "mountain" || currentLevel === "water" || currentLevel === "fish") && mountainName && (
            <>
              <div className="text-[#4a6fa5]/40">/</div>
              <motion.button
                onClick={onNavigateMountain}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                  currentLevel === "mountain"
                    ? "bg-[#c8553d]/20 border border-[#c8553d]/50 text-[#c8553d]"
                    : "border border-[#4a6fa5]/20 text-[#b8956a] hover:border-[#4a6fa5]/50 hover:bg-[#4a6fa5]/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mountain className="w-4 h-4" />
                <span className="text-sm">{mountainName}</span>
              </motion.button>
            </>
          )}

          {/* Water */}
          {(currentLevel === "water" || currentLevel === "fish") && waterName && (
            <>
              <div className="text-[#4a6fa5]/40">/</div>
              <motion.button
                onClick={onNavigateWater}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                  currentLevel === "water"
                    ? "bg-[#c8553d]/20 border border-[#c8553d]/50 text-[#c8553d]"
                    : "border border-[#4a6fa5]/20 text-[#b8956a] hover:border-[#4a6fa5]/50 hover:bg-[#4a6fa5]/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Droplets className="w-4 h-4" />
                <span className="text-sm">{waterName}</span>
              </motion.button>
            </>
          )}

          {/* Fish */}
          {currentLevel === "fish" && fishName && (
            <>
              <div className="text-[#4a6fa5]/40">/</div>
              <motion.div
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#c8553d]/20 border border-[#c8553d]/50 text-[#c8553d]"
              >
                <Fish className="w-4 h-4" />
                <span className="text-sm">{fishName}</span>
              </motion.div>
            </>
          )}
        </div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-[#4a6fa5]/30 to-transparent mt-3"
        />
      </div>
    </motion.div>
  );
}
