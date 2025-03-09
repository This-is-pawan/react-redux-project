


const Login = ()=> {
 const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
};
  return (
    <>
     <div className='flex justify-center items-center min-h-screen bg-gray-100 p-5 my-8'>
      <div className='bg-white p-6 rounded-2xl shadow-lg w-full max-w-md'>
        <h2 className='text-2xl font-semibold text-center mb-4 text-gray-700'>Login</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label htmlFor='user' className='block text-gray-600'>User Name</label>
            <input 
              type='text' 
              name='user' 
              id='user' 
              placeholder='User name' 
              className='w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring focus:ring-blue-400'
              defaultValue='happy' 
            />
          </div>
          <div>
            <label htmlFor='password' className='block text-gray-800'>Password</label>
            <input 
              type='password' 
              name='password' 
              id='password' 
              placeholder='Password' 
              className='w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring focus:ring-blue-400'
              defaultValue='#454fklds' 
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-gray-600'>Email</label>
            <input 
              type='email' 
              name='email' 
              id='email' 
              placeholder='Email' 
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500'
              defaultValue='hs@gmail.com' 
            />
          </div>
          <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition'>
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login