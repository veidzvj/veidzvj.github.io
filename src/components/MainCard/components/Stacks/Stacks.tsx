import { stacks } from '../../../../constants'
import Stack from './components/Stack/Stack'
import './Stacks.css'

function Stacks() {
  return (
    <div className="stacks-container">
      <h1>Stacks e Conhecimentos</h1>

      <div className="inner-stacks-container">
        {stacks.map((stack) => (
          <Stack name={stack.name} />
        ))}
      </div>
    </div>
  )
}

export default Stacks
