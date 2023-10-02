const Button = (props) => {

  return (
    <button
      className='px-4 py-2 duration-300 rounded-md bg-E0E0E0 hover:bg-AEAEAE'
      disabled={props.disabled}

    >
      {props.label}
    </button>
  )
}

export default Button