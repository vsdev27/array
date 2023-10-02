const products = [
    {
      "id": 1,
      "sku": "abc",
      "productName": "name 1",
      "category": 1
    },
    {
      "id": 2,
      "sku": "def",
      "productName": "name 2",
      "category": 2
    },
    {
      "id": 3,
      "sku": "ghi",
      "productName": "name 1",
      "category": 2
    },
    {
      "id": 4,
      "sku": "klm",
      "productName": "name 1",
      "category": 3
    },
    {
      "id": 5,
      "sku": "xyz",
      "productName": "name 1",
      "category": 1
    }
  ];
  
  const pricing = [
    {
      "sku": "abc",
      "price": 10
    },
    {
      "sku": "def",
      "price": 20
    },
    {
      "sku": "ghi",
      "price": 30
    },
    {
      "sku": "klm",
      "price": 40
    },
    {
      "sku": "xyz",
      "price": 50
    }
  ];
  
  const categories = [
    {
      "id": 1,
      "name": "category 1"
    },
    {
      "id": 2,
      "name": "category 2"
    },
    {
      "id": 3,
      "name": "category 3"
    },
    {
      "id": 4,
      "name": "category 4"
    },
    {
      "id": 5,
      "name": "category 5"
    }
  ];
  
  const newarray = products.map(product => {
    const category = categories.find(category => category.id === product.category);
    const price = pricing.find(price => price.sku === product.sku);
    return {
      id: product.id,
      sku: product.sku,
      productName: product.productName,
      category:  category.name ,
      price:  price.price
    };
  });
  
  console.log(JSON.stringify(newarray));
  