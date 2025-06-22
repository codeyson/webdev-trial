
export class Product {
  constructor(name, description, price, image) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
  }
  render() {
    return `
      <div class="bg-gray-400 p-4 flex-col justify-center w-1/3 rounded-xl">
        <h1 class="text-4xl text-center">${this.name}</h1>
        <img class="rounded-xl w-full my-3" src="${this.image}" alt="">
        <div class="flex flex-col">
          <p>${this.description}</p>
          <p class="text-white bg-blue-400 text-center my-2 rounded">Price: $${this.price}</p>
          <button class="bg-yellow-200 p-2 rounded-2xl items-center hover:bg-yellow-400 active:bg-yellow-600">Add to Cart</button>
        </div>
      </div>
    `;
  }
}

export const blueShoes = new Product(
  "Blue Shoes",
  "These kicks aren’t just shoes—they’re a statement. With a sleek silhouette, ultra-soft cushioning, and street-smart grip, they’re built for bold moves and effortless comfort. Whether you're hitting the pavement or turning heads downtown, this pair delivers performance with personality. Lace up. Level up.",
  99.99,
  "https://th.bing.com/th/id/OIP.TIWckpoCSJiDO_8U3qewegHaEh?rs=1&pid=ImgDetMain"
);

export const contentTemplate = `
  <h1 class="font-bold text-4xl text-center mt-5">Welcome to my Store</h1>
  <div class="flex justify-center items-center py-5"> <!-- Home -->
    ${blueShoes.render()}
  </div>
`;