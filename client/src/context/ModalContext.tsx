import { ReactNode, createContext, useState } from "react";
import CoasterModel from "../models/Coaster.model";

interface ModalContextType {
    newCoaster: CoasterModel,
    changeCoaster: (coaster: CoasterModel) => void,
    toggleUpdate: (state: boolean) => void,
    updateModal: boolean,
    toggleDelete: () => void,
    deleteModal: boolean
};

export const ModalContext = createContext<ModalContextType>(
    {
        newCoaster: {
            _id: "",
            title: "",
            description: "",
            inversions: 0,
            length: 0,
            imageUrl: ""
        },
        changeCoaster: (coaster: CoasterModel) => { },
        toggleUpdate: (state: boolean) => { },
        updateModal: false,
        toggleDelete: () => { },
        deleteModal: false
    }
);

export const ModalProvider = ({ children }: { children: ReactNode }) => {

    const [newCoaster, setCoaster] = useState<CoasterModel>({
        _id: "",
        title: "",
        description: "",
        inversions: 0,
        length: 0,
        imageUrl: ""
    });    
    const changeCoaster = (coaster: CoasterModel) => {
        setCoaster(coaster);
    }

    const [updateModal, setUpdateModal] = useState(false);
    const toggleUpdate = (state: boolean) => {
        setUpdateModal(state);
    };

    const [deleteModal, setDeleteModal] = useState(false);
    const toggleDelete = () => {
        setDeleteModal(!deleteModal);
    };

    return (
        <ModalContext.Provider
            value={{ newCoaster, changeCoaster, toggleUpdate, updateModal, toggleDelete, deleteModal }}>
            {children}
        </ModalContext.Provider>
    )
};