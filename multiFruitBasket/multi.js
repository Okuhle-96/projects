module.exports = function MultiFruitBasket(pool) {

  async function addFruitExistingToBasket(fruit_name, quantity, price, id) {
    await pool.query(
      "insert into multi_basketi (fruit_name, quantity, price, id) values($1, $2, $3, $4)",
      [fruit_name, quantity, price, id]
    );
  }

  async function removeFruitFromBaskets(basketId) {
    await pool.query(
      "delete * from multi_fruit_basket where id = $1",
      [basketId]
    );
  }


  async function getBasketId(basket_name){
    await pool.query(
      "select id from multi_basket where multi_fruit_name = $1",
      [basket_name]
    )
  }

  async function returnFruitsFromBasket(basketId) {
    await pool.query(
      "select basket_name, basket_id",
      [basketId]
    );
  }

  async function returnTotalCost(basket_name, basketId) {
    await pool.query(
      "select sum(qty * price) as total from multi_fruit_items where id = $1 and name = $2",
      [basket_name, basketId]
    );
  }

  return {
    getBasketId,
    addFruitExistingToBasket,
    removeFruitFromBaskets,
    returnFruitsFromBasket,
    returnTotalCost
  };
};
