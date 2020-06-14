import React from "react";
import {connect} from "react-redux";
import {mapStateToProps} from "./air-index-preview.mapper";
import {AirIndexPreviewLevel, AirIndexPreviewProps} from "./air-index-preview.props";
import {Card, TableCell, CardHeader, Table, TableBody, TableHead, TableRow, CardContent} from "@material-ui/core";
import './air-index-preview.scss';
import {AirIndexDescription} from "../air-index-description/air-index-description";


class AirIndexPreview extends React.Component<AirIndexPreviewProps, any> {
    render() {
        return (
            <React.Fragment>
                <Card>
                    <CardHeader
                        title={
                            <React.Fragment>
                                <span
                                    className="air-index-preview__summary-title">{this.props.translations.title}</span>
                                <AirIndexDescription noDataLabel={this.props.translations.noDataLabel} indexId={this.props.summaryId}/>
                            </React.Fragment>}>
                    </CardHeader>
                    <CardContent>
                        <div className="air-index-preview__sub-header">Details:</div>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>{this.props.translations.tableColumns.type}</TableCell>
                                    <TableCell align="right">{this.props.translations.tableColumns.value}</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.indexes.map((airIndexPreviewLevel: AirIndexPreviewLevel) => (
                                    <TableRow key={airIndexPreviewLevel.label}>
                                        <TableCell>{airIndexPreviewLevel.label}</TableCell>
                                        <TableCell align="right">
                                            <AirIndexDescription noDataLabel={this.props.translations.noDataLabel} indexId={airIndexPreviewLevel.id}/>
                                        </TableCell>
                                        {/*<TableCell>{airIndexPreviewLevel.date}</TableCell>*/}
                                        {/*   TODO: Add date as (i) with popup */}
                                    </TableRow>)
                                )}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps)(AirIndexPreview);
