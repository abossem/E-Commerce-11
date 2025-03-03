import { useFormik } from "formik";
import { IoMdArrowDropright } from "react-icons/io";
import { useUserContext } from "../../context/User.context";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { object, string } from "yup";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
  let navigate = useNavigate();
  const { setToken } = useUserContext();
  const [accountError, setAccountError] = useState(null);

  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  let schema = object({
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
        url: "https://e-commerce-11-api.vercel.app/api/api/login",
        method: "POST",
        data: values,
      };
      let { data } = await axios.request(options);
      if (data.status == "success") {
        setToken(data.data.token);
        console.log(data.data.user);

        toast.success("You have logged in successfully!");

        setTimeout(() => {
          navigate("/");
        }, 2000);
        localStorage.setItem("token", data.data.token);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      setAccountError(error.response.data.message);
    }
  }

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit,
  });

  return (
    <div className="flex justify-center flex-col items-center min-h-screen w-full  mt-6">
      <div>
        <div className="bg-white p-8 rounded border border-gray-100 max-w-[500px]">
          <div className="flex justify-center mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              alt="Amazon Logo"
              className="h-6"
            />
            <span className="text-sm text-gray-500">.in</span>
          </div>

          <h3 className="font-semibold mb-4 text-3xl">Sign in</h3>

          <form onSubmit={formik.handleSubmit}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border-1 rounded p-2 mb-4 "
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-400 mt-1 text-sm">
                *{formik.errors.email}
              </p>
            )}
            {accountError && (
              <p className="text-red-400 mt-1 text-sm">*{accountError}</p>
            )}
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border-1 rounded p-2 mb-4 "
            />
            {formik.errors.password && formik.touched.password && (
              <p className="text-red-400 mt-1 text-sm">
                *{formik.errors.password}
              </p>
            )}

            <button
              type="submit"
              className="w-full cursor-pointer bg-yellow-500 text-white py-2 rounded"
            >
              Log in
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-2">
            By continuing, you agree to Amazon&apos;s{" "}
            <a href="#" className="text-blue">
              Conditions of Use
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue">
              Privacy Notice
            </a>
            .
          </p>

          <div className="mt-4 text-sm flex  items-center gap-1">
            <IoMdArrowDropright />
            <a className="text-blue">Need help?</a>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <h4 className="font-semibold text-xl">Buying for work?</h4>
            <a className="text-blue">Shop on Amazon Business</a>
          </div>
        </div>
        <div>
          <div className="relative flex items-center justify-center mt-6">
            <div className="absolute left-0 w-1/3 h-[1px] bg-gray-100 bottom-1/2 translate-y-1/2"></div>
            <span className="bg-white px-2 text-sm text-gray-500">
              New to Amazon?
            </span>
            <div className="absolute right-0 w-1/3 h-[1px] bg-gray-100 bottom-1/2 translate-y-1/2"></div>
          </div>

          <a className="w-full block text-center p-4 transition-all  mt-2 cursor-pointer border border-gray-400 py-2 rounded hover:bg-gray-200">
            Create your Amazon account
          </a>
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
