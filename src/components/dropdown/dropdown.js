// import React from 'react'
// import { Select } from 'semantic-ui-react'

// // import { stateOptions } from '../common'


// const DropdownSearchSelection = ({text, options}) => {
//     return(
//     <Select placeholder={text}                      
//                       selection
//                       value="-1"
//                       options={options} />
           
             
//     ); 
// }  

// export default DropdownSearchSelection;

import React, { Component } from 'react'
import { Accordion, Form, Menu } from 'semantic-ui-react'

const ColorForm = (
  <Form>
    <Form.Group grouped>
      <Form.Checkbox label='Red' name='color' value='red' />
      <Form.Checkbox label='Orange' name='color' value='orange' />
      <Form.Checkbox label='Green' name='color' value='green' />
      <Form.Checkbox label='Blue' name='color' value='blue' />
    </Form.Group>
  </Form>
)

const SizeForm = (
  <Form>
    <Form.Group grouped>
      <Form.Radio label='Small' name='size' type='radio' value='small' />
      <Form.Radio label='Medium' name='size' type='radio' value='medium' />
      <Form.Radio label='Large' name='size' type='radio' value='large' />
      <Form.Radio label='X-Large' name='size' type='radio' value='x-large' />
    </Form.Group>
  </Form>
)

class DropdownSearchSelection extends React.Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion as={Menu} vertical>
        <Menu.Item>
          <Accordion.Title
            active={activeIndex === 0}
            content='Size'
            index={0}
            onClick={this.handleClick}
          />
          <Accordion.Content active={activeIndex === -1} content={SizeForm} />
        </Menu.Item>       
      </Accordion>
    )
  }
}
export default DropdownSearchSelection;