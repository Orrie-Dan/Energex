/** Shared inquiry test fixtures. Not imported by application code. */
import { equipmentCategories } from "../../data/energex/equipment";
import type { EquipmentInquiryFields, ProjectInquiryFields } from "./validate";

export const validProject: ProjectInquiryFields = {
  name: "Ada Lovelace",
  company: "Analytical Engines Ltd",
  email: "ada@example.com",
  phone: "+852 1234 5678",
  location: "Kowloon, Hong Kong",
  description: "Solar and storage for a 2 MW site.\nSecond line is fine.",
};

export const validEquipment: EquipmentInquiryFields = {
  name: "Ada Lovelace",
  company: "Analytical Engines Ltd",
  email: "ada@example.com",
  phone: "",
  category: equipmentCategories[0].slug,
  description: "Two transformers.",
  quantity: "2",
  destination: "Mombasa",
  timeline: "Q3 2027",
};
