import React from 'react'

function Admin() {
  return (
    <div>
        <form action="" method="get">
            <div>
                <label for="title"> Title of station</label>
                <input type="text" name="title" required/>
            </div>
            <div>
                <label for="description">Description of artifact</label>
                <input type="text" name="description" required/>
            </div>
            <div>
                <label for="impact">The Impact</label>
                <input type="text" name="impact" required/>
            </div>
            <div>
                <label for="direction">How it works</label>
                <input type="text" name="direction" required/>
                <input type="text" name="direction" required/>
                <input type="text" name="direction" required/>
                <input type="text" name="direction" required/>
            </div>
        </form>
    </div>
  )
}

export default Admin