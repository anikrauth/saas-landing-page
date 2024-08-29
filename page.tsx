/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9TPqxTvOlEI
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-[20px] m-auto w-full lg:max-w-[1297px] h-16 flex items-center ">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-8 w-8" />
          <span className="sr-only">My SaaS</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 sm:gap-10 transition-all duration-500 ease-in-out">
          <Link
            href="#"
            className="text-base font-medium hover:underline underline-offset-4 border-b-2 hover:border-b-2 border-primary-foreground transition-all duration-300 ease-in-out"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-base font-medium hover:underline underline-offset-4 border-b-2 hover:border-b-2 border-primary-foreground transition-all duration-300 ease-in-out"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-base font-medium hover:underline underline-offset-4 border-b-2 hover:border-b-2 border-primary-foreground transition-all duration-300 ease-in-out"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-base font-medium hover:underline underline-offset-4 border-b-2 hover:border-b-2 border-primary-foreground transition-all duration-300 ease-in-out"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <Link
          href="#"
          className="tracking-tight text-base px-[12px] py-[6px] rounded-lg font-medium border-2 border-primary bg-primary text-white hidden lg:flex items-center bg-none has-icon ml-[30px]"
          prefetch={false}
        >
          <span>Get This Template Free</span>
          <ChevronRightIcon className="ml-2 h-5 w-5" />
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF]">
          <div className="container max-w-[1297px] px-4 md:px-0 text-center text-primary-foreground">
            <div className="max-w-3xl mx-auto space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Unlock Your Business Potential with Our SaaS Solution
              </h1>
              <p className="text-base md:text-lg">
                Streamline your operations, boost productivity, and drive growth with our cutting-edge SaaS platform.
              </p>
              <div className="flex justify-center">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-b from-primary to-primary/90 px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <span>Get Started</span>
                  <ChevronRightIcon className="ml-2 h-4 w-4" />
                </Link>
                <Button variant="outline" className="ml-4 text-primary">
                  Request demo
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-[1297px] px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-start text-left space-y-4 bg-[#f0f4f8] rounded-2xl p-6 border border-[#f0f4f8]">
                <RocketIcon className="h-12 w-12 text-white bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] rounded-lg p-3" />
                <h3 className="text-2xl font-bold">Accelerate Growth</h3>
                <p className="text-base text-muted-foreground">
                  Our SaaS platform helps you scale your business with ease, enabling you to reach new heights.
                </p>
              </div>
              <div className="flex flex-col items-start text-left space-y-4 bg-[#f0f4f8] rounded-2xl p-6 border border-[#f0f4f8]">
                <BoltIcon className="h-12 w-12 text-white bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] rounded-lg p-3" />
                <h3 className="text-2xl font-bold">Boost Productivity</h3>
                <p className="text-base text-muted-foreground">
                  Streamline your workflows and automate repetitive tasks, allowing your team to focus on what matters
                  most.
                </p>
              </div>
              <div className="flex flex-col items-start text-left space-y-4 bg-[#f0f4f8] rounded-2xl p-6 border border-[#f0f4f8]">
                <ShieldIcon className="h-12 w-12 text-white bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] rounded-lg p-3" />
                <h3 className="text-2xl font-bold">Secure Your Data</h3>
                <p className="text-base text-muted-foreground">
                  Rest easy with our robust security features, ensuring your data is protected at all times.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container max-w-[1297px] px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Pricing that Fits Your Business</h2>
              <p className="text-base text-muted-foreground">
                Choose the plan that works best for your needs and budget. No hidden fees, no surprises.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Starter</CardTitle>
                    <CardDescription>Perfect for small businesses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-3xl font-bold">$19</span>
                      <span className="text-base text-muted-foreground">/month</span>
                    </div>
                    <ul className="mt-8 space-y-2 text-base text-muted-foreground">
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                        Up to 5 users
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                        5GB storage
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                        Basic reporting
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="#"
                      className="w-full inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Get Started
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="bg-primary">
                  <CardHeader>
                    <CardTitle className="text-primary-foreground">Pro</CardTitle>
                    <CardDescription className="text-primary-foreground">For growing businesses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-3xl font-bold text-primary-foreground">$49</span>
                      <span className="text-base text-primary-foreground">/month</span>
                    </div>
                    <ul className="mt-8 space-y-2 text-base text-primary-foreground">
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-4 w-4 text-primary-foreground" />
                        Up to 25 users
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-4 w-4 text-primary-foreground" />
                        50GB storage
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-4 w-4 text-primary-foreground" />
                        Advanced reporting
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="#"
                      className="inline-flex w-full h-10 items-center justify-center rounded-md bg-white  px-8 text-sm font-medium text-primary shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Get Started
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Enterprise</CardTitle>
                    <CardDescription>For large businesses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-3xl font-bold">$99</span>
                      <span className="text-base text-muted-foreground">/month</span>
                    </div>
                    <ul className="mt-8 space-y-2 text-base text-muted-foreground">
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                        Unlimited users
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                        Unlimited storage
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                        Custom reporting
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="#"
                      className="w-full inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Get Started
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-[1297px] px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight mb-8">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-background rounded-lg p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
                      <div className="font-semibold">@iamwillpursell</div>
                      <div className="text-xs text-muted-foreground">5 months ago</div>
                    </div>
                    <div className="text-muted-foreground">
                      I really love the ecosystem Vercel is creating. The way each component can be added and modified
                      with ease really makes these tools attractive.
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
                      <div className="font-semibold">@janedoe</div>
                      <div className="text-xs text-muted-foreground">2 weeks ago</div>
                    </div>
                    <div className="text-muted-foreground">
                      The Vercel platform has been a game-changer for our business. The ease of deployment and the
                      robust feature set have streamlined our development workflow.
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
                      <div className="font-semibold">@johnsmith</div>
                      <div className="text-xs text-muted-foreground">3 months ago</div>
                    </div>
                    <div className="text-muted-foreground">
                      The customer support team at Vercel has been incredibly responsive and helpful. They've gone above
                      and beyond to ensure our success.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function BoltIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}


function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}
