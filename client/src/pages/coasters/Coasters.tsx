import { useEffect, useState } from "react";
import CoasterModel from "../../models/Coaster.model";
import { Link } from "react-router-dom";
import Coaster from "../../components/coaster/Coaster";
import "./Coasters.css";
import Loading from "../../components/loading/Loading";

const Coasters = () => {

    const [coasters, setCoasters] = useState<CoasterModel[]>([]);

    const getCoasters = () => {
        fetch("http://localhost:5000/api/coasters")
            .then(res => res.json())
            .then(allCoasters => setCoasters(allCoasters));
    }

    useEffect(() => {
        getCoasters();
    }, [])

    if (coasters.length <= 0) {
        return (
            <div><Loading message="Loading coaster detail" /></div>
        )
    } else {
        return (
            <div className="coasters__page">
                <h1>All Coasters</h1>
                <div className="coasters__container">
                    {coasters.map(eachCoaster => {
                        return (
                            <Link to={`/coaster/${eachCoaster._id}`}>
                                <Coaster coaster={eachCoaster} type="coaster" />
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
};

export default Coasters;