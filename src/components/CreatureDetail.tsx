import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ZoomIn, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { fishDatabase } from "../data/shanhaijing-data";

interface CreatureDetailProps {
  fishId: string;
  onBack: () => void;
}

export function CreatureDetail({ fishId, onBack }: CreatureDetailProps) {
  const [selectedTimeline, setSelectedTimeline] = useState("ancient");
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const creature = fishDatabase[fishId];
  
  if (!creature) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] flex flex-col items-center justify-center gap-6 pt-24">
        <p className="text-[#f5f1e8] text-xl">生物资料未找到 / Creature Not Found</p>
      </div>
    );
  }

  const currentNode = creature.timeline.find(t => t.id === selectedTimeline)!;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
      {/* Dark mystical background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2432]/20 via-transparent to-[#2a1a1a]/20" />
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1758092320366-a42aecc7fbcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwc2Nyb2xsJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzYyODMzNzY0fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Floating mist particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 rounded-full bg-[#4a6fa5]/5 blur-3xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.3, 1],
            x: [0, Math.random() * 50 - 25, 0],
            y: [0, Math.random() * 50 - 25, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Content - with top padding for navigation */}
      <div className="relative z-10 pt-24 pb-12 px-8">
        {/* Header with Seal */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center gap-6">
            {/* Red Seal */}
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="w-20 h-20 border-3 border-[#c8553d] bg-[#c8553d] rounded-sm shadow-lg transform -rotate-12"
              style={{ boxShadow: "0 4px 30px rgba(200, 85, 61, 0.5)" }}
            >
              <span 
                className="flex items-center justify-center h-full text-[#f5f1e8]"
                style={{ writingMode: "vertical-rl", letterSpacing: "0.1em" }}
              >
                {creature.name}
              </span>
            </motion.div>

            {/* Title */}
            <div className="text-center">
              <h1 className="text-[#f5f1e8] mb-2" style={{ 
                fontSize: "2.5rem",
                letterSpacing: "0.2em",
                textShadow: "0 0 20px rgba(245, 241, 232, 0.3)"
              }}>
                {creature.name}
              </h1>
              <p className="text-[#4a6fa5] mb-2">{creature.nameEn}</p>
              <div className="h-px bg-gradient-to-r from-transparent via-[#b8956a] to-transparent w-48 mx-auto" />
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Info Panel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="bg-gradient-to-br from-[#1a1a1a]/90 via-[#2a2a2a]/90 to-[#1a1a1a]/90 backdrop-blur-xl border-2 border-[#4a6fa5]/30 rounded-2xl p-6">
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#b8956a]/30" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#b8956a]/30" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#b8956a]/30" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#b8956a]/30" />

                <div className="space-y-6">
                  <InfoSection 
                    label="出处" 
                    labelEn="Source"
                    value={creature.source} 
                    valueEn={creature.sourceEn}
                  />
                  <div className="h-px bg-gradient-to-r from-transparent via-[#4a6fa5]/30 to-transparent" />
                  
                  <InfoSection 
                    label="描述" 
                    labelEn="Description"
                    value={creature.description} 
                    valueEn={creature.descriptionEn}
                  />
                  <div className="h-px bg-gradient-to-r from-transparent via-[#4a6fa5]/30 to-transparent" />
                  
                  <InfoSection 
                    label="功能" 
                    labelEn="Function"
                    value={creature.function} 
                    valueEn={creature.functionEn}
                  />

                  {/* Decorative element */}
                  <div className="pt-4">
                    <svg width="100%" height="40" viewBox="0 0 200 40" className="opacity-20">
                      <path
                        d="M 10 20 Q 50 5, 100 20 T 190 20"
                        fill="none"
                        stroke="#4a6fa5"
                        strokeWidth="2"
                      />
                      <circle cx="100" cy="20" r="3" fill="#c8553d" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Main Area - Timeline & Images */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Timeline Title */}
              <div className="text-center">
                <h3 className="text-[#f5f1e8] text-xl mb-2" style={{ letterSpacing: "0.2em" }}>
                  时空流变·画风考证
                </h3>
                <p className="text-[#4a6fa5] text-sm">Temporal Evolution · Style Analysis</p>
                <div className="h-px bg-gradient-to-r from-transparent via-[#b8956a]/30 to-transparent mt-3 max-w-md mx-auto" />
              </div>

              {/* Timeline Selector */}
              <div className="flex flex-wrap justify-center gap-4">
                {creature.timeline.map((node, index) => (
                  <motion.button
                    key={node.id}
                    onClick={() => setSelectedTimeline(node.id)}
                    className={`group relative px-6 py-3 rounded-xl transition-all duration-300 ${
                      selectedTimeline === node.id
                        ? "bg-gradient-to-r from-[#c8553d]/30 to-[#4a5899]/30 border-2 border-[#c8553d]"
                        : "bg-[#1a1a1a]/50 border-2 border-[#4a6fa5]/20 hover:border-[#4a6fa5]/50"
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                        selectedTimeline === node.id
                          ? "border-[#c8553d] bg-[#c8553d] text-white"
                          : "border-[#4a6fa5] text-[#4a6fa5]"
                      }`}>
                        {index + 1}
                      </div>
                      <div className="text-left">
                        <p className={`text-sm ${
                          selectedTimeline === node.id ? "text-[#f5f1e8]" : "text-[#b8956a]"
                        }`}>
                          {node.label}
                        </p>
                        <p className="text-xs text-[#4a6fa5]/60">{node.labelEn}</p>
                      </div>
                    </div>

                    {/* Selection indicator */}
                    {selectedTimeline === node.id && (
                      <motion.div
                        layoutId="timeline-indicator"
                        className="absolute inset-0 bg-gradient-to-r from-[#c8553d]/10 to-[#4a6fa5]/10 rounded-xl -z-10"
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Image & Analysis Display */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTimeline}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {/* Image Container */}
                  <div className="relative group">
                    <div className="relative bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] p-4 rounded-2xl border-2 border-[#4a6fa5]/30">
                      {/* Decorative corners */}
                      <div className="absolute top-0 left-0 w-12 h-12">
                        <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#c8553d]/60" />
                      </div>
                      <div className="absolute top-0 right-0 w-12 h-12">
                        <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#c8553d]/60" />
                      </div>
                      <div className="absolute bottom-0 left-0 w-12 h-12">
                        <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#c8553d]/60" />
                      </div>
                      <div className="absolute bottom-0 right-0 w-12 h-12">
                        <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#c8553d]/60" />
                      </div>

                      <div className="relative rounded-xl overflow-hidden">
                        <ImageWithFallback
                          src={currentNode.imageUrl}
                          alt={`${creature.name} - ${currentNode.label}`}
                          className="w-full h-auto object-cover"
                          style={{ maxHeight: "500px" }}
                        />
                        
                        {/* Zoom Button */}
                        <button
                          onClick={() => setIsImageExpanded(true)}
                          className="absolute top-4 right-4 w-12 h-12 bg-[#1a1a1a]/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-[#4a6fa5]/30 hover:border-[#c8553d]"
                        >
                          <ZoomIn className="w-5 h-5 text-[#f5f1e8]" />
                        </button>

                        {/* Seal overlay */}
                        <div className="absolute bottom-4 right-4 w-16 h-16 border-3 border-[#c8553d] bg-[#c8553d] rounded-sm shadow-lg transform rotate-12"
                          style={{ boxShadow: "0 4px 20px rgba(200, 85, 61, 0.5)" }}
                        >
                          <span 
                            className="flex items-center justify-center h-full text-[#f5f1e8] text-xs"
                            style={{ writingMode: "vertical-rl" }}
                          >
                            {currentNode.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Style Analysis */}
                  <div className="bg-gradient-to-br from-[#1a1a1a]/90 via-[#2a2a2a]/90 to-[#1a1a1a]/90 backdrop-blur-xl border-2 border-[#4a6fa5]/30 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-[#4a6fa5]/20 rounded-lg flex items-center justify-center">
                        <span className="text-[#4a6fa5]">画</span>
                      </div>
                      <div>
                        <h4 className="text-[#f5f1e8]" style={{ letterSpacing: "0.1em" }}>画风解析</h4>
                        <p className="text-xs text-[#4a6fa5]">Style Analysis</p>
                      </div>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-[#4a6fa5]/30 to-transparent mb-4" />
                    <p className="text-[#f5f1e8]/80 leading-relaxed mb-3">{currentNode.styleAnalysis}</p>
                    <p className="text-[#b8956a] text-sm leading-relaxed">{currentNode.styleAnalysisEn}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Evolution Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-[#2a1a1a]/90 via-[#1a1a1a]/90 to-[#2a1a1a]/90 backdrop-blur-xl border-2 border-[#c8553d]/30 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#c8553d]/20 rounded-lg flex items-center justify-center">
                    <span className="text-[#c8553d]">变</span>
                  </div>
                  <div>
                    <h4 className="text-[#f5f1e8]" style={{ letterSpacing: "0.1em" }}>风格演变总览</h4>
                    <p className="text-xs text-[#4a6fa5]">Evolution Summary</p>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#c8553d]/30 to-transparent mb-4" />
                <p className="text-[#f5f1e8]/80 leading-relaxed mb-3">{creature.evolutionSummary}</p>
                <p className="text-[#b8956a] text-sm leading-relaxed">{creature.evolutionSummaryEn}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Expanded Image Modal */}
      <AnimatePresence>
        {isImageExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0a0a0a]/98 z-50 flex items-center justify-center p-8"
            onClick={() => setIsImageExpanded(false)}
          >
            <button
              onClick={() => setIsImageExpanded(false)}
              className="absolute top-6 right-6 w-12 h-12 bg-[#1a1a1a]/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#f5f1e8] hover:bg-[#c8553d] transition-colors border border-[#4a6fa5]/30"
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-6xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={currentNode.imageUrl}
                alt={`${creature.name} - ${currentNode.label}`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative clouds */}
      <motion.div
        className="absolute bottom-20 left-10 opacity-5"
        animate={{
          x: [0, 30, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 20,
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

function InfoSection({ 
  label, 
  labelEn,
  value, 
  valueEn,
}: { 
  label: string;
  labelEn: string;
  value: string;
  valueEn?: string;
}) {
  return (
    <div className="space-y-2">
      <dt className="text-[#4a6fa5] text-sm" style={{ letterSpacing: "0.05em" }}>
        {label} <span className="text-xs text-[#4a6fa5]/60">/ {labelEn}</span>
      </dt>
      <dd className="text-[#f5f1e8]/90 leading-relaxed">
        {value}
      </dd>
      {valueEn && (
        <dd className="text-[#b8956a] text-sm leading-relaxed">
          {valueEn}
        </dd>
      )}
    </div>
  );
}
