import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
        <div>
            <div className  = "container">
            <h1>About Us</h1>
            <div className ="accordion my-1" id="accordionExample">
                <div className ="accordion-item">
                    <h2 className ="accordion-header">
                        <button className ="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Author
                        </button>
                    </h2>
                    <div id="collapseOne" className ="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className ="accordion-body">
                            <strong>This is Saurav Kumar Singh</strong> This is my second application as a showcase in the journey of learning react framework. It's a great application to learn in the backend developmet.
                        </div>
                    </div>
                </div>
                <div className ="accordion-item">
                    <h2 className ="accordion-header">
                        <button className ="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            About the Journey till now
                        </button>
                    </h2>
                    <div id="collapseTwo" className ="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className ="accordion-body">
                            This has been exciting till now with every new day bringing a new experience. Learning slowly while grasping the methods and concepts to gain maximum advantage of the tools provided by React.
                        </div>
                    </div>
                </div>   
            </div>
            </div>
        </div>
        )
    }
}

export default About

