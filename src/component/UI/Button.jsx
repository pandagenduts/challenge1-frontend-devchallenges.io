const Button = (props) => {

  return (
    <button
      className='bg-[#E0E0E0] rounded-md hover:bg-[#AEAEAE] duration-300 px-4 py-2'
      disabled={props.disabled}

    >
      {props.label}
    </button>
  )
}

export default Button