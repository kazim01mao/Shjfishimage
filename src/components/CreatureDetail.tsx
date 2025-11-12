import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ZoomIn, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { fishDatabase, mountainsData } from "../data/shanhaijing-data";

interface CreatureDetailProps {
  fishId: string;
  waterId?: string;
  onBack: () => void;
}

export function CreatureDetail({ fishId, waterId, onBack }: CreatureDetailProps) {
  const [selectedTimeline, setSelectedTimeline] = useState("ancient");
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [currentFishId, setCurrentFishId] = useState(fishId);

  const creature = fishDatabase[currentFishId];
  
  // Find water and mountain info if waterId is provided
  let waterInfo = null;
  let mountainInfo = null;
  let fishList: string[] = [currentFishId];
  
  if (waterId) {
    for (const mountain of mountainsData) {
      const foundWater = mountain.waters.find(w => w.id === waterId);
      if (foundWater) {
        waterInfo = foundWater;
        mountainInfo = mountain;
        // In current data structure, each water has one fish
        // But we keep it as array for future expansion
        fishList = [foundWater.fishId];
        break;
      }
    }
  }
  
  if (!creature) {
    return (
      <div className="h-screen xuan-paper flex flex-col items-center justify-center gap-6">
        <p className="text-[#0a0a0a]">生物资料未找到 / Creature Not Found</p>
      </div>
    );
  }

  const currentNode = creature.timeline.find(t => t.id === selectedTimeline)!;

  return (
    <div className="h-screen xuan-paper flex overflow-hidden pt-20">
      
      {/* Left Sidebar - Fixed Info Panel */}
      <motion.aside
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-shrink-0 w-64 border-r-2 border-[#0a0a0a]/10 flex flex-col overflow-hidden"
      >
        {/* Mountain/Water/Fish info section removed - navigation now in top bar */}
        
        {/* Fish Selector - If multiple fish */}
        {fishList.length > 1 && (
          <div className="p-3 border-b-2 border-[#0a0a0a]/10 bg-[#f5f1e8]/20">
            <p className="text-[#666666] text-xs mb-2" style={{ letterSpacing: "0.08em" }}>
              鱼类选择 / Fish Selection
            </p>
            <div className="flex flex-wrap gap-2">
              {fishList.map((fId) => {
                const fish = fishDatabase[fId];
                const isSelected = currentFishId === fId;
                return (
                  <button
                    key={fId}
                    onClick={() => setCurrentFishId(fId)}
                    className={`px-2 py-1 text-xs border transition-all ${
                      isSelected
                        ? "border-[#c8553d] bg-[#c8553d]/10 text-[#c8553d]"
                        : "border-[#0a0a0a]/15 text-[#0a0a0a] hover:border-[#c8553d]/40"
                    }`}
                  >
                    {fish?.name || fId}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Scrollable Info */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 flex flex-col justify-center">
          <InfoSection 
            label="出处" 
            labelEn="Source"
            value={creature.source} 
            valueEn={creature.sourceEn}
          />
          
          <div className="h-px bg-[#0a0a0a]/10" />
          
          <InfoSection 
            label="描述" 
            labelEn="Description"
            value={creature.description} 
            valueEn={creature.descriptionEn}
          />
          
          <div className="h-px bg-[#0a0a0a]/10" />
          
          <InfoSection 
            label="功能" 
            labelEn="Function"
            value={creature.function} 
            valueEn={creature.functionEn}
          />

          <div className="h-px bg-[#0a0a0a]/10" />

          {/* Evolution Summary in Sidebar */}
          <div className="space-y-2">
            <dt className="text-[#666666] text-xs" style={{ letterSpacing: "0.08em" }}>
              风格演变 <span className="text-xs text-[#666666]/60">/ Evolution</span>
            </dt>
            <dd className="text-[#3a3a3a] text-xs leading-relaxed">
              {creature.evolutionSummary}
            </dd>
            {creature.evolutionSummaryEn && (
              <dd className="text-[#666666] text-xs leading-relaxed">
                {creature.evolutionSummaryEn}
              </dd>
            )}
          </div>
        </div>
      </motion.aside>

      {/* Right Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Image & Analysis - Scrollable */}
        <div className="flex-1 overflow-y-auto px-5 pt-6 pb-4 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTimeline}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto space-y-5"
            >
              
              {/* Image Container */}
              <div className="relative group">
                <div className="relative border-2 border-[#0a0a0a]/15 bg-[#f5f1e8] overflow-hidden"
                  style={{
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                  }}
                >
                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#c8553d]/30 z-10" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#c8553d]/30 z-10" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#c8553d]/30 z-10" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#c8553d]/30 z-10" />

                  {/* Image Section */}
                  <div className="relative overflow-hidden p-3">
                    <ImageWithFallback
                      src={currentNode.imageUrl}
                      alt={`${creature.name} - ${currentNode.label}`}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ 
                        maxHeight: "400px"
                      }}
                    />
                    
                    {/* Zoom Button */}
                    <button
                      onClick={() => setIsImageExpanded(true)}
                      className="absolute top-5 right-5 w-9 h-9 bg-[#0a0a0a]/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-[#f5f1e8]/20 hover:bg-[#c8553d]"
                    >
                      <ZoomIn className="w-4 h-4 text-[#f5f1e8]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Style Analysis */}
              <div className="border-2 border-[#0a0a0a]/15 bg-[#f5f1e8]/60 p-4"
                style={{
                  boxShadow: "0 3px 12px rgba(0,0,0,0.06)",
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 border-2 border-[#0a0a0a]/20 flex items-center justify-center">
                    <span className="text-[#0a0a0a]">画</span>
                  </div>
                  <div>
                    <h4 className="text-[#0a0a0a]" style={{ fontSize: "1rem" }}>画风解析</h4>
                    <p className="text-xs text-[#666666]" style={{ letterSpacing: "0.08em" }}>
                      Style Analysis
                    </p>
                  </div>
                </div>
                
                <div className="h-px bg-[#0a0a0a]/10 mb-3" />
                
                <div className="space-y-2.5">
                  <p className="text-[#3a3a3a] text-sm leading-relaxed">
                    {currentNode.styleAnalysis}
                  </p>
                  <p className="text-[#666666] text-xs leading-relaxed">
                    {currentNode.styleAnalysisEn}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Timeline Selector - Fixed Bottom */}
        <div className="border-t-2 border-[#0a0a0a]/10 bg-[#f5f1e8]/95 backdrop-blur-sm px-5 py-3">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              {creature.timeline.map((node, index) => {
                const isSelected = selectedTimeline === node.id;
                const displayLabels = [
                  { main: "古代", sub: "Ancient" },
                  { main: "现代1", sub: "Modern 1" },
                  { main: "现代2", sub: "Modern 2" },
                  { main: "现代3", sub: "Modern 3" },
                ];
                
                return (
                  <motion.button
                    key={node.id}
                    onClick={() => setSelectedTimeline(node.id)}
                    className={`group relative px-3 py-1.5 border transition-all duration-400 ${
                      isSelected
                        ? "border-[#c8553d] bg-[#c8553d]/10"
                        : "border-[#0a0a0a]/15 hover:border-[#c8553d]/40 hover:bg-[#c8553d]/5"
                    }`}
                    style={{
                      boxShadow: isSelected
                        ? "0 2px 6px rgba(200, 85, 61, 0.15)"
                        : "0 1px 3px rgba(0, 0, 0, 0.04)",
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center gap-1.5">
                      {/* Number Badge */}
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-400 ${
                        isSelected
                          ? "border-[#c8553d] bg-[#c8553d] text-[#f5f1e8]"
                          : "border-[#0a0a0a]/25 text-[#3a3a3a] group-hover:border-[#c8553d]/40"
                      }`}>
                        <span className="text-xs">{index + 1}</span>
                      </div>
                      
                      {/* Label */}
                      <p className={`transition-colors duration-400 text-xs ${
                        isSelected ? "text-[#c8553d]" : "text-[#0a0a0a] group-hover:text-[#c8553d]/80"
                      }`} style={{ letterSpacing: "0.08em" }}>
                        {displayLabels[index].main}
                      </p>
                    </div>

                    {/* Selected indicator */}
                    {isSelected && (
                      <motion.div
                        layoutId="timeline-indicator"
                        className="absolute top-0 left-0 right-0 h-0.5 bg-[#c8553d]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
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
      <dt className="text-[#666666] text-xs" style={{ letterSpacing: "0.08em" }}>
        {label} <span className="text-xs text-[#666666]/60">/ {labelEn}</span>
      </dt>
      <dd className="text-[#3a3a3a] text-sm leading-relaxed">
        {value}
      </dd>
      {valueEn && (
        <dd className="text-[#666666] text-xs leading-relaxed">
          {valueEn}
        </dd>
      )}
    </div>
  );
}