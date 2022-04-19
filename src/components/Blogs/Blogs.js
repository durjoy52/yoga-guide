import React from 'react';

const Blogs = () => {
    return (
        <div className='footer-fixed  container mx-auto '>
            <div>
                <h3 className='text-center'>1. Difference between authorization and authentication</h3>
            <div className="d-flex flex-wrap border rounded gap-2">
                <div>
                    <h4>Authentication</h4>
                    <ol>
                        <li>Authentication verifies who the user is</li>
                        <li>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</li>
                        <li>Authentication is the first step of a good identity and access management process.</li>
                        <li>Authentication is visible to and partially changeable by the user.</li>
                    </ol>
                </div>
                <div>
                    <h4>authorization</h4>
                    <ol>
                        <li>Authorization determines what resources a user can access.</li>
                        <li>Authorization works through settings that are implemented and maintained by the organization.</li>
                        <li>Authorization always takes place after authentication.</li>
                        <li>Authorization isn’t visible to or changeable by the user.</li>
                    </ol>
                </div>
            </div>
            </div>
<div>
    <h3>2. Using purpose of firebase</h3>
    <p>
    Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if we are looking to develop mobile apps such as live streaming, chat messaging, etc., we can use Firebase.
    </p>
</div>
<div>
    <h3>Firebase provide other than authentication</h3>
    <p>
    There are many services which Firebase provides, Most useful of them are: Cloud Firestore,Cloud Functions,Hosting,Cloud Storage,Google Analytics,Predictions,Cloud Messaging and etc.
    </p>
</div>
        </div>
    );
};

export default Blogs;