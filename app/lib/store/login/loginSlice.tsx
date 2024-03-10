import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '../asyncthunk/asyncthunk';

interface UserState {
    data: [] | null;
    loading: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    error: string | null;
}

const initialState: UserState = {
    data: null,
    loading: 'idle',
    error: null,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = 'fulfilled';
                state.data = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = 'rejected';
                state.error = action.payload as string;
            });
    },
});

export default loginSlice.reducer;