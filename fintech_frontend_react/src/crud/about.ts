import axios from 'axios';
import { ABOUT_API_URL } from '../utils/constants';

interface AddAboutPayload {
  rthId: string;
  addedBy: string;
  addedText: string;
}

interface UpdateAboutPayload {
  addedBy: string;
  addedText: string;
}

//POST FOR CREATE ABOUT...
export const addAboutAPI = async (payload: AddAboutPayload) => {
  try {
    const response = await axios.post(`${ABOUT_API_URL}/addAbout`, payload);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to add the about.');
  }
};

//GET ALL ABOUTS...
export const getAllAboutsAPI = async () => {
  try {
    const response = await axios.get(`${ABOUT_API_URL}/getAllAbouts`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to get all abouts.');
  }
};

//GET ABOUT BY ID...
export const getAboutByIdAPI = async (aboutId: string) => {
  try {
    const response = await axios.get(`${ABOUT_API_URL}/getAboutById/${aboutId}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to get about by ID.');
  }
};

//PUT FOR UPDATE ABOUT...
export const updateAboutAPI = async (aboutId: string, payload: UpdateAboutPayload) => {
  try {
    const response = await axios.put(`${ABOUT_API_URL}/updateAbout/${aboutId}`, payload);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to update the about.');
  }
};

//DELETE FOR DELETE ABOUT...
export const deleteAboutAPI = async (aboutId: string) => {
  try {
    const response = await axios.delete(`${ABOUT_API_URL}/deleteAbout/${aboutId}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to delete the about.');
  }
};
