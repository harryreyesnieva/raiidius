import type {
  SiteConfig,
  Edition,
  Session,
  Speaker,
  ImportantDate,
  FAQ,
  ThemeArea,
  WhatToExpect,
  Outcome,
  CommitteeMember,
  Workshop,
  Partner,
} from "./types"

// ─── Series-Level Configuration ───

export const siteConfig: SiteConfig = {
  seriesName: "RAIIDIUS",
  seriesAcronym: "RAIIDIUS",
  seriesFullName:
    "Responsible AI for Infectious Diseases using Data Science & Informatics for Understanding & Surveillance",
  seriesDescription:
    "RAIIDIUS is an annual symposium series advancing responsible AI and informatics for infectious diseases across prevention, diagnosis, surveillance, treatment, clinical decision support, and implementation in clinical and public health settings.",
  editions: [], // populated below
}

// ─── 2026 Edition Data ───

const partners2026: Partner[] = [
  {
    name: "CUIMC Division of Infectious Diseases",
    description:
      "Leading research and clinical care in infectious diseases at Columbia University Irving Medical Center.",
  },
  {
    name: "Columbia Department of Biomedical Informatics",
    description:
      "Advancing data science and informatics research for healthcare and biomedical applications.",
  },
  {
    name: "AI@VP&S Initiative",
    description:
      "Fostering responsible AI innovation in medical education and clinical practice at Columbia Vagelos College of Physicians and Surgeons.",
  },
]

const speakers2026: Speaker[] = [
  {
    id: "speaker-1",
    name: "Dr. Sarah Chen",
    affiliation: "Columbia University Irving Medical Center",
    role: "keynote",
    bio: "Dr. Chen is a clinician-technologist specializing in digital health solutions for STI screening and management. Her work bridges clinical practice with machine learning applications.",
    keywords: ["digital health", "STI screening", "clinical AI", "diagnostics"],
  },
  {
    id: "speaker-2",
    name: "Dr. Marcus Johnson",
    affiliation: "Johns Hopkins Bloomberg School of Public Health",
    role: "keynote",
    bio: "An epidemiologist focused on AI-driven disease surveillance and outbreak prediction. Dr. Johnson explores how computational approaches can enhance public health responses to STIs.",
    keywords: [
      "epidemiology",
      "surveillance",
      "predictive modeling",
      "public health",
    ],
  },
  {
    id: "speaker-3",
    name: "Dr. Amara Okafor",
    affiliation: "CDC Division of STD Prevention",
    role: "panelist",
    bio: "Dr. Okafor leads public health AI implementation programs at the CDC, focusing on equitable deployment of AI tools for STI prevention and control.",
    keywords: ["public health", "health equity", "implementation science", "CDC"],
  },
  {
    id: "speaker-4",
    name: "Dr. David Ramirez",
    affiliation: "Stanford University School of Medicine",
    role: "panelist",
    bio: "A clinician-researcher investigating AI bias in diagnostic algorithms and developing frameworks for ethical AI deployment in sexual health.",
    keywords: [
      "AI ethics",
      "bias mitigation",
      "diagnostic algorithms",
      "sexual health",
    ],
  },
  {
    id: "speaker-5",
    name: "Dr. Emily Park",
    affiliation: "University of Washington",
    role: "breakout-lead",
    bio: "Dr. Park leads research on AI-powered patient engagement tools, including sexual health chatbots and adherence support applications.",
    keywords: [
      "patient engagement",
      "chatbots",
      "digital therapeutics",
      "mHealth",
    ],
  },
  {
    id: "speaker-6",
    name: "Dr. James Whitfield",
    affiliation: "New York City Department of Health",
    role: "panelist",
    bio: "Dr. Whitfield is a community health advocate working at the intersection of public health policy and AI-driven interventions for underserved populations.",
    keywords: [
      "community health",
      "health policy",
      "advocacy",
      "underserved populations",
    ],
  },
]

