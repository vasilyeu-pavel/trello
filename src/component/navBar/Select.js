import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select';
import { connect } from 'react-redux'
import { setSelectBoard } from '../../AC'
import 'react-select/dist/react-select.css'
import { withRouter } from 'react-router-dom'


class FiltersSelect extends Component {

  state = {
    selectedOption: '',
  }

  handleChange = (selectedOption) => {
    this.props.setSelectBoard(selectedOption)
    console.log(selectedOption);
    if (selectedOption.length === 1) {
        this.props.history.push(`/board/${selectedOption[0].value}`)
    }else if(selectedOption.length > 1) {
        this.props.history.push(`/`)
    }else {
        this.props.history.push(`/`)
    }

}
  

    render() {

      const { boards, select } = this.props

        const options = boards.map(board => ({
            label: board.title,
            value: board.id
        }))

        return( 
            <Select
            style = {{
            "width": 300 + "px",
            "padding": "2px"
            }}
            options={options}
            value={select}
            multi={true}
            onChange={this.handleChange}
            placeholder = "доски"
        />
        )
    }

}

export default connect(state => ({
    boards: state.boards.boards,
    select: state.select
}), { setSelectBoard })(withRouter(FiltersSelect))