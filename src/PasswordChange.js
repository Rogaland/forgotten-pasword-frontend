import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PasswordInput from "./PasswordInput";
import PasswordRules from "./PasswordRules";
import logo from "./rogfk_farger.jpg";
import NotifyChangedPassword from "./NotifyChangedPassword";
import ForgottenPasswordAPI from "./ForgottenPasswordAPI";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        display: 'flex',
        justifyContent: 'center'
    },
    logo: {
        margin: theme.spacing.unit,
    }

});


class PasswordChange extends React.Component {

    componentDidMount() {

    };

    state = {
        user: {},
        notify: false,

    };

    notify = () => {
        return this.state.notify;
    };

    changePassword = (password) => {
        console.log('this should change password');
        //ForgottenPasswordAPI.setPassword(this.state.user.dn, password);
    };

    handleCloseNotify = () => {
        console.log(this.state);
        this.setState({
            notify: false,
        })
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Paper elevation={1}>
                    <img src={logo} alt="Logo" className={classes.logo}/>
                    <Typography variant="h5" component="h3">
                        Bytt passord
                    </Typography>
                    <Typography component="p">
                        <PasswordInput
                            changePassword={this.changePassword}
                        />
                        <PasswordRules/>
                        <NotifyChangedPassword
                            open={this.notify}
                            close={this.handleCloseNotify}
                        />
                    </Typography>
                </Paper>
            </div>
        );
    }
}

PasswordChange.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(PasswordChange);