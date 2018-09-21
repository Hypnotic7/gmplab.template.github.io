
import React from 'react'
import { Dropdown } from 'semantic-ui-react'


const DropdownSearchSelection = ({text, options}) => {
  return(
    <div className="f5 lh-copy" style={{width: 200}}>
      <Dropdown placeholder={text} fluid selection options={options}/>
    </div>
    
  ) ;
}

export default DropdownSearchSelection