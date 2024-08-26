export default function About() {
  return (
    <div className="sm:p-0 py-24 px-20  bg-gray-50">
      <div className="sm:flex sm:flex-col justify-center sm:px-4 sm:py-16 xl:px-8">
        <div className="flex justify-center ">
          <p className="flex justify-center px-5 py-1 w-[105px] h-[28px] bg-gray-200 border-solid rounded-xl text-sm">
            About me
          </p>
        </div>
        <div className="sm:w-full sm:flex-col flex flex-row  gap-12">
          <div className="sm:w-full justify-center items-center  w-6/12 ">
            <img
              className="w-[280px] h-[360px] object-cover m-5"
              src="/profile.png"
            />
          </div>
          <div className="sm:w-full w-6/12">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6 mt-12">
              Curious about me? Here you have it:
            </h1>
            <div className="flex flex-col text-base gap-4 pb-6 text-gray-600">
              <p>
                I'm a designer turned full stack developer, passionate about
                React.js and Node.js. I excel in blending technical and visual
                aspects to craft exceptional digital products, prioritizing user
                experience, precise design, and optimized code.
              </p>
              <p>
                Since starting my web development journey in 2015, I've embraced
                challenges and kept up with the latest tech trends. Now in my
                early thirties, seven years in, I'm building cutting-edge web
                apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase,
                and more.
              </p>
              <p>
                With a progressive mindset, I enjoy the entire product
                development process, from ideation to execution. Off duty,
                you'll find me on Twitter, tracking startup journeys, or
                unwinding. Follow me for tech insights and public project
                updates on Twitter or GitHub.
              </p>
              <p>Finally, some quick bits about me.</p>
              <div className="grid grid-rows-2 grid-flow-col gap-2.5">
                <li>B.E. in Computer Engineering</li>
                <li>Full time freelancer</li>
                <li>Avid learner</li>
              </div>
              <p>
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
