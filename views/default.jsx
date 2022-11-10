const React = require('react')

function Def (html) {}

module.export = Def

function Def (html) {
    return (
        <html>
            <head>
                <title> Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}