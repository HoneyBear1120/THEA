import React from 'react';
import {useState,useEffect} from 'react';
import moment from 'moment';
import Moment from 'react-moment';
const Lastmodified=(props)=> {

    return (
        <div className="row">
        <div className="col-sm-5 col-lg-5 col-xl-4 mb_spac_7r sm_spac_7r">
          <label className="text-black font-weight-600 label_lr_12 mb-0 md_pd_top_0">
            last modified
          </label>
        </div>
        <div className="col-lg-7 col-sm-7 col-xl-8 mb_spac_7r sm_spac_7r">
          <p className="label_sm mb-0 md_pd_top_0">
             <Moment format="MMMM DD YYYY hh:mm a">
              {props.lastModified}
            </Moment>
          </p>
        </div>
        <div className="col-sm-5 col-lg-5 col-xl-4 mb_spac_7r sm_spac_7r">
          <label className="text-black font-weight-600 label_lr_12 label_sm mb-0 md_pd_top_0">
            created
          </label>
        </div>
        <div className="col-lg-7 col-sm-7 col-xl-8">
          <p className="label_sm mb-0 md_pd_top_0">
          <Moment format="MMMM DD YYYY hh:mm a">
             {props.created}
            </Moment>
          </p>
        </div>
      </div>
    )
}


export default Lastmodified;