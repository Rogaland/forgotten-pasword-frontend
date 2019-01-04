import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import {TextField} from "@material-ui/core";
import ForgottenPasswordAPI from "./ForgottenPasswordAPI";
import NotifyChangedPassword from "./NotifyChangedPassword";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";


const styles = theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing.unit,
    },
    form: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    textField: {
        alignSelf: 'center',
        width: '90%',
    },
    button: {
        margin: theme.spacing.unit,
        alignSelf: 'center',
        width: '90%',
        backgroundColor: 'rgb(0,113,185)',
        color: 'white'
    },
    input: {
        display: 'none',
    },
    close: {
        padding: theme.spacing.unit / 2,
        color: 'white'
    },
});


class PasswordChange extends React.Component {


    componentDidMount() {
        //ForgottenPasswordAPI.getUserinfo('').then(response => console.log(response));
    };

    constructor(props) {
        super(props);

        this.state = {
            newPasswordValid: true,
            repeatPasswordValid: true,
            newPassword: '',
            repeatPassword: '',
            passwordUpdateNotify: false,
            notify: false,
        };
    };

    onChangeNewPassword = (event) => {
        let password = event.target.value;

        // https://blogs.technet.microsoft.com/poshchap/2016/10/14/regex-for-password-complexity-validation/
        let passwordComplexityValidator = new RegExp("^((?=.*[a-z])(?=.*[A-Z])(?=.*\\d)|(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])|(?=.*[a-z])(?=.*\\d)(?=.*[^A-Za-z0-9])|(?=.*[A-Z])(?=.*\\d)(?=.*[^A-Za-z0-9]))([A-Za-z\\d@#$%^&£*\\-_+=[\\]{}|\\\\:',?/`~\"();!]|\\.(?!@)){8,16}$");

        if (passwordComplexityValidator.test(password)) {
            if (password)
                this.setState({
                    newPasswordValid: true,
                    newPassword: password
                });
        } else {
            this.setState({
                newPasswordValid: false,
                newPassword: '',
            })
        }
    };

    onChangeRepeatPassword = event => {
        let password = event.target.value;
        if (password === this.state.newPassword) {
            this.setState({
                repeatPasswordValid: true,
                repeatPassword: password
            });
        } else {
            this.setState({
                repeatPasswordValid: false,
                repeatPassword: '',
            })
        }
    };

    isFormValid = () => {
        return (this.state.newPasswordValid && this.state.newPassword.length > 0 && this.state.repeatPasswordValid && this.state.repeatPassword.length > 0)
    };

    onClickSubmit = () => {
        console.log(this.state);
        this.setState({notify: true})
    };

    handleCloseNotify = (event, reason) => {
        if (reason === 'clickaway') {
            console.log("hello");
            return;
        }

        this.setState({ notify: false });
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.container}>
                <form className={classes.form}>
                    <TextField
                        name={"password"}
                        label={"Passord"}
                        required
                        type="password"
                        onChange={this.onChangeNewPassword}
                        fullWidth
                        className={classes.textField}
                        error={!this.state.newPasswordValid}
                    />

                    <TextField
                        name={"repeatPassword"}
                        label={"Repeter passord"}
                        required
                        type="password"
                        onChange={this.onChangeRepeatPassword}
                        fullWidth
                        className={classes.textField}
                        error={!this.state.repeatPasswordValid}
                    />

                    <Button
                        raised
                        variant={"contained"}
                        //disabled={!this.isFormValid()}
                        className={classes.button}
                        onClick={this.onClickSubmit}>

                        Bytt passord

                    </Button>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={this.state.notify}
                        autoHideDuration={6000}
                        onClose={this.handleClose}
                        ContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        message={<span id="message-id">Passord endret</span>}
                        action={[
                            <IconButton
                                key="close"
                                aria-label="Close"
                                color="default"
                                className={classes.close}
                                onClick={this.handleCloseNotify}
                            >
                                <CloseIcon className={classes.close}/>
                            </IconButton>,
                        ]}
                    />

                </form>
            </div>
        );
    }
}

PasswordChange.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PasswordChange);