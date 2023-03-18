import { ref } from "vue";

const countryCallingCode = ref("");
const phoneNumberInput = ref("");
const isShowPhoneNumberInput = ref(false);
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

const mockData = ref(MOCK_DATA);
const isFormLoading = ref(false);

export function usePhoneNumberForm() {
  function toggleFormLoadingState() {
    isFormLoading.value = !isFormLoading.value;
  }

  function changeCountryCallingCode(newCountryCallingCode: string) {
    countryCallingCode.value = newCountryCallingCode;
  }

  function submitPhoneNumberForm() {
    console.log("Mock Form submitted");
  }

  function resetPhoneNumberForm() {
    countryCallingCode.value = "";
    phoneNumberInput.value = "";
  }

  function toggleShowPhoneNumberInput() {
    isFormLoading.value = !isFormLoading.value;
  }

  return {
    toggleFormLoadingState,
    changeCountryCallingCode,
    submitPhoneNumberForm,
    resetPhoneNumberForm,
    toggleShowPhoneNumberInput,
    isFormLoading,
    isShowPhoneNumberInput,
    countryCallingCode,
    phoneNumberInput,
    mockData,
  };
}
