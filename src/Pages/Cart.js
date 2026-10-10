function Cart() {
  return (
    <div className="cart-page">
      <div className="cart-container">

        <div className="cart-table-wrapper">
          <table className="cart-table">
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>
              <tr className="cart-item-row">

                <td>
                  <div className="cart-product">

                    <div className="cart-product-image">
                      <img
                        src="src/Images/headphone.jpg"
                        alt="boAt Rockerz 450"
                      />
                    </div>

                    <div className="cart-product-info">
                      <h3>boAt Rockerz 450</h3>
                      <p className="cart-category">Electronics</p>
                    </div>

                  </div>
                </td>

                <td>
                  <div className="cart-price">
                    <strong>₹1,599</strong>
                    <span className="original-price">₹1,999</span>
                  </div>
                </td>

                <td>
                  <div className="quantity-control">
                    <button type="button">−</button>
                    <span>1</span>
                    <button type="button">+</button>
                  </div>
                </td>

                <td>
                  <strong className="item-total">₹1,599</strong>
                </td>

                <td>
                  <button type="button" className="delete-btn">
                    <img
                      src="/icons/delete-icon.png"
                      alt="Delete"
                    />
                  </button>
                </td>

              </tr>
            </tbody>
          </table>

          {/* Clear Cart */}
          <div className="cart-footer">
            <button type="button" className="clear-cart-btn">
              <img src="/icons/clear-cart.png" alt="" />
              Clear Cart
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Cart;

                