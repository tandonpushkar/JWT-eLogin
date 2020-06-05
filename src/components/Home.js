import React, { useEffect } from 'react'
import { useStoreActions } from 'easy-peasy';


export default function Home() {
    const fetchProfile = useStoreActions(actions => actions.LoggedInState.fetchUser);
    useEffect(() => {
        fetchProfile();
    }, [fetchProfile])
    return (
        <React.Fragment>
            <div className="h-100 m-5 d-flex justify-content-between flex-shrink-1">
                <div className="card border-primary mb-3" style={{ maxWidth: "20rem" }}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h4 className="card-title">Primary card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card border-secondary mb-3" style={{ maxWidth: "20rem" }}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h4 className="card-title">Secondary card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card border-success mb-3" style={{ maxWidth: "20rem" }}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h4 className="card-title">Success card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

            </div>
            <div className="h-100 m-5 d-flex justify-content-between flex-shrink-1">
                <div className="card border-primary mb-3" style={{ maxWidth: "20rem" }}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h4 className="card-title">Primary card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card border-secondary mb-3" style={{ maxWidth: "20rem" }}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h4 className="card-title">Secondary card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card border-success mb-3" style={{ maxWidth: "20rem" }}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h4 className="card-title">Success card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </React.Fragment>


    )
}
