import { ChangeEventHandler, useEffect, useState } from "react";

const Need = () => {
  const [cooked, SetCooked] = useState(true);
  const [search, SetSearch] = useState("");
  const setCookedStatus = () => {
    SetCooked(!cooked);
  };
  const setSearchStatus: ChangeEventHandler<HTMLInputElement> = (event) => {
    const searchValue = event.target.value;
    SetSearch(searchValue);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      fetchData();
    }
  };

  const url =
    process.env.NODE_ENV === "development"
      ? import.meta.env.VITE_URL_DEVELOPMENT
      : import.meta.env.VITE_URL_PRODUCTION;
  interface FoodPost {
    img: string;
    date: string;
    name: string;
    cooked: boolean;
    location: string;
    expiredIn: number;
    user: string;
    _id: string;
  }

  interface ApiResponse {
    error: boolean;
    total: number;
    page: number;
    limit: number;
    posts: FoodPost[];
    pageno: number[];
  }

  const [data, setData] = useState<ApiResponse>({
    error: true,
    total: 0,
    page: 0,
    limit: 10,
    posts: [],
    pageno: [],
  });
  const fetchData = async () => {
    try {
      const response = await fetch(
        url + "getFoodPost?search=" + search + "&cooked=" + cooked,
      );
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [cooked]);

  return (
    <div>
      <div className="mx-auto px-[5vw] max-w-screen-2xl py-5">
        <div className="flex gap-5 justify-between items-start py-4">
          <p className=" font-semibold text-2xl">
            Food, Based on your Location
          </p>
          <span
            onClick={() => {
              setCookedStatus();
              fetchData();
            }}
            className="bg-gray-300  border-gray-200 whitespace-nowrap  border-4 rounded-full"
          >
            <a
              className={` rounded-full py-1 px-3 -mr-1 inline-block ${
                cooked ? "bg-blue-500 text-white" : null
              }`}
            >
              Cooked
            </a>
            <a
              className={` rounded-full inline-block py-1 px-2  ${
                cooked ? null : "bg-blue-500 text-white"
              }`}
            >
              Raw
            </a>
          </span>
        </div>

        <div className="bg-orange-50 p-1 inline-block rounded-full">
          <input
            className="p-2 mr-2 rounded-full bg-orange-100"
            type="search"
            placeholder="Search Location"
            value={search}
            onChange={setSearchStatus}
            onKeyDown={handleKeyPress}
          />
          <a className="rounded-full p-3 aspect-square inline-block bg-orange-100">
            <i
              onClick={fetchData}
              className="fa-solid block aspect-square fa-magnifying-glass"
            ></i>
          </a>
        </div>
        <div className="h-36">
          <div>
            <h1>Food Posts</h1>
            {data.posts.map((post) => (
              <div key={post._id}>
                <h2>{post.name}</h2>
                <p>{post.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Need;
