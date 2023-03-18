import axios, { AxiosError } from "axios";
import { Err, Ok, Result } from "ts-results";
import { ref } from "vue";

interface Format {
  international: string;
  local: string;
}

interface Country {
  code: string;
  name: string;
  prefix: string;
}

export interface PhoneValidationResponse {
  phone: string;
  valid: boolean;
  format: Format;
  country: Country;
  location: string;
  type: string;
  carrier: string;
}

const countryCallingCode = ref("");
const phoneNumberInput = ref("");
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

const BASE_URL = "http://localhost:3000/";

const phoneNumberData = ref({} as PhoneValidationResponse);
const isFormLoading = ref(false);

async function getPhoneNumberData(
  queryParams: string
): Promise<Result<PhoneValidationResponse, AxiosError>> {
  try {
    const response = await axios.get(`${BASE_URL}?q=${queryParams}`);
    console.log(response);
    return Ok(response.data as PhoneValidationResponse);
  } catch (error) {
    return Err(error as AxiosError);
  }
}

export function usePhoneNumberForm() {
  function resetPhoneNumberForm() {
    countryCallingCode.value = "";
    phoneNumberInput.value = "";
    phoneNumberData.value = {} as PhoneValidationResponse;
  }

  async function submitPhoneNumberForm() {
    isFormLoading.value = true;

    const queryParams = `${countryCallingCode.value}${phoneNumberInput.value}`;
    const { ok: isSuccessful, val: response } = await getPhoneNumberData(
      queryParams
    );
    if (isSuccessful) {
      phoneNumberData.value = response;
    }
    isFormLoading.value = false;
  }

  return {
    submitPhoneNumberForm,
    resetPhoneNumberForm,
    isFormLoading,
    countryCallingCode,
    phoneNumberInput,
    phoneNumberData,
  };
}
