import React from 'react'

function Home() {
  return (
    <div>
        <main>
            <div className="row align-items-md-stretch mx-5 mt-5">
                <div className="col-md-6">
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
                </div>
                <div className="col-md-6">
                    <div className="h-100 p-5 bg-light border rounded-3">
                    <h2>About Us</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos earum sequi, nulla id inventore at eos, aperiam
                        asperiores nobis saepe quaerat assumenda culpa consectetur
                        debitis. Repellendus, facilis ducimus.
                    </p>
                    <button className="btn btn-outline-secondary" type="button">More</button>
                    </div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center mx-5 mt-5">
            <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm border-primary">
                <div className="card-header py-3 text-white bg-primary border-primary">
                    <h4 className="my-0 fw-normal">Enterprise</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                        $29<small className="text-muted fw-light">/mo</small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>30 users included</li>
                        <li>15 GB of storage</li>
                        <li>Phone and email support</li>
                        <li>Help center access</li>
                    </ul>
                    <button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm border-primary">
                <div className="card-header py-3 text-white bg-primary border-primary">
                    <h4 className="my-0 fw-normal">Enterprise</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                        $29<small className="text-muted fw-light">/mo</small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>30 users included</li>
                        <li>15 GB of storage</li>
                        <li>Phone and email support</li>
                        <li>Help center access</li>
                    </ul>
                    <button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm border-primary">
                    <div className="card-header py-3 text-white bg-primary border-primary">
                        <h4 className="my-0 fw-normal">Enterprise</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">
                            $29<small className="text-muted fw-light">/mo</small>
                        </h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>30 users included</li>
                            <li>15 GB of storage</li>
                            <li>Phone and email support</li>
                            <li>Help center access</li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button>
                    </div>
                </div>
            </div>
            </div>
        </main>
    </div>
  )
}

export default Home