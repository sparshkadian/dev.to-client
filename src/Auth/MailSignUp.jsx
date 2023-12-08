import { useState } from 'react';

const MailSignUp = () => {
  const [formData, setFormData] = useState({
    file: '',
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleFileSelect = (e) => {
    setFormData((prevValue) => ({
      ...prevValue,
      file: e.target.files[0],
    }));
  };

  const handleInputChange = (e) => {
    setFormData((prevValue) => ({
      ...prevValue,
      [e.target.id]: e.target.value,
    }));
  };

  const handleFormSubmit = (e) => {};

  return (
    <div className='pt-10 w-screen h-screen bg-white'>
      <div className='max-w-xl m-auto p-3 sm:border rounded-md'>
        <h2 className='text-center text-xl font-semibold'>
          Create your account
        </h2>

        <form
          onSubmit={handleFormSubmit}
          className='m-auto mt-5 w-4/5 flex flex-col gap-3'
        >
          <label htmlFor='image' className='font-semibold'>
            Profile image <span className='text-red-500'>*</span>
          </label>
          <input
            onChange={handleFileSelect}
            type='file'
            accept='image/*'
            name='image'
            id='image'
            className='w-full border p-2 rounded-md hover:shadow focus:outline-none focus:border-blue-600'
          />

          <label htmlFor='name' className='font-semibold'>
            Name <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            name='name'
            id='name'
            value={formData.name}
            onChange={handleInputChange}
            className='w-full border p-2 rounded-md hover:shadow focus:outline-none focus:border-blue-600'
          />

          <label htmlFor='email' className='font-semibold'>
            Email <span className='text-red-500'>*</span>
          </label>
          <input
            type='email'
            name='email'
            id='email'
            value={formData.email}
            onChange={handleInputChange}
            className='w-full border p-2 rounded-md hover:shadow focus:outline-none focus:border-blue-600'
          />

          <label htmlFor='password' className='font-semibold'>
            Password <span className='text-red-500'>*</span>
          </label>
          <input
            type='password'
            name='password'
            id='password'
            value={formData.password}
            onChange={handleInputChange}
            className='w-full border p-2 rounded-md hover:shadow focus:outline-none focus:border-blue-600'
          />

          <label htmlFor='passwordConfirm' className='font-semibold'>
            Password Confirmation <span className='text-red-500'>*</span>
          </label>
          <input
            type='password'
            name='passwordConfirm'
            id='passwordConfirm'
            value={formData.passwordConfirm}
            onChange={handleInputChange}
            className='w-full border p-2 rounded-md hover:shadow focus:outline-none focus:border-blue-600'
          />

          <button
            type='submit'
            className='w-1/4 mt-2 p-3 bg-blue-600 hover:bg-blue-800 text-white rounded-md'
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default MailSignUp;
