export async function catFactAPI() {
  try {
    const response = await fetch("https://catfact.ninja/fact");

    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(`Something went wrong calling the catFact API ${err}`);
  }
}

const GIPHY_API_KEY = "2cZkiFTqyiS79UdSapL6LHWlublpl7iy";
export async function giphyAPI(query) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${GIPHY_API_KEY}`
    );

    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(`Something went wrong calling the catFact API ${err}`);
  }
}

export const amazonDataAPI = {
  country: {
    US: 'US',
    AU: 'AU',
    BR: 'BR',
    CA: 'CA',
    CN: 'CN',
    FR: 'FR',
    DE: 'DE',
    IN: 'IN',
    IT: 'IT',
    MX: 'MX',
    NL: 'NL',
    SG: 'SG',
    ES: 'ES',
    TR: 'TR',
    AE: 'AE',
    GB: 'GB',
    JP: 'JP',
    SA: 'SA',
    PL: 'PL',
    SE: 'SE',
    BE: 'BE',
    EG: 'EG'
  },

  sortBy: {
    RELEVANCE: 'RELEVANCE',
    LOWEST_PRICE: 'LOWEST_PRICE',
    HIGHEST_PRICE: 'HIGHEST_PRICE',
    REVIEWS: 'REVIEWS',
    NEWEST: 'NEWEST',
    BEST_SELLERS: 'BEST_SELLERS'
  },

  get: async function(queries) {
    const {sortBy, country} = queries
      const url =
        `https://real-time-amazon-data.p.rapidapi.com/seller-products?seller_id=A02211013Q5HP3OMSZC7W&country=${country}&page=1&sort_by=${sortBy}`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": "eab884919emsh77e39c58d00a425p1efbbdjsn1a8346789c44",
          "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
        },
      };
    
      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(`Error with amazonDataAPI ERROR ${response.status}`)
        const result = await response.json();
        return result
      } catch (error) {
        return ["error", error]
      }
  }    
}