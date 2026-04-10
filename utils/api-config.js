// const API_BASE_URL = "http://localhost:5000/api/v2";
// export const IMAGE_URL = "http://localhost:5000/";

const API_BASE_URL = "https://api.digiestategroup.com/api/v2";
export const IMAGE_URL = "https://api.digiestategroup.com/";

export const API_CONFIG = {
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
};

export const API_MULTIPART_CONFIG = {
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
