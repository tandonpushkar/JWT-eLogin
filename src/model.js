import { action, persist, thunk } from 'easy-peasy';
import axios from 'axios';

export default persist({
    LoggedInState: {
        LoggedIn: false,
        UserProfile: [],
        //Thunks
        fetchUser: thunk(async actions => {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/posts`, { headers: { "x-auth-token": localStorage.getItem('token') } })
            const profiledata = res.data;
            actions.setProfile(profiledata);
        }),

        //actions
        setProfile: action((state, profiledata) => {
            state.UserProfile = profiledata
        }),

        ToggleLoggedIn: action((state) => {
            state.LoggedIn = state.LoggedIn ? false : true
        })
    }
},
    {
        whitelist: ["LoggedInState"],
        storage: 'localStorage',
    }

)