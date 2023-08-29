import { IconClose } from "../../components/icons/IconClose";
import { ModalContext } from "../../context/ModalContext";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import "./UpdateCoaster.css";
import CoasterModel from "../../models/Coaster.model";

const UpdateCoaster = ({ toggleIconClose, }: { toggleIconClose: (modalName: string) => void }) => {

    const { newCoaster, changeCoaster, toggleUpdate } = useContext(ModalContext);

    const [updateCoaster, setUpdateCoaster] = useState<CoasterModel>({
        _id: "",
        title: "",
        description: "",
        inversions: 0,
        length: 0,
        imageUrl: ""
    });

    const handleOnChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setUpdateCoaster((prevCoaster) => ({
            ...prevCoaster,
            [name]: value
        }));
    };

    useEffect(() => {
        setUpdateCoaster(newCoaster);
    }, [newCoaster])

    const onclickUpdateCoaster = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        fetch(`http://localhost:5000/api/coaster/${updateCoaster._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateCoaster)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok - Status: ${response.status} ${response.statusText}`);
                }
                toggleUpdate(false);
                changeCoaster(updateCoaster);
                return response.json();
            })
    }


    return (
        <div id="UpdateCoaster">
            <div className="update__container">
                <h1>Update Coaster</h1>
                <IconClose toggleIconClose={() => toggleIconClose("UpdateCoaster")} />
                <form className="update__form">
                    <label htmlFor="title"><h4>Title:</h4></label>
                    <input type="text" id="title" name="title" defaultValue={updateCoaster.title} onChange={handleOnChange} />

                    <label htmlFor="description"><h4>Description:</h4></label>
                    <textarea id="description" name="description" defaultValue={updateCoaster.description} rows={5} />

                    <label htmlFor="length"><h4>Length:</h4></label>
                    <input type="text" id="length" name="length" defaultValue={updateCoaster.length} />

                    <label htmlFor="inversions"><h4>Inversions:</h4></label>
                    <input type="text" id="inversions" name="inversions" defaultValue={updateCoaster.inversions} />

                    <label htmlFor="imageUrl"><h4>Image Url:</h4></label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue={updateCoaster.imageUrl} />

                    <button onClick={onclickUpdateCoaster}>Actualizar</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoaster;