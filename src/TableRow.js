import React, { Component } from "react";


export class TableRow extends Component {
    render() {
        return (
            <tr onClick={()=>{
                this.props.changeActiveUser(this.props.id)
            }}  class={`data-row ${this.props.id == this.props.activeUserId ? `active` : ""}`}>
                <td class="column1">{this.props.id}</td>
                <td class="column2">{this.props.firstName}</td>
                <td class="column3">{this.props.lastName}</td>
                <td class="column4">{this.props.email}</td>
                <td class="column5">{this.props.phone}</td>
            </tr>
        )
    }
}

export default TableRow;