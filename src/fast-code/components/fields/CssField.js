
export const CssField = ({ cssCode, handleInputChange }) => {
    return (
            <textarea
                id="css"
                className="field"
                name="cssCode"
                placeholder="CSS"
                value={ cssCode }
                onChange={ handleInputChange }
            ></textarea>
    )
}
