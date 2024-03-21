import happy from "../../../Assets/happy.png"
import DashNavUser from '../../Reusable/DashNavUser'
import "./style.css"
import MobileNav from '../../Reusable/MobileNav'
import Product from "../Products"


const products = [
  {
    id: 1,
    name: 'Basket Pet Bed',
    description: 'Description for Product 1',
    price: 1999.99,
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2Fb4e8e629-d2a0-4833-b060-42080ba3868f_2.2f5a5a9b6f1d637d0c0a2bc9935d98de.jpeg&f=1&nofb=1&ipt=ddb21db73d7c82990c19abacd652021c5d837b289fbe5d9d442730561228a65b&ipo=images',
    inStock: false
  },
  {
    id: 2,
    name: 'Snoozer Bed',
    description: 'Description for Product 2',
    price: 2999.99,
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs7d1.scene7.com%2Fis%2Fimage%2FPETCO%2F2533812-center-2&f=1&nofb=1&ipt=914a65193a9b8b7c3c012c3efe394c3620c9cfaa6ebf6f0a5d84a034a3f7325b&ipo=images',
    inStock: false
  },
  // Add more products as needed
];

const Shop = () => {
  return (
<div className='browsePetWrapper'>
    <DashNavUser />
    <div className='pupListWrapper shop'>
        <div className='pageHeadingSticky'>
            <div>
                <h1 className='buyPageHeading font-face-D'>Shop</h1>
                <p className='buyPageInfo'>For all your Pooch needs!</p>
            </div>
        {/* <Search /> */}
        </div>
        <div className="store">
          <div className="products">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        </div>
        
    </div>
    <MobileNav/>
</div>
  )
}

export default Shop