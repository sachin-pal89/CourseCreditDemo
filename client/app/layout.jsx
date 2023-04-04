import './globals.css'

export const metadata = {
  title: 'Course Credit',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="navbar bg-base-300 h-[7vh] shadow-xl">
          <label
            className="btn btn-square btn-ghost lg:hidden"
            htmlFor="my-drawer-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-ghost normal-case text-xl"
          >
            daisyUI
          </label>
        </div>
        <div className="drawer drawer-mobile h-[91vh] shadow-xl">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content pt-7">{children}</div>
          <div className="drawer-side ">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
              <li className="hover-bordered">
                <a>Hover me</a>
              </li>
              <li className="hover-bordered">
                <a>Hover me</a>
              </li>
              <li className="hover-bordered">
                <a>Hover me</a>
              </li>
            </ul>
          </div>
        </div>
      </body>
    </html>
  )
}
