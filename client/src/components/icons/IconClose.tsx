export const IconClose = ({ toggleIconClose }: { toggleIconClose: (modalName: string) => void }) => {

    return (
        <svg viewBox="0 -960 960 960" className="IconClose"
            onClick={() => toggleIconClose("")}>
            <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
        </svg>
    );
};

