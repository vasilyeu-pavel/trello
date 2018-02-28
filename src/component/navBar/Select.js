import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select';
import { connect } from 'react-redux'
import { setSelectBoard } from '../../AC'
import 'react-select/dist/react-select.css'


class FiltersSelect extends Component {

  state = {
    selectedOption: '',
  }

  handleChange = (selectedOption) => this.props.setSelectBoard(selectedOption);
  

    render() {

      const { boards, select } = this.props

        const options = boards.map(board => ({
            label: board.title,
            value: board.id
        }))

        return <Select
            style = {{"width": 300 + "px"}}
            options={options}
            value={select}
            multi={true}
            onChange={this.handleChange}
        />
    }

}

export default connect(state => ({
    boards: state.boards.boards,
    select: state.select
}), { setSelectBoard })(FiltersSelect)