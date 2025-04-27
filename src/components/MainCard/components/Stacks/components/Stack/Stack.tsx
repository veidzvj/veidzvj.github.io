import './Stack.css'

type StackProps = {
  name: string
}

function Stack({ name }: StackProps) {
  return (
    <div className="stack-container">
      <p>{name}</p>
    </div>
  )
}

export default Stack
