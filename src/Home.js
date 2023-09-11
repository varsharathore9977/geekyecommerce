import {  useState } from 'react';
import { MinusIcon, PlusIcon} from '@heroicons/react/solid';
import { Disclosure} from '@headlessui/react';

const products = [
  {
    id: 1,
    name: 'Raymond T-Shirt',
    href: '#',
    imageSrc: 'https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png',
    imageAlt: "Front of men's Basic T-Shirt in black.",
    price: '₹350',
    color: 'Black',
    review: '⭐⭐⭐'

  },
  {
    id: 2,
    name: 'Adidas T-Shirt',
    href: '#',
    imageSrc: 'https://i.pinimg.com/originals/fc/32/58/fc3258b666e68f9ba7595f87b5c035ef.png',
    imageAlt: "Front of men's Basic T-Shirt in red.",
    price: '₹450',
    color: 'Red',
    review: '⭐⭐⭐⭐'

  },
  {
    id: 3,
    name: 'Nike T-Shirt',
    href: '#',
    imageSrc: 'https://freepngimg.com/save/36652-grey-t-shirt/580x665',
    imageAlt: "Front of men's Basic T-Shirt in gray.",
    price: '₹1000',
    color: 'Gray',
    review: '⭐⭐⭐⭐⭐'
  },
  {
    id: 4,
    name: 'Siyaram T-Shirt',
    href: '#',
    imageSrc: 'https://simg.nicepng.com/png/small/66-668510_white-t-shirt-png-image-white-v-neck.png',
    imageAlt: "Front of men's Basic Tee in white.",
    price: '₹500',
    color: 'White',
    review: '⭐⭐'

  },
  {
    id: 5,
    name: 'Puma T-Shirt',
    href: '#',
    imageSrc: 'https://pngimg.com/d/tshirt_PNG5454.png',
    imageAlt: "Front of men's Basic Tee in white.",
    price: '₹800',
    color: 'Green',
    review: '⭐⭐⭐⭐'

  },

  {
    id: 6,
    name: 'Calvin Klein T-Shirt',
    href: '#',
    imageSrc: 'https://www.transparentpng.com/thumb/t-shirt/mD03wQ-women-blue-t-shirt-icon-clipart.png',
    imageAlt: "Front of men's Basic Tee in white.",
    price: '₹1200',
    color: 'Sky Blue',
    review: '⭐⭐⭐'

  },

  {
    id: 7,
    name: 'H&M T-Shirt',
    href: '#',
    imageSrc: 'https://i.pinimg.com/originals/d2/38/69/d23869a5f12122a888c5d8d9f6219fec.png',
    imageAlt: "Front of men's Basic Tee in white.",
    price: '₹300',
    color: 'Brown',
    review: '⭐⭐'

  },

  {
    id: 8,
    name: 'Levis T-Shirt',
    href: '#',
    imageSrc: 'https://www.pngarts.com/files/5/Plain-Pink-T-Shirt-Transparent-Image.png',
    imageAlt: "Front of men's Basic Tee in white.",
    price: '₹900',
    color: 'Pink',
    review: '⭐⭐⭐⭐'

  },

];
const filters = [
    {
      id: 'color',
      name: 'Filter Color',
      options: [
        { value: 'white', label: 'White', checked: false },
        { value: 'black', label: 'Black', checked: false },
        { value: 'gray', label: 'Gray', checked: true },
        { value: 'red', label: 'Red', checked: false },
        { value: 'green', label: 'Green', checked: false },
        { value: 'sky blue', label: 'Blue', checked: false },
        { value: 'brown', label: 'Brown', checked: false },
        { value: 'pink', label: 'Pink', checked: false },
      ],
    },
  ];
  



  export default function Home() {
    const [searchText, setSearchText] = useState('');
    const [selectedColors, setSelectedColors] = useState([]);
  
    const handleSearchChange = (e) => {
      setSearchText(e.target.value);
    };
  
    const handleColorFilterChange = (e) => {
      const selectedColor = e.target.value;
      if (selectedColors.includes(selectedColor)) {
        setSelectedColors(selectedColors.filter((color) => color !== selectedColor));
      } else {
        setSelectedColors([...selectedColors, selectedColor]);
      }
    };
  
    const filteredProducts = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchText.toLowerCase());
      if (selectedColors.length === 0) return matchesSearch;
      return matchesSearch && selectedColors.includes(product.color.toLowerCase());
    });
  
    return (
 <>
      <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8" aria-label="Global">
          <div className="mt-2">
          <input
  type="text"
  name="search"
  id="search"
  autoComplete="off"
  placeholder="Search products..."
  value={searchText}
  onChange={handleSearchChange}
  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-10" 
/>

          </div>
        </nav>
      </header>

      <div className="flex">
       {/* Filters */}
       <form className="mt-4 border-t border-gray-200">
        {/* <h3 className="sr-only">Categories</h3> */}
        {filters.map((section) => (
          <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">{section.name}</span>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={`filter-mobile-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          value={option.value}
                          type="checkbox"
                          checked={selectedColors.includes(option.value)}
                          onChange={handleColorFilterChange}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                          className="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </form>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Purchase T-shirts</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                  <div className="text-sm font-medium text-gray-900">{product.review}</div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
