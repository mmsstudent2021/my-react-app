import React from 'react';
import mygf from "../images/my-gf.jpeg";

function About(props) {
    return (
        <section className="container">
            <div className="row min-vh-100">

                <div className="col-lg-6">
                    <div className="">
                        <h1>This is About</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consectetur consequatur distinctio ea, eius esse expedita id illum itaque iusto mollitia nemo obcaecati officia possimus quasi quia tempora vel voluptas.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img src={mygf} className="w-100" alt=""/>
                </div>
            </div>
        </section>

    );
}

export default About;