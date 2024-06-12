/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/hbnImRR6o2a
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/components/ui/button"

export function pricing() {
  return (
    (<div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Starter</h3>
            <p className="text-gray-500 dark:text-gray-400">Perfect for individuals and small teams.</p>
          </div>
          <div className="space-y-1">
            <span className="text-4xl font-bold">$9</span>
            <span className="text-gray-500 dark:text-gray-400">/month</span>
          </div>
          <ul className="space-y-2 text-gray-500 dark:text-gray-400">
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-gray-900 dark:text-gray-50" />
              Up to 5 users
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-gray-900 dark:text-gray-50" />
              5GB storage
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-gray-900 dark:text-gray-50" />
              Basic analytics
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-gray-900 dark:text-gray-50" />
              Email support
            </li>
          </ul>
          <Button className="w-full">Get Started</Button>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Pro</h3>
            <p className="text-gray-500 dark:text-gray-400">Ideal for growing teams and small businesses.</p>
          </div>
          <div className="space-y-1">
            <span className="text-4xl font-bold">$29</span>
            <span className="text-gray-500 dark:text-gray-400">/month</span>
          </div>
          <ul className="space-y-2 text-gray-500 dark:text-gray-400">
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-gray-900 dark:text-gray-50" />
              Up to 25 users
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-gray-900 dark:text-gray-50" />
              50GB storage
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-gray-900 dark:text-gray-50" />
              Advanced analytics
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-gray-900 dark:text-gray-50" />
              Priority email support
            </li>
          </ul>
          <Button className="w-full">Get Started</Button>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Enterprise</h3>
            <p className="text-gray-500 dark:text-gray-400">Tailored for large teams and growing businesses.</p>
          </div>
          <div className="space-y-1">
            <span className="text-4xl font-bold">$99</span>
            <span className="text-gray-500 dark:text-gray-400">/month</span>
          </div>
          <ul className="space-y-2 text-gray-500 dark:text-gray-400">
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-gray-900 dark:text-gray-50" />
              Unlimited users
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-gray-900 dark:text-gray-50" />
              Unlimited storage
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-gray-900 dark:text-gray-50" />
              Custom analytics and reporting
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-gray-900 dark:text-gray-50" />
              Dedicated account manager
            </li>
          </ul>
          <Button className="w-full">Get Started</Button>
        </div>
      </div>
    </div>)
  );
}

function CheckIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>)
  );
}
