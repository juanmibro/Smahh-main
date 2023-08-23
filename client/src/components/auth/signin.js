import { connect } from 'react-redux'
import useForm from '../../use-form-react'
import { signUserIn } from '../../actions'
import CenterCard363 from '../centerCard363'
import React from 'react'

const Signin = (props) => {
  const options = {
    initialValues: {
      email: '',
      password: '',
    },
    callback: () => {
      console.log('works!', inputs)
      props.signUserIn(inputs)
    },
    debug: false,
  }
  const { onSubmit, onChange, inputs, dirty, submitting } = useForm(
    'AdvanceForm',
    options
  )

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col bg-gray-800 justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  name="email"
                  type="email"
                  value={inputs.email}
                  placeholder="sample@email.com"
                  onChange={onChange}
                  required
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-400 hover:text-indigo-300"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  value={inputs.password}
                  placeholder="your password"
                  onChange={onChange}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={!dirty || submitting}
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-400">
            Not a member?{' '}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default connect(null, { signUserIn })(Signin)
