import React from 'react'
import StarRating from './StarRating'
import Contact from './Contact';


const ProductCat = ({
    bike: {
        id: bike,
        name,
        desc,
        price,
        rating: { averageRating, numberOfReviews },

    }
}) => {

    const images = {
        '12345': 'https://admin.ecoride.se/wp-content/uploads/2020/09/thumbnails/c100-ambassador-axs-h8-front-28-black-600x338.png',
        '67890': 'https://i.ebayimg.com/images/g/vBsAAOSwLEtYf8vZ/s-l1200.webp ',
        '11223': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkmXdoP_RShdgYvxIPx08MVBD85_xMML5SKA&s',
        '44556': 'https://www.maxblinker.com/450-panda_big_default/sxt-1000-turbo.jpg',
        '78901': 'https://img-va.myshopline.com/image/store/1635752587298/-1(5).jpeg?w=2000&h=2000',
        '23456': 'https://ebikehaul.com/cdn/shop/products/eahora-urban-750w-folding-fat-tire-electric-bikeeahoraebike-haul-305437.webp?v=1677593277&width=1080',
      };

    return (
        <div id='product' className="product-card group">
            <img
                src={images[bike]}
                className="product-card-img group-hover:-rotate-6 duration-300 transition-transform h-32 -mb-16 ms-5"
            />
            <div className="border border-neutral-600 p-5">
                <p className="product-card-title font-heading font-bold line-clamp-1 text-xl mb-2 mt-12">
                    {name}
                </p>
                <p className="product-card-description text-neutral-500 text-sm line-clamp-3 mb-4">
                    {desc}
                </p>
                <div className=' flex justify-between'>
                <div className="rating  border-neutral-600  justify-between">
                    <div className="rating-stars flex">
                        <StarRating rate={averageRating} />
                    </div>
                    <p className="rating-text mt-1">
                        ({averageRating} / {numberOfReviews} reviews)
                    </p>
                </div>
                <div>
                    <p className="product-card-price font-heading font-bold text-xl mt-3">
                        {price}
                    </p>

                </div>

                </div>
            </div>
        </div>

    )
}

export default ProductCat