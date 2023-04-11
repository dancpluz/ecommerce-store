import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import urlFor from '../../lib/urlFor';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
          { shipping_rate: 'shr_1MsYigGgVUPhLE7viicCttTT' },
          { shipping_rate: 'shr_1MsYjXGgVUPhLE7v6ABUYhEV' }
        ],
        line_items: req.body.map((item:Product) => {
          const img = urlFor(item.image[0]).url();

          return {
            price_data: {
              currency: 'brl',
              product_data: {
                name: item.name,
                images: [img],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity
          }
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
      });
    
      res.status(200).json(session)
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}