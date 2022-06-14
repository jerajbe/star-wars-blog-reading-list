import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = ({item, ...props}) => {
    const {store, actions} = useContext(Context)
    return (
    <div className="card unic m-2 border-warning border-5" style={{minWidth: "250px"}}>
        <img src={`https://starwars-visualguide.com/assets/img/${props.resource === "people" 
						? "characters"
						: props.resource}/${item.uid}.jpg`} className="card-img-top" alt="..."/>
        <div className="card-body bg-dark pb-2">
            <h5 className="card-title text-white">{item.name}</h5>
            <div className="container-fluid justify-content-between p-0 d-flex">
                <Link type="button" className="btn btn-outline-primary btn-sm" to={`/single/${props.resource}/${item.uid}`}>{"more details"}</Link >
                <button type="button" className={`btn btn-${store.heartButton}warning btn-sm`} onClick={(e)=>{
                    actions.addFavorites({...item, resource: props.resource})
                }}><i className="fa-regular fa-heart"></i></button>
            </div>
        </div>
    </div>
    );
};

Card.propTypes = {
item: PropTypes.object,
resource: PropTypes.string
}