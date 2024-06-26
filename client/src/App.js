import React, {useEffect, useState} from 'react'

const [backendData, setBackendData] = useState ([{}])

useEffect(() => {
  fetch("/api").then (
    response => response.json()
  ).then(
    data => {
      setBackendData(data)
    }
  )
}, []) 

function App(){
  return(
    <div>
      {(typeof backendData.user === 'undefined')?(
        <p>Loading...</p>
      ):(
        backendData.user.map((user, i) => (
          <p key = {i}>{user}</p>
        ))
      )}

    </div>
  )

}
export default App