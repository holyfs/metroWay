import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const UserSearch=()=>{
    useEffect(()=>{
        checkResults();
    },[])
    const { store } = useContext(Context);
    const checkResults=()=>{
        if(store.travelInfoStore){
/*             console.log("existe") */
        }else{
/*             console.log("no hay datos de busqueda") */
        }
    }
    return(<>
    <div className="container fluid">
        <div className="justify-content-center">
            <h1>Your Search:</h1>
        </div>
            <div>
                <div className="card text-bg-secondary mb-3 pb-3" style={{width: 20+"rem"}}>
                    <div className="card-header"><strong>From:</strong> {store.travelInfoStore.origin?store.travelInfoStore.origin:"Origin"}</div>
                    <div className="card-body">
                        <p className="card-text"><strong>Depart time:</strong> {store.travelInfoStore.date_time_depart?store.travelInfoStore.date_time_depart:"depart date"}</p>
                        <p className="card-text"><strong>Passengers:</strong> {store.travelInfoStore.number_of_passengers?store.travelInfoStore.number_of_passengers:"number of passangers"}</p>
                    </div>
                </div>
        </div>
    </div>
    </>);
};
export default UserSearch;