const agenda2026: Session[] = [
  {
    id: "s1",
    title: "Registration & Breakfast",
    format: "registration",
    startTime: "8:00 AM",
    endTime: "8:30 AM",
    description: "Check in, pick up your badge, and enjoy a light breakfast.",
    speakers: [],
  },
  {
    id: "s2",
    title: "Welcome & Opening Remarks",
    format: "welcome",
    startTime: "8:30 AM",
    endTime: "8:45 AM",
    description:
      "Dr. Reyes Nieva presents the vision and key objectives of RAIIDIUS 2026; acknowledges ASTDA support.",
    speakers: [],
  },
  {
    id: "s3",
    title: "Keynote 1",
    format: "keynote",
    startTime: "8:45 AM",
    endTime: "9:30 AM",
    description:
      "Expert clinician-technologist presents case examples of AI applications in STI diagnostics and clinical decision-making.",
    speakers: ["speaker-1"],
  },
  {
    id: "s4",
    title: "Keynote 2",
    format: "keynote",
    startTime: "9:30 AM",
    endTime: "10:15 AM",
    description:
      "Epidemiologist shares AI-driven surveillance opportunities and implementation concerns in the field of STI prevention.",
    speakers: ["speaker-2"],
  },
  {
    id: "s5",
    title: "Morning Coffee Break & Networking",
    format: "break",
    startTime: "10:15 AM",
    endTime: "10:30 AM",
    description: "Refreshments and informal networking.",
    speakers: [],
  },
  {
    id: "s6",
    title: "Concurrent Breakout Sessions",
    format: "breakout",
    startTime: "10:30 AM",
    endTime: "11:45 AM",
    description:
      "Choose one of three concurrent sessions exploring different dimensions of AI for STIs.",
    speakers: ["speaker-5"],
    breakoutTracks: [
      {
        id: "track-a",
        label: "A",
        title: "Diagnostics & Imaging",
        description:
          "Explore AI applications in STI diagnostics, including image recognition for lesion classification and point-of-care testing innovations.",
      },
      {
        id: "track-b",
        label: "B",
        title: "Surveillance & Predictive Modeling",
        description:
          "Learn about AI-powered surveillance systems and predictive models for STI outbreak detection and response.",
      },
      {
        id: "track-c",
        label: "C",
        title: "Ethics, Bias & Equity in AI for STIs",
        description:
          "Examine ethical considerations, algorithmic bias, and health equity challenges in deploying AI for sexual health.",
      },
    ],
  },
  {
    id: "s7",
    title: "Panel Discussion & Q&A",
    format: "panel",
    startTime: "11:45 AM",
    endTime: "12:45 PM",
    description:
      '"Implementing AI in Clinical and Public Health STI Practice" \u2014 Panel includes clinicians, public health leaders, and community advocates discussing real-world deployment challenges and opportunities.',
    speakers: ["speaker-3", "speaker-4", "speaker-6"],
  },
  {
    id: "s8",
    title: "Boxed Lunch & Poster Session (Lunch)",
    format: "poster",
    startTime: "12:45 PM",
    endTime: "1:45 PM",
    description:
      "Enjoy a boxed lunch while exploring poster presentations showcasing AI-based STI research by trainees.",
    speakers: [],
  },
  {
    id: "s9",
    title: "Poster Session (Afternoon)",
    format: "poster",
    startTime: "1:45 PM",
    endTime: "3:15 PM",
    description:
      '"AI and Informatics-based Methods and Applications for Infectious Disease Research" \u2014 Continued poster presentations and in-depth discussions.',
    speakers: [],
  },
  {
    id: "s10",
    title: "Afternoon Coffee Break & Networking",
    format: "break",
    startTime: "3:15 PM",
    endTime: "3:30 PM",
    description: "Refreshments and informal networking.",
    speakers: [],
  },
  {
    id: "s11",
    title: "Session: AI-Powered Patient Engagement Tools",
    format: "session",
    startTime: "3:30 PM",
    endTime: "4:15 PM",
    description:
      "Presentations on sexual-health chatbots, adherence apps, and patient outreach tools leveraging AI and informatics.",
    speakers: ["speaker-5"],
  },
  {
    id: "s12",
    title: "Roundtable Discussion",
    format: "roundtable",
    startTime: "4:15 PM",
    endTime: "5:00 PM",
    description:
      '"Next Steps: Collaborations, Pilots & Policy" \u2014 Planning future initiatives and multidisciplinary partnerships for responsible AI in STI care.',
    speakers: [],
  },
  {
    id: "s13",
    title: "Closing Remarks",
    format: "closing",
    startTime: "5:00 PM",
    endTime: "5:15 PM",
    description:
      "Summary takeaways; thank ASTDA; outline next steps for the RAIIDIUS community.",
    speakers: [],
  },
  {
    id: "s14",
    title: "Networking Reception",
    format: "reception",
    startTime: "5:15 PM",
    endTime: "6:15 PM",
    description:
      "Wind down the day with drinks and conversation. Connect with speakers, trainees, and fellow attendees.",
    speakers: [],
  },
]

