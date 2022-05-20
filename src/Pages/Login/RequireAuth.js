import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const RequireAuth = ({ children }) => {
    
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);


     
    let location = useLocation();

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    // if (user.providerData[0]?.providerId === 'password' && '!user.emailVerified') {
    //     return <div class='flex justify-center items-center h-screen'>
    //         <div class="card w-96 bg-base-100 shadow-xl border-2">
    //             <div class="card-body items-center text-center">
                   
    //                 <p class='text-red-600 font-bold'>Your Email is Not Verified</p>
    //                 <div class="card-actions">
    //                     <button
    //                         onClick={async () => {
    //                             await sendEmailVerification();
    //                             alert('Sent email successfully');
    //                         }}
    //                         class='btn btn-secondary text-white'
    //                     >
    //                        Please Verify Your Email
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // }


    return children;
};

export default RequireAuth;