import { Outlet } from "react-router-dom";

export default function Layout ()
{
  return <>
    <h1 className="text-center text-white py-10 bg-gray-500 text-4xl">Header</h1>
    <Outlet />
    <h1 className="text-center text-white py-10 bg-gray-500 text-4xl">Footer</h1>
  </>;
}