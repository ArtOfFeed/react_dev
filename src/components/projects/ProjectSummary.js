import React from "react";
import {Card, Typography, CardContent, makeStyles} from "@material-ui/core";

const UseStyles = makeStyles(theme => ({
    time: {
        color: '#888',
        fontSize: '13px'
    },
}));

const ProjectSummary = ({project}) => {
    const classes = UseStyles()
    const date = new Date(project.createdAt.seconds * 1000);

    return (
        <Card>
            <CardContent>
                <Typography component="p">{project.authorFirstName}</Typography>
                <Typography component="p">{project.authorSecondName}</Typography>
                <Typography className={classes.time} component="p">{`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}</Typography>
            </CardContent>
        </Card>
    )
};

export default ProjectSummary;