import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="flex justify-center flex-col items-center min-h-screen container">
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

        <form>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mobile number
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-2 rounded-md font-medium">
              Verify mobile number
            </button>
          </div>
        </form>

        <div className="mt-4 text-sm">
          <p className="font-medium text-xl">Buying for work?</p>
          <a className="text-blue">
            Create a free business account
          </a>
        </div>

        <div className="mt-4 text-sm">
          <p className="flex items-center gap-1">
            <span className="text-[19px]"> Already have an account? </span>
            <a className="text-blue flex items-center gap-1">
              Sign in
              <IoMdArrowDropright />
            </a>
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
