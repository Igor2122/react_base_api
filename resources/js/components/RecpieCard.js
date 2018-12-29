import React from 'react';


const recepie = (props) => {
    return (
      <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">{props.name}</div>

                            <div className="card-body">
                                {props.ingredients}
                            </div>
                        </div>
                    </div>
                </div>  
    );
}

export default recepie;