import { IFrame } from './IFrame';
import { getInjectedCode } from '../helpers/getInjectedCode';

import '../styles/components/result.css'

export const Result = ({ htmlCode, cssCode, javascriptCode }) => {
    const code = getInjectedCode( htmlCode, cssCode, javascriptCode );
    return (
        <div className="result">
            <IFrame srcDoc={ code }></IFrame>
        </div>
    );
}
