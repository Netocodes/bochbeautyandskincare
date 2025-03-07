import { useCart } from "../context/usecart"
import { formFeilds } from "./personalInfo";




const Payment = () => {
  const personalInfo: formFeilds = JSON.parse(window.sessionStorage.getItem("personalInfo") || '{}')
  const addressData: formFeilds = JSON.parse(window.sessionStorage.getItem("addressData") || '{}')
const { cartItems, TotalPrice } = useCart()
const total = TotalPrice()
  if (!personalInfo || !addressData) {
    return <h1>Fill in the form</h1>
}
console.log(personalInfo)
const requestedData = {
  personalInfo,
  addressData,
cartItems,
total
}
console.log(JSON.stringify({requestedData}))

  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ requestedData }),
      })
      const data = await response.json()
      console.log(data.message)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <div className="flex">
        <button onClick={handleClick}>ClickMe</button>
      </div>
    </div>
  )
}

export default Payment
