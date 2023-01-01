import React, {FC} from 'react'

import "./app.sass"
import Product from "../product/Product"

const App: FC = () => {

    console.log("render AppComponent")

    return (
        <div className={"App"}>
            <Product/>
        </div>
    )
}

export default App
