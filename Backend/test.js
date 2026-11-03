import app from './src/app.js';

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ ${message}`);
    passed++;
  } else {
    console.error(`  ✗ ${message}`);
    failed++;
  }
}

async function runTests() {
  const PORT = 5099;
  const server = app.listen(PORT);
  const baseUrl = `http://localhost:${PORT}/api`;

  console.log('\n🧪 Starting Creamy Bliss Backend Tests...\n');

  try {
    // 1. Health check
    console.log('1. Testing Health Endpoint:');
    const healthRes = await fetch(`${baseUrl}/health`);
    const healthData = await healthRes.json();
    assert(healthRes.status === 200, 'Health check returns status 200');
    assert(healthData.status === 'healthy', 'Health status is "healthy"');

    // 2. Products
    console.log('\n2. Testing Products & Flavors:');
    const prodRes = await fetch(`${baseUrl}/products`);
    const prodData = await prodRes.json();
    assert(prodRes.status === 200, 'GET /api/products returns 200');
    assert(prodData.count > 0, `Products found: ${prodData.count}`);

    const bestRes = await fetch(`${baseUrl}/products/bestsellers`);
    const bestData = await bestRes.json();
    assert(bestRes.status === 200, 'GET /api/products/bestsellers returns 200');
    assert(bestData.data.length >= 3, `Top 3 best sellers returned (${bestData.data.length})`);

    const catRes = await fetch(`${baseUrl}/products/categories`);
    const catData = await catRes.json();
    assert(catRes.status === 200, 'GET /api/products/categories returns 200');
    assert(catData.data.length > 0, 'Categories returned with product counts');

    const singleRes = await fetch(`${baseUrl}/products/strawberry-delight`);
    const singleData = await singleRes.json();
    assert(singleRes.status === 200, 'GET /api/products/strawberry-delight returns 200');
    assert(singleData.data.name === 'Strawberry Delight', 'Single product matches Strawberry Delight');

    // Filter test
    const filterRes = await fetch(`${baseUrl}/products?category=berries`);
    const filterData = await filterRes.json();
    assert(filterRes.status === 200 && filterData.data.every(p => p.category === 'berries'), 'Category filtering works');

    // 3. Coupon Validation
    console.log('\n3. Testing Coupon Validation:');
    const couponRes = await fetch(`${baseUrl}/orders/validate-coupon`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: 'BLISSJOY', subtotal: 20 })
    });
    const couponData = await couponRes.json();
    assert(couponRes.status === 200 && couponData.valid === true, 'BLISSJOY is valid');
    assert(couponData.discountAmount === 4.00, `Calculated 20% discount is $4.00 (got $${couponData.discountAmount})`);

    // 4. Place Order
    console.log('\n4. Testing Order Placement:');
    const orderRes = await fetch(`${baseUrl}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customer: {
          firstName: 'Maya',
          lastName: 'Lin',
          email: 'maya@example.com',
          street: '123 Sweet St',
          city: 'San Francisco',
          postalCode: '94105'
        },
        items: [
          { id: 'strawberry-delight', name: 'Strawberry Delight', price: 5.50, quantity: 2 },
          { id: 'vanilla-dream', name: 'Vanilla Dream', price: 4.95, quantity: 1 }
        ],
        promoCode: 'BLISSJOY'
      })
    });
    const orderData = await orderRes.json();
    assert(orderRes.status === 201, 'Order placed with status 201');
    assert(orderData.order && orderData.order.id.startsWith('CB-'), `Order ID generated: ${orderData.order?.id}`);
    assert(orderData.order.discountAmount > 0, 'Coupon discount applied to order');

    // Fetch placed order
    const getOrderRes = await fetch(`${baseUrl}/orders/${orderData.order.id}`);
    const getOrderData = await getOrderRes.json();
    assert(getOrderRes.status === 200, 'Order retrieved by ID');
    assert(getOrderData.data.customer.firstName === 'Maya', 'Order customer matches Maya');

    // 5. Reviews
    console.log('\n5. Testing Reviews API:');
    const reviewsRes = await fetch(`${baseUrl}/reviews`);
    const reviewsData = await reviewsRes.json();
    assert(reviewsRes.status === 200, 'GET /api/reviews returns 200');
    assert(reviewsData.stats && reviewsData.stats.averageRating > 0, `Average rating: ${reviewsData.stats.averageRating}`);

    const newRevRes = await fetch(`${baseUrl}/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Jordan Lee',
        rating: 5,
        review: 'The Belgian Chocolate is decadent and divine!',
        flavor: 'Belgian Chocolate'
      })
    });
    assert(newRevRes.status === 201, 'POST /api/reviews submitted successfully');

    // 6. Loyalty Program
    console.log('\n6. Testing Loyalty Program:');
    const loyaltyRes = await fetch(`${baseUrl}/loyalty`);
    const loyaltyData = await loyaltyRes.json();
    assert(loyaltyRes.status === 200, 'GET /api/loyalty returns 200');
    assert(loyaltyData.data.points >= 200, `Loyalty points balance: ${loyaltyData.data.points}`);

    // Redeem reward (Reward 1: Free Artisan Topping = 50 pts)
    const redeemRes = await fetch(`${baseUrl}/loyalty/redeem`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rewardId: 1 })
    });
    const redeemData = await redeemRes.json();
    assert(redeemRes.status === 200, 'Redeem reward returned 200');
    assert(redeemData.voucherCode && redeemData.voucherCode.startsWith('CB-'), `Voucher generated: ${redeemData.voucherCode}`);

    // 7. Locations & Parlors
    console.log('\n7. Testing Parlor Locations:');
    const locRes = await fetch(`${baseUrl}/locations`);
    const locData = await locRes.json();
    assert(locRes.status === 200 && locData.data.length >= 3, `Locations returned (${locData.data.length})`);

    // 8. Contact & Newsletter
    console.log('\n8. Testing Contact & Newsletter:');
    const contactRes = await fetch(`${baseUrl}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Alex Rivera',
        email: 'alex@example.com',
        subject: 'Catering question',
        message: 'Do you cater for weddings?'
      })
    });
    assert(contactRes.status === 201, 'POST /api/contact returns 201');

    const newsRes = await fetch(`${baseUrl}/newsletter/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: `test-${Date.now()}@sweetbliss.com` })
    });
    const newsData = await newsRes.json();
    assert(newsRes.status === 201 && newsData.couponCode === 'SUMMER15', 'Newsletter subscription gives SUMMER15 coupon');

  } catch (err) {
    console.error('Test execution failed:', err);
    failed++;
  } finally {
    server.close();
    console.log(`\n========================================`);
    console.log(`🏁 Test Summary: ${passed} Passed, ${failed} Failed`);
    console.log(`========================================\n`);
    process.exit(failed > 0 ? 1 : 0);
  }
}

runTests();

