
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { useForm } from "react-hook-form";
import useToken from '../../hooks/useToken';

const Login = () => {

    const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const { register, formState: { errors }, handleSubmit, getValues } = useForm();
    const [
        signInWithEmailAndPassword,
        userEp,
        loadingEp,
        errorEp,
    ] = useSignInWithEmailAndPassword(auth);


    const [token] = useToken(userEp || userG)
    const navigate = useNavigate();
    let location = useLocation();
    let getError;
    let from = location.state?.from?.pathname || "/";


    if (loadingEp || loadingG || sending) {

        return <Loading></Loading>
    }


    if (errorEp || errorG) {

        getError = <small className='text-red-600'>Error: {errorEp?.message || errorG?.message}</small>
    }

    if (token) {

        navigate(from, { replace: true });
    }

    const onSubmit = data => {

        signInWithEmailAndPassword(data.email, data.password)

    };

    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className="card w-96 bg-base-100 shadow border-2">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Login</h2>

                        <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100">
                            <div className="card-body">

                                {/* React hook form code start */}

                                <form onSubmit={handleSubmit(onSubmit)}>

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

                                            <button onClick={async () => {

                                                const email = getValues("email");
                                                await sendPasswordResetEmail(email);
                                                alert('Sent email');

                                            }} className="label-text-alt link link-hover text-secondary">Forgot password?</button>

                                        </label>
                                    </div>

                                    <input type="Submit" value='Login' className="btn w-full max-w-xs text-white" />
                                </form>

                                {/* React hook form code end */}

                                <p className='label-text-alt'>New to doctors portal? <Link to="/signup" className="label-text-alt link link-hover text-secondary">Create new account</Link>
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

export default Login;