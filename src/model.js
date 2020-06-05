import { action, persist, thunk } from 'easy-peasy';
import axios from 'axios';

export default persist({
    LoggedInState: {
        LoggedIn: false,
        UserProfile: [],


        //Thunks
        fetchUser: thunk(async actions => {
            const res = await axios.get("http://127.0.0.1:5000/api/users/posts", { headers: { "x-auth-token": localStorage.getItem('token') } })
            const profiledata = res.data;
            actions.setProfile(profiledata);
        }),



        // define actions

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