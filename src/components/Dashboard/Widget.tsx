import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import './Widget.scss';

interface IWidget {
    value: number;
    element: string;
}

export default class Widget extends Component<IWidget, {}> {

    render() {
        const { value, element } = this.props;
        return (
            <Card className="card-widget">
                <CardContent className="card-content">
                    <Typography color="textSecondary" className="value">
                        {value}
                    </Typography>
                    <Typography className="element">
                        {element}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}
