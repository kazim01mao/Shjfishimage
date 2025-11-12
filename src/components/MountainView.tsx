import { motion } from "motion/react";
import { mountainsData } from "../data/shanhaijing-data";

interface MountainViewProps {
  mountainId: string;
  onBack: () => void;
  onWaterSelect: (waterId: string) => void;
}

export function MountainView({ mountainId, onWaterSelect }: MountainViewProps) {
  const mountain = mountainsData.find(m => m.id === mountainId);

  if (!mountain) return null;

  return (
    <div className="min-h-screen xuan-paper relative pt-20">
      {/* Subtle paper texture overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(10,10,10,0.02) 0%, transparent 50%)`,
        }}
      />

      {/* Content - with proper spacing */}
      <div className="relative z-10 h-screen flex overflow-hidden px-12 pb-8">
        
        {/* Left Side - Mountain Title Section */}
        <motion.aside
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0 w-80 flex flex-col justify-center pr-10 border-r-2 border-[#0a0a0a]/10"
        >
          {/* Cinnabar Seal */}
          <motion.div
            initial={{ scale: 0, rotate: 90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
            className="mb-6"
          >
            <div className="w-20 h-20 bg-[#c8553d] border-2 border-[#a03d25]"
              style={{ boxShadow: "0 3px 12px rgba(200, 85, 61, 0.3)" }}
            >
              <span
                className="flex items-center justify-center h-full text-[#f5f1e8]"
                style={{ writingMode: "vertical-rl", letterSpacing: "0.12em", fontSize: "0.95rem" }}
              >
                {mountain.name.slice(0, 3)}
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="text-[#0a0a0a] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {mountain.name}
          </motion.h2>
          
          <motion.p
            className="text-[#666666] mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ fontSize: "0.95rem", letterSpacing: "0.1em" }}
          >
            {mountain.nameEn}
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "150px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-px bg-[#0a0a0a]/20 mb-6"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-[#3a3a3a] text-sm"
            style={{ letterSpacing: "0.12em" }}
          >
            山经·水脉
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="text-[#666666] text-xs"
            style={{ letterSpacing: "0.08em" }}
          >
            Mountain's Waters
          </motion.p>
        </motion.aside>

        {/* Right Side - Waters Grid */}
        <div className="flex-1 overflow-y-auto pl-10 pt-24 pb-6">
          <div className="max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {mountain.waters.map((water, index) => (
                <motion.button
                  key={water.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                    stiffness: 80
                  }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  onClick={() => onWaterSelect(water.id)}
                  className="group relative"
                >
                  {/* Card Container */}
                  <div className="relative border-2 border-[#0a0a0a]/15 bg-[#f5f1e8]/60 p-6 transition-all duration-500 group-hover:border-[#c8553d]/40 group-hover:bg-[#f5f1e8]/80"
                    style={{
                      boxShadow: "0 3px 12px rgba(0,0,0,0.06)",
                    }}
                  >
                    {/* Corner decorations */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#c8553d]/20" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#c8553d]/20" />

                    {/* Water Wave Illustration */}
                    <div className="mb-5">
                      <svg width="100%" height="50" viewBox="0 0 200 50">
                        <motion.path
                          d="M 10 25 Q 30 18, 50 25 T 90 25 T 130 25 T 170 25 T 190 25"
                          fill="none"
                          stroke="#0a0a0a"
                          strokeWidth="2"
                          strokeLinecap="round"
                          className="opacity-40 group-hover:opacity-70 transition-opacity duration-500"
                          animate={{
                            d: [
                              "M 10 25 Q 30 18, 50 25 T 90 25 T 130 25 T 170 25 T 190 25",
                              "M 10 25 Q 30 32, 50 25 T 90 25 T 130 25 T 170 25 T 190 25",
                              "M 10 25 Q 30 18, 50 25 T 90 25 T 130 25 T 170 25 T 190 25",
                            ]
                          }}
                          transition={{ duration: 4, repeat: Infinity }}
                        />
                        <motion.path
                          d="M 10 32 Q 30 28, 50 32 T 90 32 T 130 32 T 170 32 T 190 32"
                          fill="none"
                          stroke="#0a0a0a"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          className="opacity-25 group-hover:opacity-50 transition-opacity duration-500"
                          animate={{
                            d: [
                              "M 10 32 Q 30 28, 50 32 T 90 32 T 130 32 T 170 32 T 190 32",
                              "M 10 32 Q 30 36, 50 32 T 90 32 T 130 32 T 170 32 T 190 32",
                              "M 10 32 Q 30 28, 50 32 T 90 32 T 130 32 T 170 32 T 190 32",
                            ]
                          }}
                          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                        />
                      </svg>
                    </div>

                    {/* Water Name */}
                    <div className="text-center mb-5 space-y-2">
                      <h3 className="text-[#0a0a0a] group-hover:text-[#c8553d] transition-colors duration-500">
                        {water.name}
                      </h3>
                      <p className="text-[#666666] text-xs" style={{ letterSpacing: "0.08em" }}>
                        {water.nameEn}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-[#0a0a0a]/10 mb-5" />

                    {/* Fish Info */}
                    <div className="text-center space-y-2">
                      <p className="text-[#3a3a3a] text-xs" style={{ letterSpacing: "0.12em" }}>
                        水中异兽 / Creature
                      </p>
                      <p className="text-[#c8553d] text-sm" style={{ letterSpacing: "0.1em" }}>
                        {water.fish}
                      </p>
                    </div>

                    {/* Hover effect border */}
                    <div
                      className="absolute inset-0 border-2 border-[#c8553d]/0 group-hover:border-[#c8553d]/15 transition-all duration-500 pointer-events-none"
                    />
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}