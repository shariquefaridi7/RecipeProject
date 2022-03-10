import React from "react";

const Recepe = (props) => {
    const { fet } = props;
    return (
        <>

<br/>
            <div className="row ">
                {

                    fet.map((respe) => {
                        return (
                            <div className="col-md-3">
                                <div className="card-columns">
                                <div className="card border-dark mb-3">
                                  
                                    <img src={respe.recipe.image} className="img-fluid" />
                                    <div className="card-body">
                                        <h3>{respe.recipe.label}</h3>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        {
                                            respe.recipe.ingredientLines.map((lines) => {
                                                return (
                                                    <li className="list-group-item">{lines}</li>
                                                )
                                            })
                                        }

                                    </ul>
                                </div>
                            </div>
                            </div>
                        );
                    })
                }



            </div>


        </>
    );
}
export default Recepe;