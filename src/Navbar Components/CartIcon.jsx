import { Icon } from "@chakra-ui/react";
import { BsFillCartFill } from "react-icons/bs";

function CartIcon(){
    return (
        <Icon fill="white" marginRight="5px" as={BsFillCartFill}/>
    )
}
export default CartIcon