const router = require('express').Router();
const { Cart, Product } = require('../db/index.js');

/* Helper function to determine guest or user status
sends back object with {memberStatus, memberId} */
function determineUser(sessionID, session) {
  const result = {};
  if (session.userId) {
    result.memberStatus = 'user';
    result.memberId = session.userId;
  } else {
    result.memberStatus = 'guest';
    result.memberId = sessionID;
  }
  return result;
}

/* Provide the client with relevant information for all
of their cart row entries. Get a request, and provide an array
of all the product and cart information. */
router.get('/getCartProducts', async (req, res, next) => {
  const member = determineUser(req.sessionID, req.session);
  try {
    const cart = await Cart.findAll({ where: { ...member } });
    const products = await Promise.all(
      cart.map(i => Product.findByPk(i.productId)),
    );
    res.status(200).send({ products, cart });
  } catch (e) {
    next(e);
  }
});

/* Updates the relevant row in the Cart table based on req.body
and result from member */
router.put('/changeCart/:productId', async (req, res) => {
  const member = determineUser(req.sessionID, req.session);
  try {
    const product = await Cart.update({
      where: {
        ...member,
        memberStatus: req.body.memberStatus,
        quantity: req.body.quantity,
      },
    });
    res.status(202).send(product);
  } catch (e) {
    console.log(e);
    res.status(400).send();
  }
});

router.put('/updateGuestToUser', async (req, res) => {
  const member = determineUser(req.sessionID, req.session);
  try {
    let updated = await Cart.findByPk(req.body.id);
    updated = await Cart.update(
      { memberId: member.memberId, memberStatus: member.memberStatus },
      { where: { id: req.body.id } },
    );
    if (updated) updated = await Cart.findByPk(req.body.id);
    res.status(202).send(updated);
  } catch (e) {
    console.log(e);
    res.status(400).send();
  }
});

router.post('/createCart', async (req, res) => {
  const member = determineUser(req.sessionID, req.session);
  try {
    const productExists = await Cart.findOne({
      where: { productId: req.body.productId, ...member },
    });
    let product;
    if (productExists === null)
      product = await Cart.create({
        ...member,
        quantity: req.body.quantity,
        productId: req.body.productId,
      });
    else {
      product = await Cart.update(
        { quantity: productExists.quantity + req.body.quantity },
        { where: { id: productExists.id } },
      );
      console.log(product);
    }
    res.status(201).send();
  } catch (e) {
    console.log(e);
    res.send(400);
  }
});

router.delete('/deleteCartItem', async (req, res) => {
  const member = determineUser(req.sessionID, req.session);
  console.log(req.body.id);
  try {
    await Cart.destroy({
      where: { ...member, id: req.body.id },
    });
    res.status(202).send();
  } catch (e) {
    console.log(e);
    res.status(400).send();
  }
});

module.exports = router;
