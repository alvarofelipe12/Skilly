export interface Bios {
  person: Person
  stats: Stats
  strengths: Strength[]
  interests: any[]
  experiences: Experience[]
  awards: any[]
  jobs: Job[]
  projects: any[]
  publications: any[]
  education: Education[]
  opportunities: Opportunity[]
  languages: Language[]
}

export interface Person {
  professionalHeadline: string
  completion: number
  showPhone: boolean
  created: string
  verified: boolean
  flags: Flags
  weight: number
  ggId: string
  completionStage: CompletionStage
  locale: string
  subjectId: number
  picture: string
  hasEmail: boolean
  isTest: boolean
  name: string
  links: Link[]
  location: Location
  theme: string
  id: string
  pictureThumbnail: string
  claimant: boolean
  summaryOfBio: string
  weightGraph: string
  publicId: string
}

export interface Flags {
  accessCohort: boolean
  benefits: boolean
  canary: boolean
  enlauSource: boolean
  fake: boolean
  featureDiscovery: boolean
  firstSignalSent: boolean
  signalsOnboardingCompleted: boolean
  importingLinkedin: boolean
  onBoarded: boolean
  remoter: boolean
  signalsFeatureDiscovery: boolean
  importingLinkedinRecommendations: boolean
  contactsImported: boolean
  appContactsImported: boolean
  genomeCompletionAcknowledged: boolean
  cvImported: boolean
  communityCreatedPrivate: boolean
  communityCreatedClaimed: boolean
  connectBenefitsViewed: boolean
  recommendationLeadEmailSent: boolean
  recommendationsAskedGenomeCompletion: boolean
  behavioralTraitsAcknowledged: boolean
  testTaken: boolean
  previewFeatureDiscovery: boolean
  boosted: boolean
}

export interface CompletionStage {
  stage: number
  progress: number
}

export interface Link {
  id: string
  name: string
  address: string
}

export interface Location {
  name: string
  shortName: string
  country: string
  latitude: number
  longitude: number
  timezone: string
  placeId: string
}

export interface Stats {
  jobs: number
  education: number
  strengths: number
}

export interface Strength {
  id: string
  code: number
  name: string
  proficiency: string
  weight: number
  recommendations: number
  media: any[]
  supra: boolean
  created: string
  hits: number
}

export interface Experience {
  id: string
  category: string
  name: string
  organizations: Organization[]
  responsibilities: string[]
  fromMonth: string
  fromYear: string
  toMonth: string
  toYear: string
  remote?: boolean
  additionalInfo?: string
  highlighted: boolean
  weight: number
  verifications: number
  recommendations: number
  media: any[]
  rank: number
  strengths: any[]
}

export interface Organization {
  id: number
  name: string
  publicId: string
  picture?: string
  serviceType: string
}

export interface Job {
  id: string
  category: string
  name: string
  organizations: Organization[]
  responsibilities: string[]
  fromMonth: string
  fromYear: string
  toMonth: string
  toYear: string
  remote: boolean
  additionalInfo: string
  highlighted: boolean
  weight: number
  verifications: number
  recommendations: number
  media: any[]
  rank: number
  strengths: any[]
}

export interface Education {
  id: string
  category: string
  name: string
  organizations: Organization[]
  responsibilities: any[]
  fromMonth: string
  fromYear: string
  toMonth: string
  toYear: string
  highlighted: boolean
  weight: number
  verifications: number
  recommendations: number
  media: any[]
  rank: number
  strengths: any[]
}

export interface Opportunity {
  id: string
  interest: string
  field: string
  data: any
}

export interface Language {
  code: string
  language: string
  fluency: string
}
