const { db } = require('@vercel/postgres');
const { products } = require('../app/lib/placeholder-data.js');

async function seedProducts(client) {
  try {
    await client.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    // Create the "Products" table if it doesn't exist
    const createTable = await client.query(`
    CREATE TABLE IF NOT EXISTS products (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL UNIQUE,
      description TEXT NOT NULL,
      image_url VARCHAR(255) NOT NULL,
      priceUnit NUMERIC(10, 2) NOT NULL
    );
    `);

    console.log(`Created "Products" table`);

    // Insert data into the "Products" table
    const insertedProducts = await Promise.all(
      products.map(async (product) => {
        // Redondea el valor de priceUnit a 2 decimales
        const roundedPrice = parseFloat(product.priceUnit.toFixed(2));
        
        console.log(`Inserting product: ${product.name}, ${product.description}, ${product.image_url}, ${roundedPrice}`);
    
        return client.query(`
          INSERT INTO products (name, description, image_url, priceUnit)
          VALUES ($1, $2, $3, $4)
          ON CONFLICT (id) DO NOTHING;
        `, [product.name, product.description, product.image_url, roundedPrice]);
      }),
    );

    console.log(`Seeded ${insertedProducts.length} products`);

    return {
      createTable,
      products: insertedProducts,
    };
  } catch (error) {
    console.error('Error seeding products:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  try {
    await seedProducts(client);
  } finally {
    await client.end();
  }
}

main().catch((err) => {
  console.error('An error occurred while attempting to seed the database:', err);
});