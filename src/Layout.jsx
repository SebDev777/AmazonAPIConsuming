import Product from "./components/Product";

export default function Layout({ response }) {
  const { data, parameters } = response
  return (
    <>
      <header>
        <h1>Amazing.com</h1>
      </header>
      <main>
        <div className="separator"></div>
        {data &&
          data.seller_products &&
          data.seller_products.map((product, index) => {
            return <Product product={product} index={index} key={index} />;
          })}
        <div className="separator"></div>
      </main>
      <footer>
        {parameters && (
          <>
            <h3>
              Seller ID: <span>{`${parameters.seller_id}`}</span>
            </h3>
            <h3>
              Country: <span>{`${parameters.country}`}</span>
            </h3>
          </>
        )}
      </footer>
    </>
  );
}
