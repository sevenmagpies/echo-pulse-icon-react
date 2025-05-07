import { useState } from "react";
import { EchoPulseIcon, BotState } from "./EchoPulseIcon";
import { Button } from "@/components/ui/button";
import { 
  SoundWaveCircle24Filled, 
  MicRegular, 
  PauseCircle24Regular 
} from "@fluentui/react-icons";

const EchoPulseDemo = () => {
  const [botState, setBotState] = useState<BotState>("idle");
  const [isAutoDemo, setIsAutoDemo] = useState(false);
  
  // Function to simulate a conversation cycle
  const startAutoDemoSequence = () => {
    if (isAutoDemo) {
      setBotState("idle");
      setIsAutoDemo(false);
      return;
    }
    
    setIsAutoDemo(true);
    const demoSequence = async () => {
      // Start listening
      setBotState("listening");
      await new Promise(r => setTimeout(r, 3000));
      
      // Start speaking
      setBotState("speaking");
      await new Promise(r => setTimeout(r, 5000));
      
      // Go back to listening
      setBotState("listening");
      await new Promise(r => setTimeout(r, 2000));
      
      // Finally idle if still in auto mode
      if (isAutoDemo) {
        setBotState("idle");
        setIsAutoDemo(false);
      }
    };
    
    demoSequence();
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8 p-8">
      <h1 className="text-3xl font-bold text-fluent-primary">Echo Pulse Icon</h1>
      <p className="text-center max-w-md text-gray-600">
        A Microsoft Fluent 2 inspired icon that reacts to the voice of a chatbot.
        It pulses gently when listening and animates dynamically when speaking.
      </p>
      
      <div className="flex flex-wrap justify-center gap-10 my-8">
        <div className="flex flex-col items-center space-y-3">
          <EchoPulseIcon state="idle" size="lg" />
          <span className="text-sm text-gray-500">Idle</span>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <EchoPulseIcon state="listening" size="lg" />
          <span className="text-sm text-gray-500">Listening</span>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <EchoPulseIcon state="speaking" size="lg" />
          <span className="text-sm text-gray-500">Speaking</span>
        </div>
      </div>
      
      <div className="flex flex-col items-center space-y-6 bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold text-fluent-primary">Interactive Demo</h2>
        
        <div className="flex justify-center">
          <EchoPulseIcon state={botState} size="lg" />
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          <Button 
            variant="outline"
            onClick={() => {
              setIsAutoDemo(false);
              setBotState("idle");
            }}
            className={botState === "idle" ? "border-fluent-primary text-fluent-primary" : ""}
          >
            <PauseCircle24Regular className="mr-2 h-4 w-4" />
            Idle
          </Button>
          <Button 
            variant="outline"
            onClick={() => {
              setIsAutoDemo(false);
              setBotState("listening");
            }}
            className={botState === "listening" ? "border-fluent-primary text-fluent-primary" : ""}
          >
            <MicRegular className="mr-2 h-4 w-4" />
            Listening
          </Button>
          <Button 
            variant="outline"
            onClick={() => {
              setIsAutoDemo(false);
              setBotState("speaking");
            }}
            className={botState === "speaking" ? "border-fluent-primary text-fluent-primary" : ""}
          >
            <SoundWaveCircle24Filled className="mr-2 h-4 w-4" />
            Speaking
          </Button>
        </div>
        
        <Button 
          onClick={startAutoDemoSequence}
          className={`w-full ${isAutoDemo ? "bg-destructive hover:bg-destructive/90" : "bg-fluent-accent hover:bg-fluent-accent/90"}`}
        >
          {isAutoDemo ? "Stop Auto Demo" : "Start Auto Demo"}
        </Button>
      </div>
      
      <div className="text-sm text-gray-500 mt-6">
        <p>The icon changes appearance and animation based on the chatbot's state.</p>
      </div>
    </div>
  );
};

export default EchoPulseDemo;
