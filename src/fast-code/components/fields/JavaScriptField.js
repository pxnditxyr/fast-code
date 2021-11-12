

export const JavaScriptField = ({ javascriptCode, handleInputChange }) => {
    return (
            <textarea
                className="field"
                name="javascriptCode"
                placeholder="JavaScript"
                value={ javascriptCode }
                onChange={ handleInputChange }
            ></textarea>
    )
}
