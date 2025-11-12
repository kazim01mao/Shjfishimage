import { motion } from "motion/react";
import { Home, Mountain, Fish, Waves } from "lucide-react";

interface NavigationBarProps {
  currentLevel: "home" | "mountain" | "fish";
  mountainName?: string;
  waterName?: string;
  fishName?: string;
  onNavigateHome: () => void;
  onNavigateMountain?: () => void;
}

export function NavigationBar({
  currentLevel,
  mountainName,
  waterName,
  fishName,
  onNavigateHome,
  onNavigateMountain,
}: NavigationBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#f5f1e8] border-b-2 border-[#0a0a0a]/10"
      style={{
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-12 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Breadcrumb Navigation */}
          <div className="flex items-center gap-4">
            {/* Home */}
            <motion.button
              onClick={onNavigateHome}
              className={`flex items-center gap-2 px-4 py-2 border-2 transition-all duration-300 ${
                currentLevel === "home"
                  ? "border-[#c8553d] bg-[#c8553d]/10 text-[#c8553d]"
                  : "border-[#0a0a0a]/20 text-[#3a3a3a] hover:border-[#c8553d]/40 hover:bg-[#c8553d]/5"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Home className="w-4 h-4" />
              <span className="text-sm" style={{ letterSpacing: "0.1em" }}>山海图鉴</span>
            </motion.button>

            {/* Mountain */}
            {(currentLevel === "mountain" || currentLevel === "fish") && mountainName && (
              <>
                <div className="text-[#666666]/40">-</div>
                <motion.button
                  onClick={onNavigateMountain}
                  className={`flex items-center gap-2 px-4 py-2 border-2 transition-all duration-300 ${
                    currentLevel === "mountain"
                      ? "border-[#c8553d] bg-[#c8553d]/10 text-[#c8553d]"
                      : "border-[#0a0a0a]/20 text-[#3a3a3a] hover:border-[#c8553d]/40 hover:bg-[#c8553d]/5"
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Mountain className="w-4 h-4" />
                  <span className="text-sm" style={{ letterSpacing: "0.1em" }}>{mountainName}</span>
                </motion.button>
              </>
            )}

            {/* Water */}
            {currentLevel === "fish" && waterName && (
              <>
                <div className="text-[#666666]/40">-</div>
                <motion.div
                  className="flex items-center gap-2 px-4 py-2 border-2 border-[#0a0a0a]/20 text-[#3a3a3a]"
                >
                  <Waves className="w-4 h-4" />
                  <span className="text-sm" style={{ letterSpacing: "0.1em" }}>{waterName}</span>
                </motion.div>
              </>
            )}

            {/* Fish */}
            {currentLevel === "fish" && fishName && (
              <>
                <div className="text-[#666666]/40">-</div>
                <motion.div
                  className="flex items-center gap-2 px-4 py-2 border-2 border-[#c8553d] bg-[#c8553d]/10 text-[#c8553d]"
                >
                  <Fish className="w-4 h-4" />
                  <span className="text-sm" style={{ letterSpacing: "0.1em" }}>{fishName}</span>
                </motion.div>
              </>
            )}
          </div>

          {/* Right: Seal Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
            className="flex items-center gap-2"
          >
            <div className="w-9 h-9 bg-[#c8553d] border-2 border-[#a03d25]"
              style={{
                boxShadow: "0 2px 8px rgba(200, 85, 61, 0.3)",
              }}
            >
              <span
                className="flex items-center justify-center h-full text-[#f5f1e8] text-xs"
                style={{ writingMode: "vertical-rl", letterSpacing: "0.08em" }}
              >
                考证
              </span>
            </div>
            <p className="text-xs text-[#666666] leading-snug">
              时空流变·画风考证
            </p>
          </motion.div>
        </div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-[#0a0a0a]/15 to-transparent mt-3"
        />
      </div>
    </motion.div>
  );
}