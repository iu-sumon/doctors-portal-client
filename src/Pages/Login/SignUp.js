import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';

const SignUp = () => {

    const [createUserWithEmailAndPassword, userEp, loadingEp, errorEp] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, error] = useUpdateProfile(auth);

    //for JWT
    const [token] = useToken(userEp || userG) //token user parameter hisabe jasche

    const navigate = useNavigate();

    let getError;

    if (loadingEp || loadingG || updating) {
        return <Loading></Loading>
    }

    if (errorEp || errorG || error) {

        getError = <small className='text-red-600'>Error: {errorEp?.message || errorG?.message || error?.message}</small>
    }

    if (token) { //token pele navigate korbo
      
         navigate('/appointment')

    }


    const onSubmit = async (data) => {

        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })

    };


    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className="card w-96 bg-base-100 shadow border-2">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Sign Up</h2>

                        <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100">
                            <div className="card-body">

                                {/* React hook form code start */}

                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="form-control">

                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>

                                        <input
                                            {...register("name", {
                                                required: {
                                                    value: true,
                                                    message: 'Name is Required'
                                                },

                                            })}
                                            type="name"
                                            placeholder="Enter your name"
                                            className="input input-bordered" />

                                        <label className="label">
                                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-700">{errors.name?.message}</span>}

                                        </label>

                                    </div>
                                    <div className="form-control">

                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>

                                        <input
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: 'Email is Required'
                                                },
                                                pattern: {
                                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                    message: 'Provide a valid email' // JS only: <p>error message</p> TS only support string
                                                }
                                            })}
                                            type="email"
                                            placeholder="Enter your email"
                                            className="input input-bordered" />

                                        <label className="label">
                                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email?.message}</span>}
                                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.email?.message}</span>}
                                        </label>

                                    </div>

                                    <div className="form-control">

                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>

                                        <input
                                            {...register("password", {
                                                required: {
                                                    value: true,
                                                    message: 'Password is Required'
                                                },
                                                minLength: {
                                                    value: 6,
                                                    message: 'Password must be 6 character or longer' // JS only: <p>error message</p> TS only support string
                                                }
                                            })}
                                            type="password"
                                            placeholder="Enter your password"
                                            className="input input-bordered" />


                                        <label className="label">

                                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-700">{errors.password?.message}</span>}
                                            {errors.password?.type === ' minLength' && <span className="label-text-alt text-red-700">{errors.password?.message}</span>}



                                        </label>
                                    </div>

                                    <input type="Submit" value='Sign Up' className="btn w-full max-w-xs text-white" />
                                </form>

                                {/* React hook form code end */}

                                <p className='label-text-alt'>Already have an account? <Link to="/login" className="label-text-alt link link-hover text-secondary">Please login</Link>
                                </p>
                                {getError}


                                <div className="divider">OR</div>

                                <button onClick={() => signInWithGoogle()} className="btn btn-outline">CONTINUE WITH GOOGLE</button>

                            </div>
                        </div>







                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;