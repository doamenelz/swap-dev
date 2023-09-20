import { Merchant, Personnel } from "../../common/models/Merchant";
export const samplePersonnel: Personnel = {
  firstName: "Charles",
  lastName: "Dickens",
  nin: "123456789",
  bvn: "876543322",
  phoneNumber: "8033554772",
};

export const sampleDirectors: Personnel[] = [
  samplePersonnel,
  samplePersonnel,
  samplePersonnel,
];
export const sampleMerchant: Merchant = {
  id: "001",
  businessName: "Business",
  businessEmail: "string",
  businessPhone: "string",
  businessType: "string",
  cacNumber: "string",
  businessAddress: "string",
  businessNature: "",
  directors: sampleDirectors,
};
