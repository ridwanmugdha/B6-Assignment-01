const formatValue = (input: string | number | boolean) => {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else if (typeof input === "boolean") {
    return !input;
  }
  return "Invalid input: Please provide a string, Number or an boolean.";
};

const getLength = (input: string | any[]) => {
  if (typeof input === "string") {
    return input.length;
  } else if (Array.isArray(input)) {
    return input.length;
  }
  return "Invalid input: Please provide a string or an array.";
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

function filterByRating(items: { title: string; rating: number }[]) {
  const filterItems = items
    .filter((item) => item.rating >= 4)
    .map((item) => ({
      ...item,
      rating: Number(item.rating.toFixed(1)),
    }));

  return filterItems;
}

function filterActiveUsers(
  users: { id: number; name: string; email: string; isActive: boolean }[]
) {
  return users.filter((user) => user.isActive === true);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? "Yes" : "No";
  const message = `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
  console.log(message);
}

const getUniqueValues = (arr1: number[], arr2: number[]): number[] => {
  const result: number[] = [...arr1];

  for (let i = 0; i < arr2.length; i++) {
    const value = arr2[i] as number;

    let isDuplicate = false;

    for (let j = 0; j < result.length; j++) {
      if (value === result[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      result.push(value);
    }
  }

  return result;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  return products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
}
