import HashLoader from "react-spinners/ClipLoader";

const Loading = () => {
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };


    return(
        <div style={style}>
                    <HashLoader />

        </div>

    )
}

export default Loading;