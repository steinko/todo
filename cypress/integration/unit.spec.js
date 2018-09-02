import { shallow, configure } from 'enzyme'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
/* eslint-disable */
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'

import ToDoApp from '../../src/components/TodoApp'
/* eslint-enable */

chai.use(chaiEnzyme()) // Note the invocation at the end
configure({ adapter: new Adapter() })

describe('Unit tests', () => {
  it('should dispplay text', () => {
    /* eslint-disable */
    expect(shallow(<ToDoApp />)).to.exist
    /* eslint-enable */
  })
})
