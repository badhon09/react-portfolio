import React from 'react'

export const Footer = () => {
  return (
    <footer className="py-7 w-full">
    <div className="container mx-auto">
        <div className="grid grid-cols-1 only-md:grid-cols-2 lg:grid-cols-2">
        <div>
            <p className="flex items-center flex-wrap sm:justify-center dark:text-white">
            Developed with{" "}
            <span className="px-[3px]">
                <svg
                className="text-paragraph dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="text-paragraph"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
            </span>{" "}
            by{" "}
            <span className=" px-[3px]">
                <a className="text-accent1 hover:font-bold" href="#">
                Benos
                </a>
            </span>
            © 2023
            </p>
        </div>
        <div className="flex items-center justify-end gap-8 sm:justify-center sm:mt-[15px]">
            <a
            href="#"
            className="text-parapgrap dark:text-slate-200 hover:text-accent1 dark:hover:text-accent1 font-medium text-[18px] sm:text-[16px]"
            >
            Terms &amp; Condition
            </a>
            <a
            href="#"
            className="text-parapgrap dark:text-slate-200 hover:text-accent1 dark:hover:text-accent1 font-medium text-[18px] sm:text-[16px]"
            >
            {" "}
            Privacy Policy
            </a>
        </div>
        </div>
    </div>
    </footer>
  )
}
