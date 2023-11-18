const Shipping = () => {
  return (
    <>
      <div className="bg-sky-200 rounded-lg p-5">
        <div>
          <div className="mb-3 align-middle">
            <input type="radio" name="shipMethod" value="FAST" className="h-4 w-4 mx-3 hover:bg-blue-500 checked:bg-blue-600" checked />
            <label htmlFor="shipMethod">
              <span>FAST </span>Giao hàng tiết kiệm
            </label>
          </div>
          <div className="mb-3 align-middle">
            <input type="radio" name="shipMethod" className="h-4 w-4 mx-3 hover:bg-blue-500 checked:bg-blue-600" value="GO" />
            <label htmlFor="shipMethod">
              <span>GO_JEK </span>Giao hàng tiết kiệm
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export { Shipping };