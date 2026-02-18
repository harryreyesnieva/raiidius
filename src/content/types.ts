// ─── Core Data Models ───

export interface Partner {
  name: string
  description: string
  logo?: string
}

export interface Speaker {
  id: string
  name: string
  affiliation: string
  role: SpeakerRole
  bio: string
  keywords: string[]
  headshot?: string
}

export type SpeakerRole =
  | "keynote"
  | "panelist"
  | "breakout-lead"
  | "session-presenter"
  | "moderator"
  | "organizer"

export type SessionFormat =
  | "registration"
  | "welcome"
  | "keynote"
  | "break"
  | "breakout"
  | "panel"
  | "poster"
  | "session"
  | "roundtable"
  | "closing"
  | "reception"

export interface BreakoutTrack {
  id: string
  label: string
  title: string
  description: string
}

export interface Session {
  id: string
  title: string
  format: SessionFormat
  startTime: string
  endTime: string
  description: string
  track?: string
  speakers: string[] // speaker IDs
  breakoutTracks?: BreakoutTrack[]
}

export interface ImportantDate {
  label: string
  date: string
  isPast?: boolean
}

export interface FAQ {
  question: string
  answer: string
}

export interface ThemeArea {
  title: string
  description: string
  icon: string // lucide icon name
}

export interface WhatToExpect {
  title: string
  description: string
  icon: string
}

export interface Outcome {
  title: string
  description: string
}

export interface CommitteeMember {
  name: string
  title: string
  affiliation: string
}

export interface Workshop {
  id: string
  title: string
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels"
  objectives: string[]
  prerequisites: string[]
  instructors: string[]
  capacityNote?: string
  description: string
}

export interface Edition {
  year: number
  themeTitle: string
  themeShortTitle: string
  themeDescription: string
  date: string
  dateISO: string
  timezone: string
  venue: string
  room: string
  address: string
  city: string
  state: string
  hostCampus: string
  partners: Partner[]
  sponsorName: string
  sponsorDescription?: string
  registrationUrl: string
  submissionUrl: string
  contactEmail: string
  agenda: Session[]
  speakers: Speaker[]
  importantDates: ImportantDate[]
  faqs: FAQ[]
  themes: ThemeArea[]
  whatToExpect: WhatToExpect[]
  outcomes: Outcome[]
  committee: CommitteeMember[]
  workshops: Workshop[]
  isActive: boolean
  isComingSoon: boolean
}

export interface SiteConfig {
  seriesName: string
  seriesAcronym: string
  seriesFullName: string
  seriesDescription: string
  editions: Edition[]
}
