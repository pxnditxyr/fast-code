
export const getInjectedCode = ( htmlCode, cssCode, javascriptCode ) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title> Result </title>
                <style> ${ cssCode } </style>
            </head>
            <body>
                ${ htmlCode }
                <script>
                    ${ javascriptCode }
                </script>
            </body>
        </html>
    `;
}
