import React from 'react'

const Contact = () => {
  return (
    <footer id="contact" className=" w-full pb-32 pt-24 px-16">
      <div className=''>
        <h1 className=' text-2xl tracking-wider text-slate-800 font-semibold text-center'>Subscribe to our newsletter</h1>
        <p className=' text-slate-400 text-center py-4'>Get special offers, exclusive product news, and event info straight to your inbox.</p>
        <form className=' text-center'>
        <input type="email" placeholder='Email Address' className=' w-2/3 lg:w-1/4 border-2 px-3 py-2 ring-gray-400 rounded-s' />
          <button className=' border-2 py-2 px-4 ring-gray-400 bg-slate-600 text-white select-none focus:bg-slate-500 rounded-e'>Send</button>

        </form>
      </div>
    </footer>
  )
}

export default Contact