const importantDates2026: ImportantDate[] = [
  {
    label: "Abstract Submission Opens",
    date: "March 1, 2026",
  },
  {
    label: "Abstract Submission Deadline",
    date: "April 15, 2026",
  },
  {
    label: "Acceptance Notifications",
    date: "May 1, 2026",
  },
  {
    label: "Early Registration Deadline",
    date: "May 15, 2026",
  },
  {
    label: "Symposium Day",
    date: "June 9, 2026",
  },
]

const themes2026: ThemeArea[] = [
  {
    title: "Diagnostics",
    description:
      "AI-powered diagnostic tools for STI detection, image recognition, and point-of-care testing.",
    icon: "Microscope",
  },
  {
    title: "Surveillance",
    description:
      "Real-time disease surveillance systems and epidemiological monitoring using AI and data science.",
    icon: "Activity",
  },
  {
    title: "Predictive Modeling",
    description:
      "Machine learning models for outbreak prediction, risk stratification, and resource allocation.",
    icon: "TrendingUp",
  },
  {
    title: "Ethics, Bias & Equity",
    description:
      "Addressing algorithmic bias, health disparities, and ethical frameworks for responsible AI deployment.",
    icon: "Scale",
  },
  {
    title: "Clinical & Public Health Implementation",
    description:
      "Translating AI innovations into real-world clinical workflows and public health programs.",
    icon: "Building2",
  },
  {
    title: "Patient Engagement Tools",
    description:
      "AI-driven chatbots, adherence apps, and digital tools for patient education and outreach.",
    icon: "MessageCircle",
  },
]

const whatToExpect2026: WhatToExpect[] = [
  {
    title: "Keynotes",
    description:
      "Leading experts present case studies and emerging research at the intersection of AI and STI care.",
    icon: "Mic",
  },
  {
    title: "Breakout Sessions",
    description:
      "Deep-dive concurrent sessions on diagnostics, surveillance, and ethics.",
    icon: "LayoutGrid",
  },
  {
    title: "Panel & Q&A",
    description:
      "Interdisciplinary panel on implementing AI in clinical and public health STI practice.",
    icon: "Users",
  },
  {
    title: "Poster Showcase",
    description:
      "Trainee-led poster presentations featuring innovative AI and informatics research.",
    icon: "GraduationCap",
  },
  {
    title: "Methods & Implementation",
    description:
      "Sessions focused on practical approaches, tools, and real-world deployment strategies.",
    icon: "Wrench",
  },
  {
    title: "Networking Reception",
    description:
      "Connect with researchers, clinicians, and public health professionals over refreshments.",
    icon: "Wine",
  },
]

