import { useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useUserContext } from "../../context/User.context";

export default function Orders() {
  const { token } = useUserContext();
  const [orders, setOrdes] = useState(null);
  // get user Orders
  async function getUserOrders() {
    try {
      const options = {
        url: `https://e-commerce-11-api.vercel.app/api/api/orders`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      let { data } = await axios.request(options);
      console.log(Object.entries(data.data));

      setOrdes(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUserOrders();
  }, []);
  if (token) {
    return (
      <>
        {orders ? (
          <section>
            {orders.length === 0 ? (
              <div className="container mx-auto bg-gray-100 rounded-md  my-5 shadow p-8 flex flex-col justify-center items-center gap-4 px-4 md:px-0">
                <h2>
                  Oops! Your Orders is empty. Start shopping now by clicking the
                  button below and find something you love!
                </h2>
                <Link
                  to={"/"}
                  className="px-3 py-1 rounded-md text-xl text-primary-white bg-yellow-300 hover:bg-yellow-400"
                >
                  Back To Home
                </Link>
              </div>
            ) : (
              Object.entries(orders).map(([key, value]) => (
                <section
                  key={key}
                  className="container mx-auto my-6 px-4 md:px-0"
                >
                  <div className="order p-4 border-solid border-2 border-gray-400 border-opacity-25 rounded-lg ">
                    <header className="flex justify-between items-center mb-4">
                      <div>
                        <h2>Order ID</h2>
                        <span>#{key}</span>
                      </div>
                      <div>
                        {value.status == "pending" ? (
                          <span className="inline-block px-3 py-1 bg-lime-500 text-white font-semibold font-cairo rounded-full">
                            pending
                          </span>
                        ) : (
                          <span className="inline-block px-3 py-1 bg-blue-500 text-white font-semibold font-cairo rounded-full">
                            Delivered
                          </span>
                        )}
                      </div>
                    </header>
                    <div className="grid md:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                      {/* {order[1].map((product) => (
                        <div
                          key={product.id}
                          className="product-item overflow-hidden border-solid border-2 border-gray-400 border-opacity-30 rounded-lg"
                        >
                          <div className="p-3">
                            <h3 className="text-lg font-semibold text-gray-500 line-clamp-2">
                              <Link to={`/product/${product.id}`}>
                                {product.product.title}
                              </Link>
                            </h3>
                            <div className="flex mt-2 justify-between items-center">
                              <p>
                                <span className="font-bold">Count: </span>
                                {product.count}
                              </p>
                              <span>{product.price} L.E</span>
                            </div>
                          </div>
                        </div>
                      ))} */}
                    </div>
                    <p className="text-lg mt-2">
                      Your Total order price is{" "}
                      <span className="text-yellow-500 font-bold mx-1">
                        {value.total_price}
                      </span>
                      L.E
                    </p>
                  </div>
                </section>
              ))
            )}
          </section>
        ) : (
          <Loading />
        )}
      </>
    );
  } else {
    return <Navigate to={"/login"} />;
  }
}
