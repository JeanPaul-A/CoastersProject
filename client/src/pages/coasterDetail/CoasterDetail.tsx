import { useParams } from "react-router-dom";
import CoasterModel from "../../models/Coaster.model";
import { useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";
import Coaster from "../../components/coaster/Coaster";

const CoasterDetail = () => {
    const { coaster_id } = useParams();

    const [coasterDetail, setCoasterDetail] = useState<CoasterModel>();

    function getCoasterDetail() {
        fetch(`http://localhost:5000/api/coaster/${coaster_id}`)
            .then(response => response.json())
            .then(async coaster => setCoasterDetail(coaster));
    }


    useEffect(() => {
        getCoasterDetail();
    }, [])

    if (!coasterDetail) {
        return (
            <div><Loading message="Loading coaster detail" /></div>
        )
    } else {
        return (
            <Coaster coaster={coasterDetail} type="detail" />
        )
    }
};

export default CoasterDetail;