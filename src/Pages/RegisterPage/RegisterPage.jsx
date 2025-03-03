import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { useUserContext } from "../../context/User.context";
import toast, { Toaster } from "react-hot-toast";

export default function RegisterPage() {
  let navigate = useNavigate()
  const {setToken} = useUserContext();
  const [ accountError, setAccountError ] = useState( null );
  const [ loading, setLoding ] = useState( false );
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  let schema = object({
    name: string()
      .required("Name is required")
      .min(3, "Must be atleast 3 character")
      .max(20, "Must be less than 20 character"),
    email: string().required("Email is required").email("Invalid Email"),
    password: string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),
  });

  async function onSubmit(values) {
   try {
    const options = {
      url:'https://e-commerce-11-api.vercel.app/api/api/register',
      method:'POST',
      data: values
     }
     setLoding( true );
     let {data} = await axios.request(options)
    if (data.status == 'success') {
      setToken( data.data.token )
      toast.success( 'you have registered successfully' );
      console.log(data.data.user);
      setTimeout( () =>
      {
        navigate('/')
        setLoding( false );
      }, 0);
      localStorage.setItem('token',data.data.token)
      console.log(data);
    }
     
   } catch (error) {
     console.log( error );
     toast.error('somthing went wronge')
    setAccountError(error.response.data.message);

    
   }
  }

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit,
  });
  return (
    <div className="flex justify-center flex-col items-center min-h-screen w-full mt-6">
      <Toaster />
      <div className="w-full max-w-md bg-white p-6 rounded-md border border-gray-100">
        <div className="flex justify-center mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon Logo"
            className="h-6"
          />
          <span className="text-sm text-gray-500">.in</span>
        </div>

        <h2 className="text-xl font-semibold mb-4">Create Account</h2>

        <form onSubmit={formik.handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your name
              </label>
              <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {formik.errors.name && formik.touched.name && (
                <p className="text-red-400 mt-1 text-sm">
                  *{formik.errors.name}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Enter Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {formik.errors.email && formik.touched.email && (
                <p className="text-red-400 mt-1 text-sm">
                  *{formik.errors.email}
                </p>
              )}
              {accountError && (
                <p className="text-red-400 mt-1 text-sm">*{accountError}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {formik.errors.password && formik.touched.password && (
                <p className="text-red-400 mt-1 text-sm">
                  *{formik.errors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-400 text-black py-2 rounded-md font-medium"
            >
              Sign up
            </button>
          </div>
        </form>

        <div className="mt-4 text-sm">
          <p className="font-medium text-xl">Buying for work?</p>
          <a className="text-blue">Create a free business account</a>
        </div>

        <div className="mt-4 text-sm">
          <p className="flex items-center gap-1">
            <span className="text-[19px]"> Already have an account? </span>
            <Link to={"/login"} className={`text-blue flex items-center gap-1 `}>
              Sign in
              <IoMdArrowDropright />
            </Link>
          </p>
          <p className="text-2xs mt-2 ">
            By creating an account or logging in, you agree to Amazon&apos;s{" "}
            <a href="#" className="text-blue">
              Conditions of Use
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue">
              Privacy Notice
            </a>
            .
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center border-t pt-3 border-gray-100 items-center mt-8">
        <span className="text-sm text-gray-500 py-3">
          &copy; 1996-2024, Amazon.com, Inc. or its affiliates
        </span>
      </div>
    </div>
  );
}
