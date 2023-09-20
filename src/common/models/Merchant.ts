export interface Merchant {
  id: string;
  businessName: string;
  businessEmail: string;
  businessPhone: string;
  businessType: string;
  cacNumber: string;
  businessAddress: string;
  businessNature: string;
  taxesAndFinancial?: TaxesAndFinancial;
  personnel?: Personnel;
  headCount?: string;
  directors?: Personnel[];
}

interface TaxesAndFinancial {
  dateRegistered: Date;
  tin: string;
  lastTaxYear?: Date;
  lastTaxAmount?: string;
  annualGrossRevenue?: string;
  annualNetRevenue?: string;
  hasDebt?: boolean;
  debtAmount?: string;
  courtCaseDescription?: string;
}

export interface Personnel {
  firstName: string;
  lastName: string;
  nin: string;
  bvn: string;
  phoneNumber?: string;
  dob?: string;
}
