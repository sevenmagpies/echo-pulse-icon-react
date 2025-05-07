
import { useState } from "react";
import { EchoPulseIcon, BotState } from "./EchoPulseIcon";
import { 
  SoundWaveCircle24Filled, 
  MicRegular, 
  PauseCircle24Regular 
} from "@fluentui/react-icons";
import {
  Button,
  Text,
  Title1,
  Card,
  makeStyles,
  tokens,
  shorthands
} from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", 
    ...shorthands.gap("20px"),
    ...shorthands.padding("20px")
  },
  description: {
    textAlign: "center",
    maxWidth: "500px",
    color: tokens.colorNeutralForeground2
  },
  iconsGroup: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    ...shorthands.gap("40px"),
    ...shorthands.margin("20px", "0")
  },
  iconContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    ...shorthands.gap("12px")
  },
  iconLabel: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3
  },
  demoCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    ...shorthands.gap("24px"),
    ...shorthands.padding("24px"),
    width: "100%",
    maxWidth: "400px"
  },
  buttonsGroup: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    ...shorthands.gap("12px")
  },
  activeButton: {
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand
  },
  autoButton: {
    width: "100%"
  },
  footer: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
    ...shorthands.margin("24px", "0", "0", "0")
  },
  demoTitle: {
    fontSize: tokens.fontSizeBase500,
    fontWeight: tokens.fontWeightSemibold
  }
});

const EchoPulseDemo = () => {
  const styles = useStyles();
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
    <div className={styles.container}>
      <Title1>Echo Pulse Icon</Title1>
      <Text className={styles.description}>
        A Microsoft Fluent 2 inspired icon that reacts to the voice of a chatbot.
        It pulses gently when listening and animates dynamically when speaking.
      </Text>
      
      <div className={styles.iconsGroup}>
        <div className={styles.iconContainer}>
          <EchoPulseIcon state="idle" size="lg" />
          <Text className={styles.iconLabel}>Idle</Text>
        </div>
        <div className={styles.iconContainer}>
          <EchoPulseIcon state="listening" size="lg" />
          <Text className={styles.iconLabel}>Listening</Text>
        </div>
        <div className={styles.iconContainer}>
          <EchoPulseIcon state="speaking" size="lg" />
          <Text className={styles.iconLabel}>Speaking</Text>
        </div>
      </div>
      
      <Card className={styles.demoCard}>
        <Text className={styles.demoTitle}>Interactive Demo</Text>
        
        <div>
          <EchoPulseIcon state={botState} size="lg" />
        </div>
        
        <div className={styles.buttonsGroup}>
          <Button 
            appearance="outline"
            onClick={() => {
              setIsAutoDemo(false);
              setBotState("idle");
            }}
            className={botState === "idle" ? styles.activeButton : ""}
            icon={<PauseCircle24Regular />}
          >
            Idle
          </Button>
          <Button 
            appearance="outline"
            onClick={() => {
              setIsAutoDemo(false);
              setBotState("listening");
            }}
            className={botState === "listening" ? styles.activeButton : ""}
            icon={<MicRegular />}
          >
            Listening
          </Button>
          <Button 
            appearance="outline"
            onClick={() => {
              setIsAutoDemo(false);
              setBotState("speaking");
            }}
            className={botState === "speaking" ? styles.activeButton : ""}
            icon={<SoundWaveCircle24Filled />}
          >
            Speaking
          </Button>
        </div>
        
        <Button 
          className={styles.autoButton}
          appearance={isAutoDemo ? "secondary" : "primary"}
          onClick={startAutoDemoSequence}
        >
          {isAutoDemo ? "Stop Auto Demo" : "Start Auto Demo"}
        </Button>
      </Card>
      
      <Text className={styles.footer}>
        The icon changes appearance and animation based on the chatbot's state.
      </Text>
    </div>
  );
};

export default EchoPulseDemo;
