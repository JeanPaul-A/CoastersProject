import { useContext, useEffect, useState } from "react";
import CoasterModel from "../../models/Coaster.model";
import "./Coaster.css";
import { ModalContext } from "../../context/ModalContext";

const Coaster = ({ coaster, type }: { coaster: CoasterModel, type: string }) => {

    const { newCoaster, toggleUpdate, changeCoaster } = useContext(ModalContext);

    const handleUpdate = () => {
        toggleUpdate(true);
        changeCoaster(actualCoaster);
    }

    const [actualCoaster, setActualCoaster] = useState<CoasterModel>(coaster);

    useEffect(() => {
        if (newCoaster && newCoaster._id == coaster._id) {
            setActualCoaster(newCoaster);
            changeCoaster(newCoaster);
        }
    }, [newCoaster])



    if (type === "coaster") {
        return (
            <div className="coaster__container" key={actualCoaster._id}>
                <h2>{actualCoaster.title}</h2>
                <img className="coaster__image" src={actualCoaster.imageUrl} alt={actualCoaster.title} />
            </div>
        )
    } else {
        return (
            <div className="coaster__container" key={actualCoaster._id}>
                <h1 className="detail__title">{actualCoaster.title}</h1>
                <p>{actualCoaster.description}</p>
                <div className="detail__contain">
                    <div className="detail__image">
                        <img src={actualCoaster.imageUrl} alt={actualCoaster.title} />
                    </div>
                    <div className="details__info">
                        <h4>Details</h4>
                        <ul>
                            <li>Length: {actualCoaster.length}</li>
                            <li>Inversions: {actualCoaster.inversions}</li>git 

                        </ul>
                        <div className="details__button">
                            <div className="button__update" onClick={handleUpdate}>
                                <h4>Update Coaster</h4>
                            </div>
                            <div className="button__delete">
                                <h4>Delete Coaster</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Coaster;