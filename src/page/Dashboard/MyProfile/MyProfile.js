import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div>
            <div class="card w-96 bg-black shadow-xl mt-8">
                <div class="avatar mx-auto my-8">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} />
                    </div>
                </div>
                <div class="card-body">
                    <h2 class=" text-3xl text-center text-white">My Profile</h2>
                    <h1 className='text-center text-white'>{user?.displayName}</h1>
                    <h1 className='text-center text-white'>{user?.email}</h1>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;