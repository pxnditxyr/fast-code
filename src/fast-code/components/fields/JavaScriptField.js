

export const JavaScriptField = ({ javascriptCode, handleInputChange }) => {
    return (
            <textarea
                id="js"
                className="field"
                name="javascriptCode"
                placeholder="JavaScript"
                value={ javascriptCode }
                onChange={ handleInputChange }
            ></textarea>
    )
}
