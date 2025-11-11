import { useState } from "react";
import { LandingPage } from "./components/LandingPage";
import { MountainView } from "./components/MountainView";
import { WaterView } from "./components/WaterView";
import { CreatureDetail } from "./components/CreatureDetail";
import { NavigationBar } from "./components/NavigationBar";
import { mountainsData, fishDatabase } from "./data/shanhaijing-data";

type Screen = "landing" | "mountain" | "water" | "detail";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("landing");
  const [selectedMountain, setSelectedMountain] = useState<string>("");
  const [selectedWater, setSelectedWater] = useState<string>("");
  const [selectedFish, setSelectedFish] = useState<string>("");

  const handleMountainSelect = (mountainId: string) => {
    setSelectedMountain(mountainId);
    setCurrentScreen("mountain");
  };

  const handleWaterSelect = (waterId: string) => {
    setSelectedWater(waterId);
    setCurrentScreen("water");
  };

  const handleFishSelect = (fishId: string) => {
    setSelectedFish(fishId);
    setCurrentScreen("detail");
  };

  const handleBackToLanding = () => {
    setCurrentScreen("landing");
    setSelectedMountain("");
    setSelectedWater("");
    setSelectedFish("");
  };

  const handleBackToMountain = () => {
    setCurrentScreen("mountain");
    setSelectedWater("");
    setSelectedFish("");
  };

  const handleBackToWater = () => {
    setCurrentScreen("water");
    setSelectedFish("");
  };

  // Get current navigation info
  const mountain = mountainsData.find(m => m.id === selectedMountain);
  let water = null;
  if (mountain && selectedWater) {
    water = mountain.waters.find(w => w.id === selectedWater);
  }
  const fish = selectedFish ? fishDatabase[selectedFish] : null;

  return (
    <div className="min-h-screen">
      {/* Navigation Bar - shown on all screens except landing */}
      {currentScreen !== "landing" && (
        <NavigationBar
          currentLevel={currentScreen === "mountain" ? "mountain" : currentScreen === "water" ? "water" : "fish"}
          mountainName={mountain?.name}
          waterName={water?.name}
          fishName={fish?.name}
          onNavigateHome={handleBackToLanding}
          onNavigateMountain={currentScreen !== "mountain" ? handleBackToMountain : undefined}
          onNavigateWater={currentScreen === "detail" ? handleBackToWater : undefined}
        />
      )}

      {currentScreen === "landing" && (
        <LandingPage onMountainSelect={handleMountainSelect} />
      )}
      
      {currentScreen === "mountain" && (
        <MountainView
          mountainId={selectedMountain}
          onBack={handleBackToLanding}
          onWaterSelect={handleWaterSelect}
        />
      )}
      
      {currentScreen === "water" && (
        <WaterView
          waterId={selectedWater}
          onBack={handleBackToMountain}
          onFishSelect={handleFishSelect}
        />
      )}
      
      {currentScreen === "detail" && (
        <CreatureDetail
          fishId={selectedFish}
          onBack={handleBackToWater}
        />
      )}
    </div>
  );
}