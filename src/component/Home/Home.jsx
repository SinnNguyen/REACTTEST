import { MainLayout } from "../../layout/MainLayout";

const Home = () => {
  return (
    <>
      <MainLayout>
        <section className="section">
          <h1 className=" mx-12 text-2xl font-bold">Chọn Phương thức thanh toán</h1>
          <div className="container ">
            <div className="grid grid-cols-3 gap-3">
              <div>
                <h3 className="mb-3 mt-3 font-bold">Chọn phương thức giao hàng</h3>
                <div className="bg-sky-100 rounded-md">
                  <p>Giao hàng tiết kiệm</p>
                </div>
                <br></br>
                <h3 className="mb-3 mt-3 font-bold">Chọn phương thức thanh toán</h3>
                <div className="bg-sky-100 rounded-md">
                  <p>Giao hàng tiết kiệm</p>
                </div>
              </div>
              <div></div>
              <div>
                <p className="mb-2">Địa chỉ: <span className="font-bold">TPHCM Quận 12</span></p>
                <a href="#" className="text-blue-500">Thay đổi</a>
                <br></br>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}

export { Home };