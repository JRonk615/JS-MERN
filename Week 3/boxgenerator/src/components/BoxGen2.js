import React, {useState} from 'react'

const BoxGen2 = () => {

    const [color, setColor] = useState({
        colorPicked: ""
    })

    const [colorList, setColorList] = useState([])

    const colorHandler = (e) => {
        setColor({...color, [e.target.name] : e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setColorList([...colorList, color])
        console.log(colorList)
    }

  return (
    <div>
        <div>
        <form onSubmit={submitHandler}>
            <label> Color:  </label>
            <input type='text' name="colorPicked" value={color.colorPicked} onChange={colorHandler}></input>
            <input type="submit"></input>
        </form>
        </div>
        <div>
            {
                colorList.map((color, i) => (
                    <div key={i} style={{
                        display: "inline-block",
                        margin: "5px",
                        height: "75px",
                        width: "75px",
                        backgroundColor: color.colorPicked
                    }}>
                        <p>{color.colorPicked}</p>

                    </div>
                )
                )
            }

        </div>

    </div>
  )
}

export default BoxGen2