
export const CssField = ({ cssCode, handleInputChange }) => {
    return (
            <textarea
                className="field"
                name="cssCode"
                placeholder="CSS"
                value={ cssCode }
                onChange={ handleInputChange }
            ></textarea>
    )
}
