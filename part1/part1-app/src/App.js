

const Header = (props) => {

  return (
    <h1>O nome do curso é {props.course}</h1>
  )

}

const Content = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}




const App =() => {

  //const course =  'Desenvolvimento de aplicações Half Stack'
  //const part1 = 'Fundamentos da biblioteca React'
  const exercises1 = 10
  //const part2 = 'Usando props para passar dados'
  const exercises2 = 7
  //const part3 = 'Estado de um componente'
  const exercises3 = 14

  return(
    <div>
      <Header course='Desenvolvimento de aplicações Half Stack' />
      <p>
        <Content part='Fundamentos da biblioteca React' exercises={exercises1} />
      </p>
      <p>
      <p>
        <Content part='Usando props para passar dados' exercises={exercises2} />
      </p>
      </p>
      <p>
      <p>
        <Content part='Estado de um componente' exercises={exercises3} />
      </p>
      </p>
      <p>Number of exercices {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}
export default App
