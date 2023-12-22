const Need = () => {
  return (
    <div>
      <div className="mx-auto px-[5vw] max-w-screen-2xl py-5">
        <p className="py-4 font-semibold text-2xl">Food, Based on yout Location</p>
        <div className="bg-orange-50 p-1 inline-block rounded-full">
        <input className="p-2 mr-2 rounded-full bg-orange-100" type="search" name="" placeholder="Search" value=""/>
          <a className="rounded-full p-2 aspect-square inline-block bg-orange-100"><i className="fa-solid fa-magnifying-glass"></i></a>
        </div>
    <div className="h-36"></div>
      </div>
    </div>
  )
}

export default Need
