import React from 'react'

const TestimonialsSection = () => {
  return (
    <>
      <section id="testimonials">
        <div className="mx-w-6xl px-5 mx-auto mt-32 text-center">
          <h2 class="text-4xl font-bold text-center">
            What's Different About Manage?
          </h2>
          <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
            <div className="flex flex-col space-y-6 items-center p-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src="img/avatar-anisha.png" alt="avatar-anisha" className="w-16 -mt-14" />
              <h5 class="text-lg font-bold">Anisha Li</h5>
              <p class="text-sm text-darkGrayishBlue">
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