const faqs2026: FAQ[] = [
  {
    question: "Who should attend RAIIDIUS 2026?",
    answer:
      "RAIIDIUS 2026 welcomes researchers, clinicians, public health professionals, data scientists, informaticians, trainees (students, residents, fellows), and community advocates interested in the intersection of AI, informatics, and infectious disease prevention and control.",
  },
  {
    question: "Is the symposium open to trainees?",
    answer:
      "Absolutely. RAIIDIUS places special emphasis on trainee participation. We offer discounted registration rates and a dedicated poster session for trainees to showcase their research.",
  },
  {
    question: "What format should abstracts follow?",
    answer:
      "Abstracts should be no more than 300 words and include: background/rationale, methods, results (or expected results), and conclusions/implications. Detailed guidelines will be posted when abstract submission opens.",
  },
  {
    question: "Can I submit more than one abstract?",
    answer:
      "Yes, you may submit multiple abstracts. Each will be reviewed independently. Please indicate your preferred presentation format (oral or poster) for each submission.",
  },
  {
    question: "Will the symposium be recorded or streamed?",
    answer:
      "Plans for virtual participation or recording are under consideration. Please check back for updates or join our mailing list for announcements.",
  },
  {
    question: "Is there a Code of Conduct?",
    answer:
      'Yes. All participants are expected to adhere to our Code of Conduct, which promotes a respectful, inclusive, and harassment-free environment. Please review it on the "Code of Conduct" page.',
  },
  {
    question: "How do I request accessibility accommodations?",
    answer:
      "Please indicate any accessibility needs during registration or contact the organizing committee directly. We are committed to making the symposium accessible to all participants.",
  },
]

const outcomes2026: Outcome[] = [
  {
    title: "Cross-Disciplinary Dialogue",
    description:
      "Foster collaboration between clinicians, informaticians, data scientists, public health leaders, and community advocates to advance responsible AI for STIs.",
  },
  {
    title: "Early-Career Exposure",
    description:
      "Provide trainees and early-career professionals with exposure to cutting-edge AI/informatics methods and mentorship opportunities.",
  },
  {
    title: "White Paper & Recommendations",
    description:
      "Produce a post-symposium white paper summarizing key findings, recommendations, and next steps for the field.",
  },
  {
    title: "Evaluation & Future Planning",
    description:
      "Conduct a post-event survey to evaluate the symposium and guide programming for future RAIIDIUS editions.",
  },
]

const committee2026: CommitteeMember[] = [
  {
    name: "Dr. Jason Reyes Nieva",
    title: "Symposium Chair",
    affiliation: "Columbia University Irving Medical Center",
  },
  {
    name: "Committee Member 2",
    title: "Program Co-Chair",
    affiliation: "Columbia Department of Biomedical Informatics",
  },
  {
    name: "Committee Member 3",
    title: "Trainee Coordinator",
    affiliation: "Columbia Vagelos College of Physicians and Surgeons",
  },
  {
    name: "Committee Member 4",
    title: "Communications Lead",
    affiliation: "CUIMC Division of Infectious Diseases",
  },
]

const workshops2026: Workshop[] = [
  {
    id: "w1",
    title: "Diagnostics & Imaging",
    level: "Intermediate",
    objectives: [
      "Understand AI applications in STI diagnostics",
      "Explore image recognition techniques for lesion classification",
      "Discuss point-of-care testing innovations",
    ],
    prerequisites: [
      "Basic understanding of machine learning concepts",
      "Interest in clinical diagnostics",
    ],
    instructors: ["speaker-1"],
    capacityNote: "Limited to 40 participants",
    description:
      "This breakout session explores how AI is transforming STI diagnostics, from image-based screening to rapid point-of-care testing innovations.",
  },
  {
    id: "w2",
    title: "Surveillance & Predictive Modeling",
    level: "Intermediate",
    objectives: [
      "Learn about AI-powered surveillance systems",
      "Explore predictive models for STI outbreak detection",
      "Discuss data integration challenges",
    ],
    prerequisites: [
      "Familiarity with epidemiological concepts",
      "Interest in data science or public health informatics",
    ],
    instructors: ["speaker-2"],
    capacityNote: "Limited to 40 participants",
    description:
      "Dive into AI-driven approaches for STI surveillance, including real-time monitoring systems and predictive analytics for outbreak response.",
  },
  {
    id: "w3",
    title: "Ethics, Bias & Equity in AI for STIs",
    level: "All Levels",
    objectives: [
      "Examine ethical considerations in AI for sexual health",
      "Identify sources of algorithmic bias",
      "Discuss frameworks for equitable AI deployment",
    ],
    prerequisites: ["No prerequisites; open to all participants"],
    instructors: ["speaker-4"],
    capacityNote: "Limited to 40 participants",
    description:
      "A critical examination of ethical challenges, algorithmic bias, and health equity in the deployment of AI tools for STI prevention and care.",
  },
]

