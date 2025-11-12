import { useState } from "react";
import { motion } from "motion/react";
import { mountainsData } from "../data/shanhaijing-data";
import { BookOpen, Image, TrendingUp, Users, Mountain, Waves, Fish } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface LandingPageProps {
  onMountainSelect: (mountainId: string) => void;
}

type NavigationTab = "overview" | "images" | "analysis" | "team";

export function LandingPage({ onMountainSelect }: LandingPageProps) {
  const [hoveredMountain, setHoveredMountain] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<NavigationTab>("overview");

  // Calculate statistics for images tab
  const totalMountains = mountainsData.length;
  const totalWaters = mountainsData.reduce((sum, m) => sum + m.waters.length, 0);
  const totalCreatures = Object.keys(
    mountainsData.reduce((acc, m) => {
      m.waters.forEach(w => acc[w.fish] = true);
      return acc;
    }, {} as Record<string, boolean>)
  ).length;

  // Get all unique waters
  const allWaters = mountainsData.flatMap(m => 
    m.waters.map(w => ({
      ...w,
      mountainName: m.name,
      mountainNameEn: m.nameEn,
      mountainId: m.id,
    }))
  );

  // Get all unique creatures
  const uniqueCreatures = Array.from(
    new Map(
      mountainsData.flatMap(m => 
        m.waters.map(w => [w.fishId, {
          name: w.fish,
          id: w.fishId,
          mountainName: m.name,
          waterName: w.name,
        }])
      )
    ).values()
  );

  // Style evolution data for charts
  const styleEvolutionData = [
    {
      period: "古代\nAncient",
      写实度: 45,
      复杂性: 30,
      凶猛感: 60,
      抽象性: 70,
    },
    {
      period: "现代A\nModern A",
      写实度: 60,
      复杂性: 55,
      凶猛感: 50,
      抽象性: 45,
    },
    {
      period: "现代B\nModern B",
      写实度: 75,
      复杂性: 70,
      凶猛感: 40,
      抽象性: 30,
    },
    {
      period: "现代C\nModern C",
      写实度: 85,
      复杂性: 80,
      凶猛感: 35,
      抽象性: 20,
    },
  ];

  return (
    <div className="h-screen xuan-paper flex flex-col overflow-hidden">
      
      {/* Unified Header - Navigation + Title */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-shrink-0 px-12 py-4 border-b-2 border-[#0a0a0a]/10 bg-[#f5f1e8]/40"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left - Title Section */}
          <div className="flex items-center gap-5">
            {/* Cinnabar Seal */}
            <motion.div
              initial={{ scale: 0, rotate: 90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
            >
              <div className="w-14 h-14 bg-[#c8553d] border-2 border-[#a03d25]"
                style={{
                  boxShadow: "0 3px 12px rgba(200, 85, 61, 0.35), inset -2px -2px 4px rgba(0,0,0,0.2)",
                }}
              >
                <span
                  className="flex items-center justify-center h-full text-[#f5f1e8] text-sm"
                  style={{ writingMode: "vertical-rl", letterSpacing: "0.12em" }}
                >
                  山海经
                </span>
              </div>
            </motion.div>

            {/* Title Text */}
            <div className="space-y-0.5">
              <h2 className="text-[#0a0a0a]" style={{ fontSize: "1.4rem" }}>山海图鉴</h2>
              <p className="text-[#666666] text-xs" style={{ letterSpacing: "0.12em" }}>
                鱼类异兽·视觉流变 / Fish Evolution Research
              </p>
            </div>
          </div>

          {/* Right - Navigation Buttons */}
          <div className="flex items-center gap-4">
            <NavigationButton
              icon={<BookOpen className="w-5 h-5" />}
              label="项目介绍"
              labelEn="Project Overview"
              isActive={activeTab === "overview"}
              onClick={() => setActiveTab("overview")}
            />
            
            <div className="h-10 w-px bg-[#0a0a0a]/15" />
            
            <NavigationButton
              icon={<Image className="w-5 h-5" />}
              label="鱼兽图谱"
              labelEn="Fish Images"
              isActive={activeTab === "images"}
              onClick={() => setActiveTab("images")}
            />
            
            <div className="h-10 w-px bg-[#0a0a0a]/15" />
            
            <NavigationButton
              icon={<TrendingUp className="w-5 h-5" />}
              label="图像流变"
              labelEn="Style Analysis"
              isActive={activeTab === "analysis"}
              onClick={() => setActiveTab("analysis")}
            />
            
            <div className="h-10 w-px bg-[#0a0a0a]/15" />
            
            <NavigationButton
              icon={<Users className="w-5 h-5" />}
              label="关于我们"
              labelEn="About Team"
              isActive={activeTab === "team"}
              onClick={() => setActiveTab("team")}
            />
          </div>
        </div>
      </motion.nav>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden px-12 pt-8 pb-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Project Overview */}
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Section 1: Project Background */}
              <div className="border-2 border-[#0a0a0a]/15 bg-[#f5f1e8]/60 p-8"
                style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#c8553d] border-2 border-[#a03d25] flex items-center justify-center"
                    style={{ boxShadow: "0 3px 12px rgba(200, 85, 61, 0.3)" }}
                  >
                    <span className="text-[#f5f1e8]" style={{ writingMode: "vertical-rl" }}>背景</span>
                  </div>
                  <div>
                    <h3 className="text-[#0a0a0a]" style={{ fontSize: "1.3rem" }}>项目背景</h3>
                    <p className="text-[#666666] text-sm" style={{ letterSpacing: "0.08em" }}>Project Background</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-[#c8553d] mb-3" style={{ fontSize: "1.05rem" }}>经典文本的挑战 / The Challenge of a Classic Text</h4>
                    <p className="text-[#3a3a3a] leading-relaxed text-sm">
                      The Shanhaijing (Classic of Mountains and Seas) is a foundational Chinese text, but its complex geography and mythical creatures are locked in static, ancient text, making it difficult for modern audiences to visualize and explore.
                    </p>
                  </div>

                  <div className="h-px bg-[#0a0a0a]/10" />

                  <div>
                    <h4 className="text-[#c8553d] mb-3" style={{ fontSize: "1.05rem" }}>演变的想象 / An Evolving Imagination</h4>
                    <p className="text-[#3a3a3a] leading-relaxed text-sm">
                      Visual representations of its creatures have changed dramatically over centuries—from ancient woodcuts to modern digital art—offering a rich, yet un-analyzed, record of shifting aesthetics.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2: Project Significance */}
              <div className="border-2 border-[#0a0a0a]/15 bg-[#f5f1e8]/60 p-8"
                style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#c8553d] border-2 border-[#a03d25] flex items-center justify-center"
                    style={{ boxShadow: "0 3px 12px rgba(200, 85, 61, 0.3)" }}
                  >
                    <span className="text-[#f5f1e8]" style={{ writingMode: "vertical-rl" }}>意义</span>
                  </div>
                  <div>
                    <h3 className="text-[#0a0a0a]" style={{ fontSize: "1.3rem" }}>项目意义</h3>
                    <p className="text-[#666666] text-sm" style={{ letterSpacing: "0.08em" }}>Project Significance</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-[#c8553d] mb-3" style={{ fontSize: "1.05rem" }}>揭示隐藏知识 / Reveals Hidden Knowledge</h4>
                    <p className="text-[#3a3a3a] leading-relaxed text-sm">
                      Builds the first interactive knowledge graph of Shanhaijing's mythical fish, visualizing the hidden relationships between creatures, geography, and mythology.
                    </p>
                  </div>

                  <div className="h-px bg-[#0a0a0a]/10" />

                  <div>
                    <h4 className="text-[#c8553d] mb-3" style={{ fontSize: "1.05rem" }}>追溯视觉与文化演变 / Traces Visual & Cultural Evolution</h4>
                    <p className="text-[#3a3a3a] leading-relaxed text-sm">
                      Creates a unique diachronic (across-time) visual archive to systematically compare how imagination and artistic styles have evolved from ancient to modern times.
                    </p>
                  </div>

                  <div className="h-px bg-[#0a0a0a]/10" />

                  <div>
                    <h4 className="text-[#c8553d] mb-3" style={{ fontSize: "1.05rem" }}>AI驱动的创新分析 / Innovates with AI-Powered Analysis</h4>
                    <p className="text-[#3a3a3a] leading-relaxed text-sm">
                      Pioneers the use of AI to objectively describe and quantify artistic styles, offering a novel method for art history and cultural studies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3: Research Questions */}
              <div className="border-2 border-[#0a0a0a]/15 bg-[#f5f1e8]/60 p-8"
                style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#c8553d] border-2 border-[#a03d25] flex items-center justify-center"
                    style={{ boxShadow: "0 3px 12px rgba(200, 85, 61, 0.3)" }}
                  >
                    <span className="text-[#f5f1e8]" style={{ writingMode: "vertical-rl" }}>问题</span>
                  </div>
                  <div>
                    <h3 className="text-[#0a0a0a]" style={{ fontSize: "1.3rem" }}>研究问题</h3>
                    <p className="text-[#666666] text-sm" style={{ letterSpacing: "0.08em" }}>Research Questions</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-[#c8553d] mt-2 flex-shrink-0" style={{ transform: "rotate(45deg)" }} />
                    <p className="text-[#3a3a3a] leading-relaxed text-sm">
                      How has the cultural imagination of fish-like beasts in the Shanhaijing evolved from antiquity to the present?
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-[#c8553d] mt-2 flex-shrink-0" style={{ transform: "rotate(45deg)" }} />
                    <p className="text-[#3a3a3a] leading-relaxed text-sm">
                      How can Digital Humanities methods reveal and present the spatio-temporal dimensions, knowledge structures, and visual stylistic shifts within this evolution?
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Fish Images - Using existing Mountains/Waters/Creatures logic */}
          {activeTab === "images" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {mountainsData.map((mountain, index) => (
                  <motion.button
                    key={mountain.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 + index * 0.02,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 80,
                    }}
                    onClick={() => onMountainSelect(mountain.id)}
                    onMouseEnter={() => setHoveredMountain(mountain.id)}
                    onMouseLeave={() => setHoveredMountain(null)}
                    className="group w-full"
                    whileHover={{ y: -4 }}
                  >
                    {/* Mountain Card */}
                    <div
                      className={`relative bg-[#f5f1e8]/60 p-5 transition-all duration-500 ${
                        hoveredMountain === mountain.id
                          ? "bg-[#f5f1e8]/95"
                          : ""
                      }`}
                      style={{
                        boxShadow: hoveredMountain === mountain.id
                          ? "0 12px 32px rgba(0,0,0,0.15), 0 0 0 1px rgba(200, 85, 61, 0.2)"
                          : "0 4px 16px rgba(0,0,0,0.08)",
                        transform: hoveredMountain === mountain.id ? "translateY(-4px)" : "translateY(0)",
                      }}
                    >
                      {/* Corner decorations */}
                      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#c8553d]/25" />
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#c8553d]/25" />

                      {/* Mountain Illustration */}
                      <div className="mb-5 h-24 flex items-end justify-center">
                        <svg width="100%" height="100%" viewBox="0 0 200 96" className="overflow-visible">
                          <defs>
                            <linearGradient id={`ink-grad-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#0a0a0a" stopOpacity="0.7" />
                              <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0.3" />
                            </linearGradient>
                          </defs>

                          {/* Background mountain */}
                          <path
                            d="M 10 85 L 60 60 L 110 68 L 160 52 L 190 85"
                            fill="none"
                            stroke="#0a0a0a"
                            strokeWidth="1"
                            opacity="0.15"
                          />

                          {/* Main mountain */}
                          <motion.path
                            d="M 30 85 L 70 50 L 100 62 L 130 35 L 160 58 L 170 85"
                            fill="none"
                            stroke={`url(#ink-grad-${index})`}
                            strokeWidth={hoveredMountain === mountain.id ? "2.5" : "2"}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-all duration-500"
                            opacity={hoveredMountain === mountain.id ? "0.85" : "0.6"}
                          />

                          {/* Pine tree */}
                          <g transform="translate(128, 32)" opacity="0.5">
                            <line x1="0" y1="0" x2="0" y2="16" stroke="#0a0a0a" strokeWidth="1.2" />
                            <path d="M -4 6 L 0 2 L 4 6" fill="none" stroke="#0a0a0a" strokeWidth="1" />
                            <path d="M -5 11 L 0 7 L 5 11" fill="none" stroke="#0a0a0a" strokeWidth="1" />
                            <path d="M -6 16 L 0 12 L 6 16" fill="none" stroke="#0a0a0a" strokeWidth="1" />
                          </g>

                          {/* Water waves */}
                          <motion.path
                            d="M 30 85 Q 60 82, 90 85 T 150 85 T 170 85"
                            fill="none"
                            stroke="#0a0a0a"
                            strokeWidth="1"
                            opacity="0.25"
                            animate={{
                              d: [
                                "M 30 85 Q 60 82, 90 85 T 150 85 T 170 85",
                                "M 30 85 Q 60 88, 90 85 T 150 85 T 170 85",
                                "M 30 85 Q 60 82, 90 85 T 150 85 T 170 85",
                              ]
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                          />
                        </svg>
                      </div>

                      {/* Mountain Name */}
                      <div className="text-center space-y-2 mb-4">
                        <h3
                          className={`transition-colors duration-500 ${
                            hoveredMountain === mountain.id ? "text-[#c8553d]" : "text-[#0a0a0a]"
                          }`}
                          style={{ fontSize: "1.05rem" }}
                        >
                          {mountain.name}
                        </h3>
                        <p className="text-[#666666] text-xs" style={{ letterSpacing: "0.08em" }}>
                          {mountain.nameEn}
                        </p>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-[#0a0a0a]/15 to-transparent mb-4" />

                      {/* Waters and Creatures List */}
                      <div className="space-y-3">
                        {mountain.waters.map((water, waterIndex) => (
                          <div key={water.id} className="space-y-2">
                            {waterIndex > 0 && (
                              <div className="h-px bg-[#0a0a0a]/8 my-3" />
                            )}
                            <div className="text-center space-y-1">
                              <p className="text-[#666666] text-xs" style={{ letterSpacing: "0.08em" }}>
                                水域 / Water
                              </p>
                              <p className="text-[#3a3a3a] text-sm">
                                {water.name}
                              </p>
                            </div>
                            <div className="text-center space-y-1">
                              <p className="text-[#666666] text-xs" style={{ letterSpacing: "0.08em" }}>
                                异兽 / Creature
                              </p>
                              <p className="text-[#c8553d] text-sm" style={{ letterSpacing: "0.06em" }}>
                                {water.fish}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Hover indicator */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        animate={{
                          opacity: hoveredMountain === mountain.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-[#c8553d]/5 to-transparent" />
                      </motion.div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Style Analysis */}
          {activeTab === "analysis" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Hero Section */}
              <div className="text-center border-2 border-[#c8553d]/30 bg-[#f5f1e8]/80 p-10"
                style={{ 
                  boxShadow: "0 6px 24px rgba(200, 85, 61, 0.15)",
                  backgroundImage: "radial-gradient(circle at 20% 50%, rgba(200, 85, 61, 0.03) 0%, transparent 50%)"
                }}
              >
                <h2 className="text-[#c8553d] mb-4" style={{ fontSize: "2rem", letterSpacing: "0.1em" }}>
                  从图腾到奇观
                </h2>
                <p className="text-[#0a0a0a] mb-3" style={{ fontSize: "1.2rem", letterSpacing: "0.08em" }}>
                  山海鱼类图像的千年流变
                </p>
                <p className="text-[#666666] text-sm" style={{ letterSpacing: "0.12em" }}>
                  From Totem to Spectacle: A Millennium of Visual Evolution
                </p>
              </div>

              {/* Trend Chart */}
              <div className="border-2 border-[#0a0a0a]/15 bg-[#f5f1e8]/60 p-8"
                style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#c8553d] border-2 border-[#a03d25] flex items-center justify-center"
                    style={{ boxShadow: "0 3px 12px rgba(200, 85, 61, 0.3)" }}
                  >
                    <span className="text-[#f5f1e8]" style={{ writingMode: "vertical-rl" }}>趋势</span>
                  </div>
                  <div>
                    <h3 className="text-[#0a0a0a]" style={{ fontSize: "1.3rem" }}>风格趋势图</h3>
                    <p className="text-[#666666] text-sm" style={{ letterSpacing: "0.08em" }}>Semantic Trend Graph</p>
                  </div>
                </div>

                <div className="h-96 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={styleEvolutionData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#0a0a0a" strokeOpacity={0.1} />
                      <XAxis 
                        dataKey="period" 
                        stroke="#0a0a0a"
                        tick={{ fill: "#3a3a3a", fontSize: 12 }}
                        angle={-15}
                        textAnchor="end"
                        height={80}
                      />
                      <YAxis 
                        stroke="#0a0a0a"
                        tick={{ fill: "#3a3a3a", fontSize: 12 }}
                        label={{ value: '风格强度 / Style Intensity', angle: -90, position: 'insideLeft', fill: "#666666" }}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "#f5f1e8", 
                          border: "2px solid #0a0a0a",
                          borderRadius: 0,
                          boxShadow: "0 3px 12px rgba(0,0,0,0.1)"
                        }}
                      />
                      <Legend 
                        wrapperStyle={{ paddingTop: "20px" }}
                        iconType="line"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="写实度" 
                        stroke="#c8553d" 
                        strokeWidth={3}
                        dot={{ fill: "#c8553d", r: 5 }}
                        name="写实度 Realism"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="复杂性" 
                        stroke="#0a0a0a" 
                        strokeWidth={3}
                        dot={{ fill: "#0a0a0a", r: 5 }}
                        name="复杂性 Complexity"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="凶猛感" 
                        stroke="#8b4513" 
                        strokeWidth={3}
                        dot={{ fill: "#8b4513", r: 5 }}
                        name="凶猛感 Ferocity"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="抽象性" 
                        stroke="#666666" 
                        strokeWidth={3}
                        dot={{ fill: "#666666", r: 5 }}
                        name="抽象性 Abstraction"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Keyword Evolution */}
              <div className="border-2 border-[#0a0a0a]/15 bg-[#f5f1e8]/60 p-8"
                style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#c8553d] border-2 border-[#a03d25] flex items-center justify-center"
                    style={{ boxShadow: "0 3px 12px rgba(200, 85, 61, 0.3)" }}
                  >
                    <span className="text-[#f5f1e8]" style={{ writingMode: "vertical-rl" }}>词汇</span>
                  </div>
                  <div>
                    <h3 className="text-[#0a0a0a]" style={{ fontSize: "1.3rem" }}>关键词演变</h3>
                    <p className="text-[#666666] text-sm" style={{ letterSpacing: "0.08em" }}>Keyword Cloud Evolution</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                  {/* Ancient */}
                  <div className="border-2 border-[#0a0a0a]/10 bg-[#f5f1e8] p-6 text-center space-y-4">
                    <div className="border-b-2 border-[#c8553d]/30 pb-3">
                      <p className="text-[#0a0a0a]" style={{ fontSize: "1.1rem" }}>古代</p>
                      <p className="text-[#666666] text-xs" style={{ letterSpacing: "0.08em" }}>Ancient</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[#0a0a0a]" style={{ fontSize: "1.3rem" }}>简约</p>
                      <p className="text-[#3a3a3a]" style={{ fontSize: "1.1rem" }}>线条</p>
                      <p className="text-[#666666]">象征</p>
                      <p className="text-[#666666] text-sm">抽象</p>
                    </div>
                  </div>

                  {/* Modern A */}
                  <div className="border-2 border-[#0a0a0a]/10 bg-[#f5f1e8] p-6 text-center space-y-4">
                    <div className="border-b-2 border-[#c8553d]/30 pb-3">
                      <p className="text-[#0a0a0a]" style={{ fontSize: "1.1rem" }}>现代A</p>
                      <p className="text-[#666666] text-xs" style={{ letterSpacing: "0.08em" }}>Modern A</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[#0a0a0a]" style={{ fontSize: "1.3rem" }}>细节</p>
                      <p className="text-[#3a3a3a]" style={{ fontSize: "1.1rem" }}>层次</p>
                      <p className="text-[#666666]">形态</p>
                      <p className="text-[#666666] text-sm">装饰</p>
                    </div>
                  </div>

                  {/* Modern B */}
                  <div className="border-2 border-[#0a0a0a]/10 bg-[#f5f1e8] p-6 text-center space-y-4">
                    <div className="border-b-2 border-[#c8553d]/30 pb-3">
                      <p className="text-[#0a0a0a]" style={{ fontSize: "1.1rem" }}>现代B</p>
                      <p className="text-[#666666] text-xs" style={{ letterSpacing: "0.08em" }}>Modern B</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[#0a0a0a]" style={{ fontSize: "1.3rem" }}>写实</p>
                      <p className="text-[#3a3a3a]" style={{ fontSize: "1.1rem" }}>质感</p>
                      <p className="text-[#666666]">光影</p>
                      <p className="text-[#666666] text-sm">立体</p>
                    </div>
                  </div>

                  {/* Modern C */}
                  <div className="border-2 border-[#0a0a0a]/10 bg-[#f5f1e8] p-6 text-center space-y-4">
                    <div className="border-b-2 border-[#c8553d]/30 pb-3">
                      <p className="text-[#0a0a0a]" style={{ fontSize: "1.1rem" }}>现代C</p>
                      <p className="text-[#666666] text-xs" style={{ letterSpacing: "0.08em" }}>Modern C</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[#0a0a0a]" style={{ fontSize: "1.3rem" }}>精细</p>
                      <p className="text-[#3a3a3a]" style={{ fontSize: "1.1rem" }}>色彩</p>
                      <p className="text-[#666666]">渲染</p>
                      <p className="text-[#666666] text-sm">数字化</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scholarly Interpretation */}
              <div className="border-2 border-[#0a0a0a]/15 bg-[#f5f1e8]/60 p-8"
                style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#c8553d] border-2 border-[#a03d25] flex items-center justify-center"
                    style={{ boxShadow: "0 3px 12px rgba(200, 85, 61, 0.3)" }}
                  >
                    <span className="text-[#f5f1e8]" style={{ writingMode: "vertical-rl" }}>结论</span>
                  </div>
                  <div>
                    <h3 className="text-[#0a0a0a]" style={{ fontSize: "1.3rem" }}>研究结论</h3>
                    <p className="text-[#666666] text-sm" style={{ letterSpacing: "0.08em" }}>Final Analysis</p>
                  </div>
                </div>

                <div className="space-y-4 text-[#3a3a3a] leading-relaxed text-sm">
                  <p>
                    通过对《山海经》鱼类异兽图像的历时性分析，我们发现了一个清晰的视觉演变轨迹：从古代的象征性、抽象性表达，逐步转向现代的写实化、精细化呈现。
                  </p>
                  <p>
                    古代图像强调简约的线条和象征意义，反映了先民对神秘自然的敬畏与想象。而随着时代推进，图像逐渐增加了细节、层次和装饰性元素，展现出对形态的更深入探索。
                  </p>
                  <p>
                    到了现代数字时代，图像呈现出高度写实、精细渲染的特征，色彩丰富、质感立体，体现了技术进步与审美观念的双重变迁。这一演变不仅是艺术风格的转变，更是文化想象力从"图腾崇拜"到"视觉奇观"的深刻转型。
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* About Team */}
          {activeTab === "team" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="border-2 border-[#0a0a0a]/15 bg-[#f5f1e8]/60 p-8"
                style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-[#c8553d] border-2 border-[#a03d25] flex items-center justify-center"
                    style={{ boxShadow: "0 3px 12px rgba(200, 85, 61, 0.3)" }}
                  >
                    <span className="text-[#f5f1e8]" style={{ writingMode: "vertical-rl" }}>团队</span>
                  </div>
                  <div>
                    <h3 className="text-[#0a0a0a]" style={{ fontSize: "1.3rem" }}>研究团队</h3>
                    <p className="text-[#666666] text-sm" style={{ letterSpacing: "0.08em" }}>Research Team</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { name: "Binghuan WU", nameCn: "吴秉桓", role: "Humanities Specialist; Data Analyst" },
                    { name: "Fuxin HU", nameCn: "胡福鑫", role: "Humanities Specialist" },
                    { name: "Junyu MAO", nameCn: "毛浚語", role: "Project Manager; Humanities Specialist" },
                    { name: "Junru WANG", nameCn: "王駿儒", role: "Software Engineer" },
                    { name: "Rui ZHANG", nameCn: "張瑞", role: "Humanities Specialist; Data Analyst" },
                    { name: "Yan ZHENG", nameCn: "鄭琰", role: "Data Analyst; Software Engineer" },
                    { name: "Zhengping LU", nameCn: "陸正平", role: "Humanities Specialist" },
                  ].map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      className="flex items-center justify-between py-3 border-b border-[#0a0a0a]/10 last:border-0"
                    >
                      <div className="flex items-center gap-6">
                        <div className="w-24">
                          <p className="text-[#0a0a0a]">{member.name}</p>
                        </div>
                        <div className="w-20">
                          <p className="text-[#666666] text-sm">{member.nameCn}</p>
                        </div>
                      </div>
                      <div className="flex-1 text-right">
                        <p className="text-[#3a3a3a] text-sm">{member.role}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </div>
  );
}

function NavigationButton({
  icon,
  label,
  labelEn,
  isActive,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  labelEn: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative flex items-center gap-3 px-6 py-3 border-2 transition-all duration-400 ${
        isActive
          ? "border-[#c8553d] bg-[#c8553d]/10"
          : "border-[#0a0a0a]/15 hover:border-[#c8553d]/30 hover:bg-[#c8553d]/5"
      }`}
      style={{
        boxShadow: isActive
          ? "0 4px 16px rgba(200, 85, 61, 0.15)"
          : "0 2px 8px rgba(0, 0, 0, 0.04)",
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={`${isActive ? "text-[#c8553d]" : "text-[#3a3a3a]"} transition-colors duration-400`}>
        {icon}
      </div>
      
      <div className="text-left">
        <p className={`text-sm transition-colors duration-400 ${
          isActive ? "text-[#c8553d]" : "text-[#0a0a0a]"
        }`} style={{ letterSpacing: "0.08em" }}>
          {label}
        </p>
        <p className="text-xs text-[#666666]" style={{ letterSpacing: "0.06em" }}>
          {labelEn}
        </p>
      </div>

      {isActive && (
        <motion.div
          layoutId="nav-indicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c8553d]"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </motion.button>
  );
}