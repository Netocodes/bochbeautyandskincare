

const NewsLetter = () => {
  return (
    <div>
    
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-16 mx-auto">
  <div className="grid md:grid-cols-2 gap-8">
    <div className="max-w-md">
      <h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">Subscribe</h2>
      <p className="mt-3 text-gray-600 dark:text-neutral-400">
        Subscribe and get Update on new Products/ Routine care
      </p>
    </div>

    <form>
      <div className="w-full sm:max-w-lg md:ms-auto">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <div className="w-full">
            <label htmlFor="hero-input" className="sr-only">Search</label>
            <input type="text" id="hero-input" name="hero-input" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter your email" />
          </div>
          <a className="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#8c2643] text-white  focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
            Subscribe
          </a>
        </div>
        <p className="mt-3 text-sm text-gray-500 dark:text-neutral-500">
          No spam, unsubscribe at any time
        </p>
      </div>
    </form>
  </div>
</div>

    </div>
  )
}

export default NewsLetter
