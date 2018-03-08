import React from 'react'
import PropTypes from 'prop-types'


function Modal(idComment) {
    return (
      <div id="prompt-form-container">
        <form id="prompt-form">
          <div id="prompt-message">Введите, пожалуйста...
            Что-то.. </div>
          <input name="text" type="text"/>
          <input type="submit" value="Ок"/>
          <input type="button" name="cancel" value="Отмена"/>
        </form>
      </div>
    )
}

export default Modal