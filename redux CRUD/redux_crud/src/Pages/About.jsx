import React from 'react'

function About() {
  return (
    <div>
        <main>
            <div className="row align-items-md-stretch mx-5 mt-5">
                {/* <div className="col-md-6">
                    <div className="h-100 p-5 text-white bg-dark rounded-3">
                    <h2>About Us</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae facere, animi repudiandae cum voluptatibus nihil
                        provident velit repellat corrupti accusantium, eligendi esse,
                        iure nulla consequatur? Quia officiis ea repellendus officia.
                    </p>
                    <button className="btn btn-outline-light" type="button">More</button>
                    </div>
                </div> */}
                <div className="col-md-8 offset-2">
                    <div className="h-100 p-5 bg-light border rounded-3">
                    <h2>About Us</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos earum sequi, nulla id inventore at eos, aperiam
                        asperiores nobis saepe quaerat assumenda culpa consectetur
                        debitis. Repellendus, facilis ducimus.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae facere, animi repudiandae cum voluptatibus nihil
                        provident velit repellat corrupti accusantium, eligendi esse,
                        iure nulla consequatur? Quia officiis ea repellendus officia.
                    </p>
                    <button className="btn btn-dark px-3 py-2" type="button">More</button>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default About