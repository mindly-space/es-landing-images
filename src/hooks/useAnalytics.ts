import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import MixpanelService, { EventName, TrackProperties } from "@/lib/mixpanel";

export function useAnalytics() {
  const { isEnglish } = useContext(LanguageContext);
  const language = isEnglish ? "en" : "es";

  // Helper function to track events with current language
  const track = (event: EventName, extraProperties?: TrackProperties) => {
    // MixpanelService.track(event, {
    //   language,
    //   ...extraProperties,
    // });
  };

  return {
    track,
  };
}
