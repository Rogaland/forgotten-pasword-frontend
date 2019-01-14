import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import {TextField} from "@material-ui/core";

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


class PasswordInput extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            newPasswordValid: true,
            repeatPasswordValid: true,
            newPassword: '',
            repeatPassword: '',
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
        this.props.changePassword(this.state.newPassword);
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
                </form>
            </div>
        );
    }
}

PasswordInput.propTypes = {
    classes: PropTypes.object.isRequired,
    changePassword: PropTypes.func.isRequired,
};

export default withStyles(styles)(PasswordInput);