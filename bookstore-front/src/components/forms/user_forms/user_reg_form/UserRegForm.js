import React, { Fragment, Component } from "react";
//custom
import { InputText } from "primereact/components/inputtext/InputText";
import { Button } from "primereact/components/button/Button";

const UserRegForm = props => {
    return (
        <div
            className="content-section implementation"
            style={{
                margin: "20px",
                width: "auto",
                float: "left"
            }}
        >
            {topHook(props.rol)}
            <h3> Vardas </h3>
            <span className="ui-float-label">
                <InputText
                    name="vardas"
                    id="float-input"
                    type="text"
                    size="30"
                    // onChange={this.handleChange}
                />
                <label htmlFor="float-input"> Vardas </label>
            </span>
            <h3> Pavardė </h3>
            <span className="ui-float-label">
                <InputText
                    name="vardas"
                    id="float-input"
                    type="text"
                    size="30"
                    // onChange={this.handleChange}
                />
                <label htmlFor="float-input"> Pavardė </label>
            </span>

            <h3> Elektroninio pašto adresas </h3>
            <span className="ui-float-label">
                <InputText
                    name="vardas"
                    id="float-input"
                    type="text"
                    size="30"
                    // onChange={this.handleChange}
                />
                <label htmlFor="float-input">
                    {" "}
                    elektroninio.pašto@adresas{" "}
                </label>
            </span>

            <h3> Slaptažodis </h3>
            <span className="ui-float-label">
                <InputText
                    name="vardas"
                    id="float-input"
                    type="text"
                    size="30"
                    // onChange={this.handleChange}
                />
                <label htmlFor="float-input"> slaptažodis </label>
            </span>
            <h3> Slaptažodžio patvirtinimas </h3>
            <span className="ui-float-label">
                <InputText
                    name="vardas"
                    id="float-input"
                    type="text"
                    size="30"
                    // onChange={this.handleChange}
                />
                <label htmlFor="float-input">
                    {" "}
                    slaptažodžio patvirtinimas{" "}
                </label>
            </span>
            {botomHook(props.rol)}
        </div>
    );
};
const topHook = role => {
    switch (role) {
        case 1:
            return <h2>Administratoriaus registracija</h2>;
        case 2:
            return <h2>Pardavejo registracija</h2>;
        case 3:
            return <h2>Vartotojo registracija</h2>;
        default:
            break;
    }
};
const botomHook = role => {
    switch (role) {
        //<==Admin==>
        case 1:
            return (
                <Fragment>
                    <div
                        className="content-section implementation"
                        style={{
                            margin: "20px",
                            width: "auto",
                            float: "left"
                        }}
                    >
                        <h3> Telefono numeris </h3>
                        <span className="ui-float-label">
                            <InputText
                                name="vardas"
                                id="float-input"
                                type="text"
                                size="30"
                                // onChange={this.handleChange}
                            />
                            <label htmlFor="float-input">
                                {" "}
                                telefono numeris{" "}
                            </label>
                        </span>
                        <Button
                            label="Patvirtinti"
                            className="ui-button-danger"
                            // onClick={this.handleSubmit}
                        />
                    </div>
                </Fragment>
            );

        //<==Salesman==>
        case 2:
            return (
                <Fragment>
                     <div
                        className="content-section implementation"
                        style={{
                            margin: "20px",
                            width: "auto",
                            float: "left"
                        }}
                    >
                    <h3> Telefono numeris </h3>
                    <span className="ui-float-label">
                        <InputText
                            name="vardas"
                            id="float-input"
                            type="text"
                            size="30"
                            // onChange={this.handleChange}
                        />
                        <label htmlFor="float-input"> telefono numeris </label>
                    </span>
                    <Button
                            label="Patvirtinti"
                            className="ui-button-danger"
                            // onClick={this.handleSubmit}
                        />
                    </div>
                </Fragment>
            );
        // <==Customer==>
        case 3:
            return (
                <Fragment>
                    <div
                        className="content-section implementation"
                        style={{
                            margin: "20px",
                            width: "auto",
                            float: "left"
                        }}
                    >
                        <h3> Gimimo data </h3>
                        <span className="ui-float-label">
                            <InputText
                                name="vardas"
                                id="float-input"
                                type="text"
                                size="30"
                                // onChange={this.handleChange}
                            />
                            <label htmlFor="float-input"> gimimo data </label>
                        </span>
                        <h3> Adresas </h3>
                        <span className="ui-float-label">
                            <InputText
                                name="vardas"
                                id="float-input"
                                type="text"
                                size="30"
                                // onChange={this.handleChange}
                            />
                            <label htmlFor="float-input"> adresas </label>
                        </span>
                        <h3> Telefono numeris </h3>
                        <span className="ui-float-label">
                            <InputText
                                name="vardas"
                                id="float-input"
                                type="text"
                                size="30"
                                // onChange={this.handleChange}
                            />
                            <label htmlFor="float-input">
                                {" "}
                                telefono numeris{" "}
                            </label>
                        </span>

                        <Button
                            label="Patvirtinti"
                            className="ui-button-danger"
                            // onClick={this.handleSubmit}
                        />
                    </div>
                </Fragment>
            );
        default:
            break;
    }
};

export default UserRegForm;
