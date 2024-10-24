import React, { useState } from "react";
import "../styles/plusMinus.css";
import IconButton from '../styleComponents/iconButton'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const QuantityInput = () => {
     const [quantity, setQuantity] = useState(1);

     // Hàm để tăng số lượng
     const increaseQuantity = () => {
          setQuantity((prev) => prev + 1);
     };

     // Hàm để giảm số lượng (đảm bảo không giảm dưới 1)
     const decreaseQuantity = () => {
          if (quantity > 1) {
               setQuantity((prev) => prev - 1);
          }
     };

     // Hàm xử lý thay đổi khi nhập số
     const handleInputChange = (e) => {
          const value = parseInt(e.target.value, 10);
          if (value >= 1) {
               setQuantity(value);
          }
     };

     return (
          <div style={{ display: "flex", alignItems: "center" }}>
               < IconButton
                    onClick={decreaseQuantity}
                    variant='contained'
                    color='success'
                    size='small'
                    width='10px'
                    padding='10px'
                    icon={<RemoveIcon />}
               />
               <input
                    type="number"
                    value={quantity}
                    onChange={handleInputChange}
                    style={{ width: "35px", textAlign: "center", margin: "0 5px" }}
                    min="1"
               />
               < IconButton
                    onClick={increaseQuantity}
                    variant='contained'
                    color='success'
                    size='small'
                    width='10px'
                    padding='10px'
                    icon={<AddIcon />}
               />
          </div>
     );
};

export default QuantityInput;
