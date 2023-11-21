import { useSelector } from "react-redux"

export default function Navbar() {
    const {amount} = useSelector((state) => state.cart)
  return (
   
    <div>
        <ul className="navbar">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li >Basket {amount} </li>
        </ul>
    </div>
  )
}
