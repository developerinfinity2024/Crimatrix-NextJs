import { createAsyncThunk } from '@reduxjs/toolkit';
import {Service} from "../../../config/commonFetch"
import API from '@/app/config/config';

interface LoginCredentials {
    username: string;
    password: string;
  }
export const loginUser = createAsyncThunk(
    'user/loginuser',
    async (data: LoginCredentials, thunkAPI) => {
        try {
            const response = await API.post(`v1/auth/singin/`,data);
            return response.data;
        } catch (error:any) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
interface getGuestListParams{
    fromDate: string;
    toDate: string;
    hotelId: string;
}
export const getGuestList = createAsyncThunk(
    'guest/getgetlist',
    async (data: getGuestListParams, thunkAPI) => {
        try {
            const response = await Service.commonFetch('v1/police-report/search-guestlist?hotelId=64303cd5806a34105fe3a7e3&fromDate=2024-01-01T12:03:36.969Z&toDate=2024-02-01T12:03:36.969Z', null);
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
        
    }
)