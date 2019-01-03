import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PasswordChange from "./PasswordChange";
import PasswordRules from "./PasswordRules";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        display: 'flex',
        justifyContent: 'center'
    },

});

function Password(props) {
    const {classes} = props;

    return (
        <div className={classes.root}>
            <Paper elevation={1}>
                <Typography variant="h5" component="h3">
                    Bytt passord
                </Typography>
                <Typography component="p">
                    <PasswordChange/>
                    <PasswordRules/>
                </Typography>
            </Paper>
        </div>
    );
}

Password.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Password);