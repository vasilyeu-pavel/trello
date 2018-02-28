import {SET_SELECT_BOARD} from '../constants'


export default (selected = [], action) => {
	const {type, payload} = action

	switch (type) {
		case (SET_SELECT_BOARD): 
		return payload.selected
	}

	return selected
}