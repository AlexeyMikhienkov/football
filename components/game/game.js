import Field from "../field/field";
import React from "react";

export default function Game({className}) {
    return (
        <div className={className ?? ""}>
            <div className={"game__header"} />
            <Field className={`game__field`}/>
        </div>
        )
}