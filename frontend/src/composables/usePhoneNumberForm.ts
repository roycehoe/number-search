import { ref } from "vue";

export const countryCallingCode = ref("");
export const phoneNumberInput = ref("");
const MOCK_DATA = {
  _id: "6413b4a4b372f80c7fe2916c",
  phone: "6591348138",
  valid: true,
  format: {
    international: "+6591348138",
    local: "9134 8138",
  },
  country: {
    code: "SG",
    name: "Singapore",
    prefix: "+65",
  },
  location: "Singapore",
  type: "mobile",
  carrier: "SingTel",
  createdAt: 1679013028962,
};

export const isLoading = ref(false);
export const mockData = ref(MOCK_DATA);
