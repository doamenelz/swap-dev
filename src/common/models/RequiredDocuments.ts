import { generateUUID } from "../../utilities/helperFunctions";

enum REQUIRED_DOCS {
  cac,
  taxReceipt,
  driversLicense,
  utilityBill,
}

interface FileContent {
  type: string;
  filename: string;
  docType: REQUIRED_DOCS;
  id: string;
}

export const RequiredDocuments: FileContent[] = [
  {
    type: "CAC Certificate",
    filename: "",
    docType: REQUIRED_DOCS.cac,
    id: generateUUID(),
  },
  {
    type: "Tax Receipt",
    filename: "",
    docType: REQUIRED_DOCS.taxReceipt,
    id: generateUUID(),
  },
  {
    type: "Driver's License",
    filename: "",
    docType: REQUIRED_DOCS.driversLicense,
    id: generateUUID(),
  },
  {
    type: "Utility Bill",
    filename: "",
    docType: REQUIRED_DOCS.utilityBill,
    id: generateUUID(),
  },
];
