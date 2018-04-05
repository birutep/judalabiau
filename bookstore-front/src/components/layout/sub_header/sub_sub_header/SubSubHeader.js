import React, { Component } from "react";
//custom
import css_subsubheader from "../sub_sub_header/SubSubHeader.css";
//prime
import { Button } from "primereact/components/button/Button";
import { InputText } from "primereact/components/inputtext/InputText";
//unused????
// import Search from '../../Search/Search';
// import { connect } from "react-redux"; // importas norint prijungti bendrą saugyklą prie Component
// import * as enums from "../../../../store/enums";

class SubSubHeader extends Component {
    render() {
        return (
            <div className={css_subsubheader.sub_sub_header}>
                <Button
                    label="Visos knygos"
                    style={{ marginLeft: 4 }}
                    className={css_subsubheader.filter_button}
                    // onClick={this.props.onAllBooks}
                />
                <Button
                    label="Neseniai peržiūrėtos"
                    style={{ marginLeft: 4 }}
                    className={css_subsubheader.filter_button}
                    // onClick={this.props.onMostRecent}
                />
                <Button
                    label="Populiariausios"
                    style={{ marginLeft: 4 }}
                    className={css_subsubheader.filter_button}
                    // onClick={this.props.onMostPopular}
                />
                <Button
                    label="Nemokamos"
                    style={{ marginLeft: 4 }}
                    className={css_subsubheader.filter_button}
                    // onClick={this.props.onFreeBooks}
                />
                <InputText
                    placeholder="paieška..."
                    type="text"
                    // onClick={this.props.onSearched}
                    className={css_subsubheader.search}
                />
                <Button
                    icon="fa-search"
                    iconPos="left"
                    className={css_subsubheader.search_button}
                />
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     // funkcija kuri perkopijuoja state iš bendros saugyklos į vietinį props
//     // (galima prie "fltr: state.filter" pridėt daugiau kintamųjų, jeigu jų būtų reducer.js)
//     return {
//         fltr: state.filter
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         onAllBooks: () => dispatch({ type: enums.ALL_BOOKS }), // dispatch yra funkcija iškviesti reducer.js, kad pakeistų state.
//         // galima po "type: enums.ALL_BOOKS" po kablelio perduot reikšmių, jeigu reikia. Ir reducer.js atitinkamai apdoroti. Pvz išsaugot į masyvą kažką.
//         onMostRecent: () => dispatch({ type: enums.MOST_RECENT }),
//         onMostPopular: () => dispatch({ type: enums.MOST_POPULAR }),
//         onFreeBooks: () => dispatch({ type: enums.FREE_BOOKS }),
//         onSearched: () => dispatch({ type: enums.SEARCHED_BOOKS })
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SubSubHeader); // prijungia funkcijas (mapStateToProps, mapDispatchToProps) prie komponento
export default SubSubHeader;
