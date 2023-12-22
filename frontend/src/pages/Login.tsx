import { Link } from "react-router-dom";
import loginImage from "./../assets/login.svg";

const Login = () => {
  return (
    <div>
<p className="mx-auto px-[5vw] pt-10 mb-4 text-center text-lg font-semibold max-w-2xl">Login to share surplus food easily and connect with those in need for convenient pickups—make a difference effortlessly.</p>
      <div className="px-[5vw] pb-10 flex max-md:flex-col-reverse gap-10 items-center justify-around max-md:justify-center  mx-auto max-w-screen-2xl">
        <div>
          <h2 className="text-3xl font-semibold">Login</h2>
            <form>
             <div className="bg-gray-100 text-center p-2 rounded-md my-5">
    <a href=""><i className="fa-brands text-gray-600 fa-xl fa-google mr-2"></i>Login Using Google</a>
            </div>
            <hr/>
              <p className="text-sm mt-5">User Name</p>
              <input
                className="bg-gray-100 p-2 rounded-md mt-2"
                placeholder="ExampleUsername"
                type="number"
                name="number"
                value=""
              ></input>
              <p className="text-sm">Passward</p>
              <input
                className="bg-gray-100 p-2 rounded-md mt-2"
                type="password"
                placeholder="*********"
                name=""
                value=""
              ></input>
              <div>
                <button
                  className="py-2 mb-5 px-4 mt-5 rounded-md w-full text-center bg-blue-500 text-white"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          <p>Don't have Account. <Link className="text-blue-500" to="signup">SignUp</Link></p>
        </div>
        <img className="w-1/3 py-5 " src={loginImage} alt="" />
      </div>
    </div>
  );
};

export default Login;
