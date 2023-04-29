import React from 'react';
//import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                MERN URL SHORTNER
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Developed By Atul vishwakarma
            </Typography>
        </footer>
    );
};

export default Footer;
