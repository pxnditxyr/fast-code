

export const HtmlField = ({ htmlCode, handleInputChange }) => {

    return (
            <textarea
                id="html"
                className="field"
                name="htmlCode"
                placeholder="HTML"
                value={ htmlCode }
                onChange={ handleInputChange }
            ></textarea>
    )
}
