import mixpanel from "mixpanel-browser";

// Initialize mixpanel
mixpanel.init(import.meta.env.VITE_MIXPANEL_API_KEY || "", {
  debug: import.meta.env.DEV,
  track_pageview: false,
  // record_sessions_percent: 100,
});

// Event types
export enum EventName {
  // Page views
  MAIN_SCREEN_VIEWED = "MainScreenViewed",

  // Header interactions
  HEADER_BUTTON_CLICKED = "HeaderButtonClicked",
  MENU_BUTTON_CLICKED = "MenuButtonClicked",
  ABOUT_SECTION_CLICKED = "AboutSectionClicked",
  COMMUNITY_SECTION_CLICKED = "CommunitySesctionClicked",
  HOWITWORKS_SECTION_CLICKED = "HowitworksSesctionClicked",
  SPECIALISTS_SECTION_CLICKED = "SpecialistsSesctionClicked",
  LANGUAGE_BUTTON_CLICKED = "LanguageButtonClicked",

  // Hero section
  HERO_BUTTON_CLICKED = "HeroButtonClicked",

  // About section
  ABOUT_BUTTON_CLICKED = "AboutButtonClicked",

  // Comparison section
  COMPARING_BUTTON_CLICKED = "ComparingButtonClicked",

  // Reason blocks
  REASON_BLOCK_CLICKED = "ReasonBlockClicked",
  THERAPY_BLOCK_CLICKED = "TherapyBlockClicked",

  // Help and download buttons
  HELP_BUTTON_CLICKED = "HelpButtonClicked",
  WHATSAPP_BUTTON_CLICKED = "WhatsappButtonClicked",
  APPSTORE_BUTTON_CLICKED = "AppstoreButtonClicked",
  GOOGLE_BUTTON_CLICKED = "GoogleButtonClicked",

  // FAQ
  FAQ_CHAPTER_CLICKED = "FaqChapterClicked",

  // Footer
  INSTAGRAM_BUTTON_CLICKED = "InstagramButtonClicked",
  FACEBOOK_BUTTON_CLICKED = "FacebookButtonClicked",

  THERAPIST_NAME_CLICKED = "TherapistNameClicked",
}

// Reason types for ReasonBlockClicked
export enum ReasonType {
  STRESS_BURNOUT = "stress&burnout",
  ANXIETY = "anxiety",
  DEPRESSION = "depression",
  LOSS_GRIEF = "loss&grief",
  RELATIONSHIPS = "relationships",
  IMMIGRATION = "immigration",
}

// Interface for tracking properties
export interface TrackProperties {
  language?: string;
  type?: string;
  id?: string;
}

// Analytics service
const MixpanelService = {
  /**
   * Track an event in Mixpanel
   * @param event The name of the event
   * @param properties Optional properties to include with the event
   */
  track: (event: EventName, properties?: TrackProperties) => {
    mixpanel.track(event, properties);
  },
};

export default MixpanelService;
