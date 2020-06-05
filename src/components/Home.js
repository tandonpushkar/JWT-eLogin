import React, { useEffect } from 'react'
import { useStoreActions } from 'easy-peasy';


export default function Home() {
    const fetchProfile = useStoreActions(actions => actions.LoggedInState.fetchUser);
    useEffect(() => {
        fetchProfile();
    }, [fetchProfile])
    return (
        <React.Fragment>
            <div class="h-100 m-5 d-flex justify-content-between flex-shrink-1">
                <div class="card border-primary mb-3" style={{ maxWidth: "20rem" }}>
                    <div class="card-header">Header</div>
                    <div class="card-body">
                        <h4 class="card-title">Primary card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card border-secondary mb-3" style={{ maxWidth: "20rem" }}>
                    <div class="card-header">Header</div>
                    <div class="card-body">
                        <h4 class="card-title">Secondary card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card border-success mb-3" style={{ maxWidth: "20rem" }}>
                    <div class="card-header">Header</div>
                    <div class="card-body">
                        <h4 class="card-title">Success card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

            </div>
            <div class="h-100 m-5 d-flex justify-content-between flex-shrink-1">
                <div class="card border-primary mb-3" style={{ maxWidth: "20rem" }}>
                    <div class="card-header">Header</div>
                    <div class="card-body">
                        <h4 class="card-title">Primary card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card border-secondary mb-3" style={{ maxWidth: "20rem" }}>
                    <div class="card-header">Header</div>
                    <div class="card-body">
                        <h4 class="card-title">Secondary card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card border-success mb-3" style={{ maxWidth: "20rem" }}>
                    <div class="card-header">Header</div>
                    <div class="card-body">
                        <h4 class="card-title">Success card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </React.Fragment>


    )
}
