export interface AuditRequestInput {
  propertyName: string;
  email: string;
  city: string;
  propertyType: string;
  totalParkingSlots: number;
  transformerCapacity: string;
}

export interface RoadmapStep {
  phase: string;
  timeline: string;
  description: string;
}

export interface FeasibilityReport {
  feasibilityScore: number;
  recommendedSmartDBCount: number;
  estimatedChargingPoints: number;
  rwaProposalTitle: string;
  primarySummary: string;
  powerAnalysis: {
    peakLoadEstimationKW: number;
    safetyRating: string;
    loadBalancingBenefitsText: string;
    transformerAnalysisText: string;
  };
  financialEstimates: {
    traditionalCapexINR: number;
    ebeeCapexINR: number;
    costSavingsPercent: number;
    paybackPeriodMonths: number;
    annualMaintenanceINR: number;
  };
  complianceCheck: {
    meetsMandateState: string;
    mandateText: string;
    regulatoryIncentivesText: string;
  };
  implementationRoadmap: RoadmapStep[];
}

export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  type?: "text" | "option" | "status" | "receipt";
  options?: string[];
  statusPercent?: number;
  statusKw?: number;
  statusA?: number;
  receiptData?: {
    socket: string;
    duration: string;
    energy: string;
    amount: string;
    txnId: string;
    status: string;
  };
}
