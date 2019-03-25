import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Dialog, DialogTitle, DialogContent, DialogContentText, Typography} from '@material-ui/core';

const StyledDialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
    color: 'brown',
  },
}))(DialogTitle);

const StyledDialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2,
    color: 'grey',
  },
}))(DialogContent);

const StyledDialogContentText = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2,
    color: 'grey',
  },
}))(DialogContentText);

const poempopover = props => {
	return (
    <Dialog
      open={props.open}
      onClose={props.close}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      fullWidth={true}
      maxWidth="md"
    >
      <StyledDialogTitle id="scroll-dialog-title">
        {props.currPoemTitle}
        <Typography variant="h6" guttertop>{props.currPoemDate}</Typography>
      </StyledDialogTitle>
      <StyledDialogContent>
        <StyledDialogContentText>
          {props.currPoemContent.map((content, key) => (
            <Typography gutterbottom>{content}</Typography>
          ))}
        </StyledDialogContentText>
      </StyledDialogContent>
    </Dialog>
	)
}

export default poempopover;