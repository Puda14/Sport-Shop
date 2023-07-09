import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearCart, getTotals } from "../features/cartSlice";
const CheckOutSuccess = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <Container>
      <h2>CheckOut Successful</h2>
      <p>Your order might take some time to proccess.</p>
      <p>Check your order status at your profile after about 2mins.</p>
      <p>
        Increase of any inqueries contact the support at{" "}
        <strong>support@SportShop.com</strong>
      </p>
    </Container>
  );
};

export default CheckOutSuccess;

const Container = styled.div`
  min-height: 80vh;
  max-width: 800px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    margin-bottom: 0.5rem;
    color: #029e02;
  }
`;
