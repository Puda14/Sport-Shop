import { Outlet, useNavigate } from "react-router";
import { AdminHeaders, PrimaryButton } from "./CommonStyled";

const Products = () => {
    const navigate = useNavigate();

    return ( 
        <>
            <AdminHeaders>
                Products
                <PrimaryButton onClick={()=> navigate("/admin/products/create-product")}>
                    Create
                </PrimaryButton>
            </AdminHeaders>
            <Outlet />
        </>
    );
};
 
export default Products ;