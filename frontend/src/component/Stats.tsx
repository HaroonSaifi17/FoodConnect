const Stats = () => {
  return (
    <div>
      <div className=" px-[5vw] text-center flex gap-4 max-w-screen-2xl py-10">
        <div className="flex-1 border p-4 rounded-lg">
          <i className="fa-solid fa-users-line fa-2xl"></i>
          <p className="my-2 font-semibold text-2xl">40,000</p>
 <h3>Individual Served Each Week</h3>
        </div>
        <div className="flex-1 border p-4 rounded-lg" >
          <i className="fa-solid fa-utensils fa-2xl"></i>
          <p className="my-2 font-semibold text-2xl">140,000</p>
 <h3>Meal Distributed Annually</h3>
        </div>
      </div>
    </div>
  )
}

export default Stats
