import { MainLayout } from "../../layout/MainLayout";
import { BtnPay } from "../../ui/BtnCheckout";
import formatCurrency from "../../utils/formatCurrency";
import { Payment } from "../Cart/Payment/Payment";
import { Shipping } from "../Cart/Shipping/Shipping";

const Home = () => {
  return (
    <>
      <MainLayout>
        <section className="section">
          <h1 className=" mx-10 mb-8 text-2xl font-bold">Chọn Phương thức thanh toán</h1>
          <div className="container mx-10">
            <div className="grid grid-cols-3 gap-3">
              <form action="#" method="POST">
                <h3 className="mb-3 mt-3 font-bold">Chọn phương thức giao hàng</h3>
                <Shipping />
                <br />
                <h3 className="mb-3 mt-3 font-bold">Chọn phương thức thanh toán</h3>
                <Payment />
              </form>
              <div></div>
              <div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <p className="mb-2">Địa chỉ: </p>
                  <p className="font-bold">TPHCM Quận 12</p>
                  <a href="#" className="text-blue-500">Thay đổi</a>
                </div>
                <br></br>
                <div className="grid grid-cols-2 gap-2">
                  <p className="text-start">Tạm tính</p>
                  <p className="text-end font-bold">{formatCurrency(19890000)}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <p className="text-start">Giảm giá</p>
                  <p className="text-end font-bold">{formatCurrency(994500)}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <p className="text-start">Phí giao hàng</p>
                  <p className="text-end font-bold">{formatCurrency(0)}</p>
                </div>
                <div className="grid grid-cols-2">
                  <p className="#">Tổng tiền</p>
                  <p className="font-bold text-3xl text-end text-red-500">{formatCurrency(18895500)}</p>
                </div>
                <p className="text-center mt-2">(Đã bao gồm VAT nếu có)</p>
                <div className="mt-3">
                  <BtnPay />
                </div>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}

export { Home };