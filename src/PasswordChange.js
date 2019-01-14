import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
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
        display: "flex",
        justifyContent: "center"
    },
    logo: {
        margin: theme.spacing.unit * 2,
        width: "200px"
    }
});

class PasswordChange extends React.Component {
    componentDidMount() {
        ForgottenPasswordAPI.getDn().then(dn => {
            ForgottenPasswordAPI.getUserinfo(dn).then(user => {
                this.setState({user: user});
            });
        });
    }

    state = {
        user: {},
        notify: false,
        notifyVariant: "error",
        notifyMessage: ""
    };

    changePassword = password => {
        console.log(this.state);
        ForgottenPasswordAPI.setPassword(this.state.user.dn, password)
            .then(() => this.notifySuccess())
            .catch(() => this.notifyError());
    };

    handleCloseNotify = () => {
        console.log(this.state);
        this.setState({
            notify: false
        });
    };

    notifySuccess = () => {
        this.setState({
            notify: true,
            notifyVariant: "success",
            notifyMessage: "Passord byttet."
        });
    };

    notifyError = () => {
        this.setState({
            notify: true,
            notifyVariant: "error",
            notifyMessage: "Noe gikk galt."
        });
    };

    render() {
        const {classes} = this.props;
        if (this.state.user === {}) {
            return (
                <div><p>Loading user</p></div>
            );
        } else {
            return (
                <div className={classes.root}>
                    <Paper elevation={1}>
                        <img src={logo} alt="Logo" className={classes.logo}/>{" "}
                        <Typography variant="h5" component="h3">
                            Hei {this.state.user.firstName + " " + this.state.user.lastName}
                        </Typography>{" "}
                        <Typography component="div">
                            <PasswordInput changePassword={this.changePassword}/>{" "}
                            <PasswordRules/>
                            <NotifyChangedPassword
                                open={this.state.notify}
                                close={this.handleCloseNotify}
                                variant={this.state.notifyVariant}
                                message={this.state.notifyMessage}
                            />{" "}
                        </Typography>{" "}
                    </Paper>{" "}
                </div>
            );
        }
    }
}

PasswordChange.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PasswordChange);
