import React, {FC} from 'react';
import {Button} from "primereact/button";

import "./app.sass"

const App: FC = () => {

    console.log("render AppComponent")

    return (
        <div className={"App"}>
            <Button label="click-click-click"/>
        </div>
    )
}

export default App;
