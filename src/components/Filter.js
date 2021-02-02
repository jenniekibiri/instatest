import React, { Component } from 'react'

export class Filter extends Component {
    render() {
        return (
            <div>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="row">
  <form action="" >
                <div className="form-group input-group ">
                        
            		<input type="text" className="form-control" name="search" id="search" placeholder="search"/>
              	 
            	</div>
            </form>
           <i className="fa fa-bars fa-2x pl-2 "></i>
                        </div>
          
        </div>
             <div className="col-md-3  offset-md-3">
         <button type="button" className="btn text-white btn-warning"> <i className="fa fa-plus  pr-1"></i> Start a new chat</button>
        </div>


                </div>

            </div>
        )
    }
}

export default Filter
