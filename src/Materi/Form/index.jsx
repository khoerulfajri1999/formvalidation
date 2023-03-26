import React from "react";
import FormElement from "./Pembahasan/FormElement";
import Validation from "./Pembahasan/Validation";

export default class RegisLogin extends React.Component{
    render () {
        return (
            <div>
                <h1>REGISTRASI</h1>
                <FormElement />
                <h1>VALIDASI</h1>
                <Validation />
            </div>
        )
    }
}