import { IoMdArrowDropright } from "react-icons/io";


export default function LoginPage() {
  return (
    <div className="flex justify-center flex-col items-center min-h-screen container mt-6">
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

          <form>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input type="text" className="w-full border-1 rounded p-2 mb-4 " />
            <label className="block text-sm font-medium text-gray-700 mb-1">
             Password
            </label>
            <input type="text" className="w-full border-1 rounded p-2 mb-4 " />
          </form>

          <button className="w-full cursor-pointer bg-yellow-500 text-white py-2 rounded">
            Continue
          </button>

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
            <a  className="text-blue">
              Need help?
            </a>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <h4 className="font-semibold text-xl">Buying for work?</h4>
            <a  className="text-blue">
              Shop on Amazon Business
            </a>
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

          <a
           
            className="w-full block text-center p-4 transition-all  mt-2 cursor-pointer border border-gray-400 py-2 rounded hover:bg-gray-200">
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
