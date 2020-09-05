import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom : 20,
  },
});

export default function Stepper(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <MobileStepper
      position="static"
      className={classes.root}
      steps={1}
      nextButton={
        <Button size="small" onClick={props.next} disabled={props.isNext === null}>
          Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={props.prev} disabled={props.isPrev === null}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
        </Button>
      }
    />
  );
}
