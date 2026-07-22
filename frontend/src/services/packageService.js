import axios from "axios";


const API_URL = "http://localhost:3000/api";


export const getPackages = async () => {
  const response = await axios.get(`${API_URL}/packages`);
  return response.data;
};


export const createPackage = async (packageData) => {
  const response = await axios.post(`${API_URL}/packages`, packageData);
  return response.data;
};


export const updatePackage = async (id, packageData) => {
  const response = await axios.put(`${API_URL}/packages/${id}`, packageData);
  return response.data;
};


export const deletePackage = async (id) => {
  const response = await axios.delete(`${API_URL}/packages/${id}`);
  return response.data;
};