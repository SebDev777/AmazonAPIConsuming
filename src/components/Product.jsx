function removeDollar(str = "$0") {
  return Number(str.split("$")[1]);
}

export default function Product({ product, index, animDelay }) {
  const {
    product_original_price,
    product_minimum_offer_price,
    product_url,
    currency,
    product_price,
    product_star_rating,
    product_num_ratings,
    sales_volume,
    product_photo,
    product_title,
    delivery,
  } = product;

  const originalPrice = removeDollar(product_original_price || "$0");
  const minimumPrice = removeDollar(product_minimum_offer_price);
  const discount = product_original_price
    ? Math.floor(((originalPrice - minimumPrice) / originalPrice) * 100)
    : null;

  return (
    <div className="product" style={{ animationDelay: `${index/10}s` }}>
      <h1 className="product-index">{index+1}.</h1>
      <img className="product-photo" src={product_photo} alt={product_title}></img>
      <div className="product-content">
        <h1>{product_title}</h1>
        <a href={product_url} target="_blank" rel="noreferrer">
          Go to amazon.com
        </a>
        <h3>
          {discount && (<span className="product-discount">{`-${discount}%`}</span>)}{" "}
          {<span className="currency-display">{`${currency} ${product_price}`}</span>}
        </h3>
        {product_original_price && (
          <h5>
            Recommended price: <span>{originalPrice}</span>
          </h5>
        )}
        <h5>{delivery}</h5>
        {product_star_rating && product_num_ratings && (
          <>
            <h3>
              {`Rating: ${product_star_rating}`}{" "}
              <span>{`${"⭐".repeat(Math.ceil(product_star_rating))}`}</span>
            </h3>
            <h5>{`${product_num_ratings} rates`}</h5>
          </>
        )}
        {sales_volume && <h6>{`${sales_volume}`}</h6>}
      </div>
      <div className="product-side-bar"></div>
    </div>
  );
}
