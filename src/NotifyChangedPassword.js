import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import {withStyles} from '@material-ui/core/styles';

const variantIcon = {
    success: CheckCircleIcon,
    error: ErrorIcon,
};

const styles1 = theme => ({
    success: {
        backgroundColor: 'rgb(132, 184, 25)',
    },
    error: {
        backgroundColor: 'rgb(213,43,30)',
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit,
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
});

class MySnackbarContent extends React.Component {
    render() {
        const {classes, className, message, variant, ...other} = this.props;
        const Icon = variantIcon[variant];

        return (
            <SnackbarContent
                className={classNames(classes[variant], className)}
                aria-describedby="client-snackbar"
                message={
                    <span id="client-snackbar" className={classes.message}>
                        <Icon className={classNames(classes.icon, classes.iconVariant)}/>
                        {message}
                    </span>
                }
                action={[
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        className={classes.close}
                        onClick={this.props.close}
                    >
                        <CloseIcon className={classes.icon}/>
                    </IconButton>,
                ]}
                {...other}
            />
        );
    }

}

MySnackbarContent.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    message: PropTypes.node,
    variant: PropTypes.oneOf(['success', 'error']).isRequired,
    close: PropTypes.func.isRequired,
};

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

const styles2 = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
});

class NotifyChangedPassword extends React.Component {
    render() {
        return (
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.props.open}
                    autoHideDuration={6000}
                >
                    <MySnackbarContentWrapper
                        variant={this.props.variant}
                        message={this.props.message}
                        close={this.props.close}
                    />
                </Snackbar>
            </div>
        );
    }
}

NotifyChangedPassword.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['success', 'error']).isRequired,
};

export default withStyles(styles2)(NotifyChangedPassword);