import subImage from "./../assets/subscribe.svg";

const Subscribe = () => {
  return (
    <div>
      <div className="px-[5vw] max-w-screen-2xl mx-auto py-8">
        <h2 className="text-3xl font-semibold">Subscribe</h2>
        <p className="my-5 max-w-[600px]">
          No Internet? No Smartphone? Don't worry! Just subscribe for the latest
          posts within your location through SMS.
        </p>
        <div className="flex gap-10 justify-center items-center">
          <img className="w-1/4" src={subImage} alt=""></img>
          <div>
            <form>
              <p className="text-sm">Phone Number</p>
              <input
                className="bg-gray-100 p-2 rounded-md mt-1"
                placeholder="+91 999997777"
                type="number"
                name="number"
                value=""
              ></input>
              <p className="text-sm mt-3">Location</p>
              <input
                className="bg-gray-100 p-2 rounded-md mt-1"
                type="text"
                placeholder="Delhi, India"
                name="lication"
                value=""
              ></input>
              <div>
                <button
                  className="py-2 px-4 mt-5 rounded-full bg-orange-500 text-white"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
