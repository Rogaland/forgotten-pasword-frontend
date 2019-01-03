import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    text: {
        textAlign: 'left'
    }
});

function PasswordRules(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Passordregler</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.text}>
                        <ul>
                            <li>Passordet må være&nbsp;
                                8-16 tegn
                            </li>

                            <li>Passordet må inneholde karakterer fra minst 3 av kategoriene under:</li>
                            <ul>
                                <li>Store bokstaver&nbsp;
                                    A-Z
                                </li>
                                <li>Små bokstaver&nbsp;
                                    a-z
                                </li>
                                <li>Tall&nbsp;
                                    0-9
                                </li>
                                <li>Spesialtegn &nbsp;
                                    {`~ ! @ # $ % ^ & * _ - + = \` | \\ ( ) { } [ ] : ; " ' < > , . ? /`}
                                </li>
                            </ul>
                            <li>Kan ikke inneholde:</li>
                            <ul>
                                <li>
                                    brukernavn
                                </li>
                                <li>
                                    fornavn
                                </li>
                                <li>
                                    etternavn
                                </li>
                            </ul>

                            <li>Tillegg:</li>
                            <ul>
                                <li>De
                                    12 siste passord
                                    lagres i historien og kan ikke brukes.
                                </li>
                                <li>Passordet må endres hver&nbsp;
                                    90
                                    &nbsp;dag.
                                </li>
                                <li>Passordet kan endres etter&nbsp;
                                    2
                                    &nbsp;dager.
                                </li>
                            </ul>
                        </ul>
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

PasswordRules.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PasswordRules);