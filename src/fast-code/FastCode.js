import { HtmlField } from './components/fields/HtmlField';
import { CssField } from './components/fields/CssField';
import { JavaScriptField } from './components/fields/JavaScriptField';
import { Result } from './components/Result';
import { useForm } from './hooks/useForm';

import './styles/components/fields.css';
import './styles/fastCode.css';
import Split from 'react-split';

export const FastCode = () => {

    const { htmlCode, cssCode, javascriptCode, handleInputChange } = useForm({
        htmlCode: "",
        cssCode: "",
        javascriptCode: "",
    });

    return (
        <>
            <h1> Fast Code </h1>
            <hr />
            <div className="container">
                <Split className="vertical-split" sizes={[ 50, 50 ]} direction="vertical">
                    <Split className="horizontal-split" sizes={[ 50, 50 ]}>
                        <HtmlField htmlCode={ htmlCode } handleInputChange={ handleInputChange }/>
                        <CssField cssCode={ cssCode } handleInputChange={ handleInputChange }/>
                    </Split>

                    <Split className="horizontal-split" sizes={[ 50, 50 ]}>
                        <JavaScriptField javascriptCode={ javascriptCode } handleInputChange={ handleInputChange }/>
                        <Result 
                            htmlCode={ htmlCode }
                            cssCode={ cssCode }
                            javascriptCode={ javascriptCode }
                        />
                    </Split>
                </Split>
            </div>
        </>
    )
}
