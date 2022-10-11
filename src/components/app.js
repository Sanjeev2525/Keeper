import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import notes from "../notes";

function App() {
	return(
		<div>
		<Header />
		{notes.map((noteitem) =>{return(
		<Note 
			key={noteitem.key}
			title={noteitem.title}
			content={noteitem.content}/>
			); 
		})}

		<Footer />
		</div>);}

export default App;