const edition2026: Edition = {
  year: 2026,
  themeTitle: "Sexually Transmitted Infections (STIs)",
  themeShortTitle: "STIs",
  themeDescription:
    "RAIIDIUS 2026 focuses on responsible AI and informatics for the prevention and control of sexually transmitted infections. This edition brings together clinicians, data scientists, public health professionals, and community advocates to explore how AI can responsibly support STI diagnostics, surveillance, predictive modeling, and patient engagement\u2014while addressing critical issues of ethics, bias, equity, and real-world implementation.",
  date: "June 9, 2026",
  dateISO: "2026-06-09",
  timezone: "America/New_York",
  venue: "Vagelos Education Center, Columbia University Irving Medical Center",
  room: "VEC 401",
  address: "104 Haven Ave",
  city: "New York",
  state: "NY",
  hostCampus:
    "Columbia University Irving Medical Center (CUIMC) and Columbia Vagelos College of Physicians and Surgeons (VP&S)",
  partners: partners2026,
  sponsorName: "American Sexually Transmitted Diseases Association (ASTDA)",
  sponsorDescription:
    "RAIIDIUS 2026 is made possible with the generous support of the American Sexually Transmitted Diseases Association (ASTDA).",
  registrationUrl: "#register",
  submissionUrl: "#submit",
  contactEmail: "raiidius@cumc.columbia.edu",
  agenda: agenda2026,
  speakers: speakers2026,
  importantDates: importantDates2026,
  faqs: faqs2026,
  themes: themes2026,
  whatToExpect: whatToExpect2026,
  outcomes: outcomes2026,
  committee: committee2026,
  workshops: workshops2026,
  isActive: true,
  isComingSoon: false,
}

// ─── 2027 Placeholder Edition ───

const edition2027: Edition = {
  year: 2027,
  themeTitle: "To Be Determined",
  themeShortTitle: "TBD",
  themeDescription:
    "The theme for RAIIDIUS 2027 is forthcoming. Future editions may focus on areas such as respiratory viruses, antimicrobial resistance, emerging pathogens, or other infectious disease domains. Join our mailing list to be notified when details are announced.",
  date: "TBD",
  dateISO: "",
  timezone: "America/New_York",
  venue: "TBD",
  room: "TBD",
  address: "TBD",
  city: "TBD",
  state: "",
  hostCampus: "TBD",
  partners: [],
  sponsorName: "",
  registrationUrl: "",
  submissionUrl: "",
  contactEmail: "raiidius@cumc.columbia.edu",
  agenda: [],
  speakers: [],
  importantDates: [],
  faqs: [],
  themes: [],
  whatToExpect: [],
  outcomes: [],
  committee: [],
  workshops: [],
  isActive: false,
  isComingSoon: true,
}

// ─── Assemble config ───

siteConfig.editions = [edition2026, edition2027]

// ─── Helper functions ───

export function getEdition(year: number): Edition | undefined {
  return siteConfig.editions.find((e) => e.year === year)
}

export function getActiveEdition(): Edition {
  return (
    siteConfig.editions.find((e) => e.isActive) || siteConfig.editions[0]
  )
}

export function getSpeakerById(
  edition: Edition,
  id: string,
): Speaker | undefined {
  return edition.speakers.find((s) => s.id === id)
}

export function getSessionFormats(edition: Edition): string[] {
  const formats = new Set(edition.agenda.map((s) => s.format))
  return Array.from(formats)
}

export function generateICSContent(edition: Edition): string {
  if (!edition.dateISO) return ""
  const dtStart = edition.dateISO.replace(/-/g, "")
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//RAIIDIUS//EN",
    "BEGIN:VEVENT",
    `DTSTART:${dtStart}T120000Z`,
    `DTEND:${dtStart}T222000Z`,
    `SUMMARY:RAIIDIUS ${edition.year} - ${edition.themeTitle}`,
    `LOCATION:${edition.venue}\\, ${edition.room}\\, ${edition.address}\\, ${edition.city} ${edition.state}`,
    `DESCRIPTION:${siteConfig.seriesDescription}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n")
}
