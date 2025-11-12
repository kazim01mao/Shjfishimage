import { useState } from "react";
import { SplashPage } from "./components/SplashPage";
import { LandingPage } from "./components/LandingPage";
import { MountainView } from "./components/MountainView";
import { CreatureDetail } from "./components/CreatureDetail";
import { NavigationBar } from "./components/NavigationBar";
import { mountainsData, fishDatabase } from "./data/shanhaijing-data";

type Screen = "splash" | "landing" | "mountain" | "detail";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("splash");
  const [selectedMountain, setSelectedMountain] = useState<string>("");
  const [selectedWater, setSelectedWater] = useState<string>("");
  const [selectedFish, setSelectedFish] = useState<string>("");

  const handleEnterSite = () => {
    setCurrentScreen("landing");
  };

  const handleMountainSelect = (mountainId: string) => {
    setSelectedMountain(mountainId);
    setCurrentScreen("mountain");
  };

  const handleWaterSelect = (waterId: string) => {
    setSelectedWater(waterId);
    // Find the fish for this water and go directly to detail
    const mountain = mountainsData.find(m => m.id === selectedMountain);
    if (mountain) {
      const water = mountain.waters.find(w => w.id === waterId);
      if (water) {
        setSelectedFish(water.fishId);
        setCurrentScreen("detail");
      }
    }
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

  // Get current navigation info
  const mountain = mountainsData.find(m => m.id === selectedMountain);
  let water = null;
  if (mountain && selectedWater) {
    water = mountain.waters.find(w => w.id === selectedWater);
  }
  const fish = selectedFish ? fishDatabase[selectedFish] : null;

  return (
    <div className="min-h-screen">
      {/* Splash Screen */}
      {currentScreen === "splash" && (
        <SplashPage onEnter={handleEnterSite} />
      )}

      {/* Navigation Bar - shown on all screens except splash and landing */}
      {currentScreen !== "splash" && currentScreen !== "landing" && (
        <NavigationBar
          currentLevel={currentScreen === "mountain" ? "mountain" : "fish"}
          mountainName={mountain?.name}
          waterName={water?.name}
          fishName={fish?.name}
          onNavigateHome={handleBackToLanding}
          onNavigateMountain={currentScreen !== "mountain" ? handleBackToMountain : undefined}
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
      
      {currentScreen === "detail" && (
        <CreatureDetail
          fishId={selectedFish}
          waterId={selectedWater}
          onBack={handleBackToMountain}
        />
      )}
    </div>
  );
}