import { BusinessTypes } from "../../common/models/BusinessType";
import { Merchant, Personnel } from "../../common/models/Merchant";
import { generateUUID } from "../helperFunctions";
export const samplePersonnel: Personnel = {
  id: generateUUID(),
  firstName: "Charles",
  lastName: "Dickens",
  nin: "123456789",
  bvn: "876543322",
  phoneNumber: "8033554772",
};
export const samplePersonnel1: Personnel = {
  id: generateUUID(),
  firstName: "Charles",
  lastName: "Dickens",
  nin: "123456789",
  bvn: "876543322",
  phoneNumber: "8033554772",
};
export const samplePersonnel2: Personnel = {
  id: generateUUID(),
  firstName: "Genesis",
  lastName: "Favourse",
  nin: "123456789",
  bvn: "876543322",
  phoneNumber: "8033554772",
};

export const sampleDirectors: Personnel[] = [
  samplePersonnel,
  samplePersonnel1,
  samplePersonnel2,
];
export const sampleMerchant: Merchant = {
  id: generateUUID(),
  businessName: "Business",
  businessEmail: "",
  businessPhone: "",
  businessType: BusinessTypes[0],
  cacNumber: "",
  businessAddress: "",
  businessNature: "",
  directors: sampleDirectors,
};
