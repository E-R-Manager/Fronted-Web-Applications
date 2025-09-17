import { createStore } from 'vuex'

export default createStore({
    state: {
        user_id: localStorage.getItem('user_id') || null,
        isActive: localStorage.getItem('isActive') || false,
        token: localStorage.getItem('token') || null
    },
    mutations: {
        setUserId(state, value) {
            state.user_id = value;
            localStorage.setItem('user_id', value);
        },
        setIsActive(state, value) {
            state.isActive = value;
            localStorage.setItem('isActive', value);
        },
        setToken(token) {
            localStorage.setItem('token', token);
            this.state.token = token;
        }
    }
})