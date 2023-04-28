import { useEffect } from "react"

export default function Home ({shows, setShows}) {
  useEffect( () => {
    fetch("https://tv-shows-api-iv.web.app/shows")
    .then(resp => resp.json())
    .then(setShows)
    .catch(alert)
  },[])


  return (
    <>
    <h1>Home</h1>
    <div className="main-container">      
      { !shows 
          ? "Loading..."
          : shows.map(
            (show) => (
              <div key={show.id} className="show-container button-effect">
                <img src={show.poster} alt="" />
                <h2>{show.title}</h2>
                <p className="season-container">Seasons: {show.seasons}</p>
              </div>
            )
          )
      }
    </div>
    </>
  )
}