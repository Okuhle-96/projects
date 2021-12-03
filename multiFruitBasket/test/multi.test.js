const assert = require("assert");
const multiFruitBasketFactory = require("../multi");
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://coderr:1996@localhost:5432/malthi';

const pool = new Pool({
    connectionString
});

describe('The Multi Fruit Basket function', function () {

    beforeEach(async function () {
        await pool.query("delete from basket;");
        await pool.query("delete from multi;");
    });

    it('should create and return a new basket,', async function () {
        let multiFruitBasket = multiFruitBasketFactory(pool);

        await multiFruitBasket.newMultiBasket('Apple', 1, '3.00');

        assert.deepEqual(await multiFruitBasket.findAllFruits('Apple'), 
        
        [{fruit_name: 'Apple', quantity: 1, price: '3.00'}])
    });

 
    after(function () {
        pool.end();
    })
});