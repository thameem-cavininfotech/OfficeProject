import axios from 'axios';
import { HOME_API_URL } from '../utils/constants';

interface AddHomePayload {
  rthId: string;
  addedBy: string;
  addedText: string;
}

interface UpdateHomePayload {
  addedBy: string;
  addedText: string;
}

//POST FOR CREATE HOME...
export const addHomeAPI = async (payload: AddHomePayload) => {
  try {
    const response = await axios.post(`${HOME_API_URL}/addHome`, payload);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to add the home.');
  }
};

//GET ALL HOMES...
export const getAllHomesAPI = async () => {
  try {
    const response = await axios.get(`${HOME_API_URL}/getAllHomes`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to get all homes.');
  }
};

//GET HOME BY ID...
export const getHomeByIdAPI = async (homeId: string) => {
  try {
    const response = await axios.get(`${HOME_API_URL}/getHomeById/${homeId}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to get home by ID.');
  }
};

//PUT FOR UPDATE HOME...
export const updateHomeAPI = async (homeId: string, payload: UpdateHomePayload) => {
  try {
    const response = await axios.put(`${HOME_API_URL}/updateHome/${homeId}`, payload);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to update the home.');
  }
};

//DELETE FOR DELETE HOME...
export const deleteHomeAPI = async (homeId: string) => {
  try {
    const response = await axios.delete(`${HOME_API_URL}/deleteHome/${homeId}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to delete the home.');
  }
};
