import React from 'react'
import { Redirect } from 'react-router-dom';
import { useStoreState } from 'easy-peasy';
export default function Protected({ Cmp }) {
    const LoggedIn = useStoreState(state => state.LoggedInState.LoggedIn);
    return (
        <div>
            {LoggedIn ? <Cmp /> : <Redirect to="/login" />}
        </div>
    )
}
