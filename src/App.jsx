import { useEffect, useState } from 'react'
import cookie from './assets/cookie.png'
import cookies from 'js-cookie'
import axios from 'axios'
import './App.css'

function App() {

	const [ paragraph, setParagraph ] = useState("")

	const FetchData = async () => {
		try {
			const url = 'https://onrender.com'
			const config = {
				withCredentials: true,
				origin: true
			}

			const response = await axios.get(url, config)
			if(response){
				console.log(response)
			}
		} catch (error) {
			console.log(error)
		}
	}

	const GetCookies = () => {
		const cookie = cookies.get()
		console.log('This is cookie: ', cookie)

		if(cookie){
			setParagraph(cookie)
		}
	}

	useEffect(()=>{
		try {
			GetCookies()			
		} catch (error) {
			console.log('An error has ocurred at retrieve the cookies data: ', error)
		}
	},[])

	return (
        <div>
			<img src={cookie} height={100} width={120} alt='A cookie'/>
            <h1>Set Cookies</h1>
            <div className="card">
                <button onClick={()=>{FetchData()}}>Fetch data to set cookies</button>
			</div>

			{
				paragraph && 
				<p className="read-the-docs">
					{paragraph.text}
				</p>
			}			
        </div>
    )
}

export default App
