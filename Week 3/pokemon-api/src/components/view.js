import {useEffect} from 'react'

const view = (props) => {
    const {cardView, setCardView, view, setView, state, setState, url, setUrl} = props

    const handleExit = () => {
        setUrl(false)
        setCardView("")
    }

    useEffect(() => {

        if (!view) {
            return
        }

        fetch(`${url}`)
        .then((result) => {
            return result.json()
        })
        .then((pokemon) => {
            setCardView(pokemon)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [view])

    return (
        <div>
            
        </div>
    )

}
