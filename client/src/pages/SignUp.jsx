import { Button, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left */}
        <div className="flex-1">
          <Link to="/" className="text-4xl font-bold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-puple-500 to-pink-500 rounded-md text-white hover:bg-violet-600">
              Nilantha&apos;s
            </span>
            Blog
          </Link>
          <p className="text-sm pt-5">
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>
        {/* Right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput type="text" placeholder="Email" id="email" />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <Button type="submit" gradientDuoTone="purpleToPink">Sign Up</Button>
          </form>
        <div className='flex gap-2 text-sm mt-5'>
          <span>Have an account ? </span>
            <Link to='/sig-in' className='text-blue-500'>Sign In</Link>
        </div>
        </div>
      </div>
    </div>
  );
}
