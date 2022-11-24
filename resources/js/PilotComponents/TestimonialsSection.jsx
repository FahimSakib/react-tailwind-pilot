import React from 'react'

const TestimonialsSection = () => {
  return (
    <>
      <section id="testimonials">
        <div className="mx-w-6xl px-5 mx-auto mt-32 text-center">
          <h2 className="text-4xl font-bold text-center">
            What's Different About Manage?
          </h2>
          <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
            <div className="flex flex-col space-y-6 items-center p-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src="img/avatar-anisha.png" alt="avatar-anisha" className="w-16 -mt-14" />
              <h5 className="text-lg font-bold">Anisha Li</h5>
              <p className="text-sm text-darkGrayishBlue">
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
            <div className="hidden md:flex flex-col space-y-6 items-center p-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src="img/avatar-ali.png" alt="avatar-ali" className="w-16 -mt-14" />
              <h5 className="text-lg font-bold">Ali Bravo</h5>
              <p className="text-sm text-darkGrayishBlue">
                “We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.”
              </p>
            </div>
            <div className="hidden md:flex flex-col space-y-6 items-center p-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src="img/avatar-richard.png" alt="avatar-richard" className="w-16 -mt-14" />
              <h5 className="text-lg font-bold">Richard Watts</h5>
              <p className="text-sm text-darkGrayishBlue">
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TestimonialsSection