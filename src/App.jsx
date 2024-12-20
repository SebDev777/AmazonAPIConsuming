import './App.css';
import { useEffect, useState, useCallback } from "react"
import { catFactAPI, giphyAPI, amazonDataAPI } from './services/ApiCalls';

import Layout from './Layout';

function App() {
  const [ response, setResponse ] = useState()
  const [ status, setStatus ] = useState("Loading...")

  useEffect(() => {
    amazonDataAPI.get({
      country: amazonDataAPI.country.US,
      sortBy: amazonDataAPI.sortBy.HIGHEST_PRICE
    })
      .then(res => {
        if (Array.isArray(res)) {
          setStatus(`ERROR ${res[1]}`)
          return
        }
        setResponse(res)
      })
  }, [])

  return response ? (
    <Layout response={response} />
  ) : <h1>{status}</h1>
}

export default App;
