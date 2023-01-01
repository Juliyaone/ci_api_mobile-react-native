import Complexes from "./Complexes";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        header: state.complexes.header,
        items: state.complexes.items,
    }
}


const ComplexesContainer = connect(mapStateToProps, {})(Complexes)

export default ComplexesContainer;