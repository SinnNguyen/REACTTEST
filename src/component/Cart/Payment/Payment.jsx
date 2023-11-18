const Payment = () => {
  return (
    <>
      <div className="bg-sky-200 rounded-lg p-5">
        <div>
          <div className="mb-3">
            <input type="radio" name="payMethod" value="cod" className="h-4 w-4 mx-3 hover:bg-blue-500 checked:bg-blue-600" checked />
            <label htmlFor="shipMethod">
              Thanh toán tiền mặt khi nhận hàng
            </label>
          </div>
          <div className="mb-3">
            <input type="radio" name="payMethod" value="paypal" className="h-4 w-4 mx-3 hover:bg-blue-500 checked:bg-blue-600" />
            <label htmlFor="shipMethod">
              Thanh toán tiền bằng Paypal
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export { Payment }; 