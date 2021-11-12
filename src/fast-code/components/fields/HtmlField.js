

export const HtmlField = ({ htmlCode, handleInputChange }) => {

    return (
            <textarea
                className="field"
                name="htmlCode"
                placeholder="HTML"
                value={ htmlCode }
                onChange={ handleInputChange }
            ></textarea>
    )
}
