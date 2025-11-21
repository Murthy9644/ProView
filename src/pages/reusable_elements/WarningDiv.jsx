

export default function WarningDiv({warning_text = "Something went wrong!"}){

    return (
        <div className="warningDiv">
            <p className="text">{warning_text}</p>
        </div>
    )
}