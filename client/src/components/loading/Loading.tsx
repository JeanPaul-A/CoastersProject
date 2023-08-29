const Loading = ({ message }: { message: string }) => {
    return (
        <div>
            <h1>Loading...</h1>
            <p>{message}</p>
        </div>
    )
};

export default Loading;