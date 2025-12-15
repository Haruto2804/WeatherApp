export function SearchBar () {
  return (
    <div className = "relative w-full">
      <input type="text" placeholder="Search Weather's Country"
      className ="p-4 w-full text-blue-500  border-blue-400 rounded-lg 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
              transition duration-200 ease-in-out placeholder-blue-300
               bg-slate-900 hidden
               sm:block font-bold
               "
      />
    </div>
  )
}