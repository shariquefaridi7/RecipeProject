import React from "react";
import "./Heading.css";

const Heading = (props) => {
    const val=props.val;
    const Click=props.Click;
    const Change=props.Change;
    

    return (
        <>
            <div className="container-fluid">
                <div className="row bg-dark">
                    <div className="col-md-1">
                        <span   className="design" > <i class="fas fa-utensils" ></i></span>
                        </div>
                        <div className="col-md-6">
                        <h1  className="text-light">Food Recipe</h1>
                       
                    </div>
                    <div className="col-md-4">
                        <div className="input-group mb-3 ">
                            <input type="text" className="form-control" placeholder="Search Your Recepe..." aria-label="First name" value={val} onChange={Change} />
                            <button  onClick={Click} className="btn btn-outline-primary btn-primary text-dark" type="button" id="button-addon2">Search</button>
                          
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Heading;