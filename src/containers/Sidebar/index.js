import { connect } from 'react-redux'
import { toggleSidebar } from "../../store/actions";
import PresentSidebar from '../../components/Sidebar';

const mapStateToProps = state => {
    return {
        open: state.showSidebar
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleDrawer: value => {
            dispatch(toggleSidebar(value))
        }
    };
};

const Sidebar = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PresentSidebar);

export default Sidebar;