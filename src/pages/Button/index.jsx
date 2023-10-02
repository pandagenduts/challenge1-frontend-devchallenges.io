import Reusable from "../../component/UI/Reusable"
import Button from "../../component/ui/Button"


const ButtonPage = () => {
  return (
    <>
      <h1 className="pb-4 text-xl font-medium md:text-2xl md:pb-7 text-4F4F4F">Buttons</h1>
      <Button label='Default' />
      <Reusable />
    </>
  )
}

export default ButtonPage