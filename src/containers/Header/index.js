import { connect } from 'react-redux'
import { toggleSidebar } from "../../store/actions";
import Header from '../../components/Header';

const mapStateToProps = state => {
    return {
        sidebarShown: state.sidebarShown,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleSidebar: () => dispatch(toggleSidebar()),
    };
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header);

export default HeaderContainer;