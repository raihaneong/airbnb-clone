import React from "react";

import "./style.css";
import Navbar from "./components/Navbar";
import Color from "./components/Color";
import Hero from "./components/Hero";
import Counter from "./components/Counter";
import Card from "./components/Card";
import data from "./data";
import Contact from "./components/Contact";
import dataCat from './components/dataCat'
import Joke from "./components/Joke";
import jokesData from "./components/jokesData";

export default function App() {
  // const jokeElement = jokesData.map(joke => <Joke setup={joke.setup} punchLine={joke.punchline} />)
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    );
  });


  const contact = dataCat.map(item => {
    return(
      <Contact
        key={item.id}
        image={item.image}
        name={item.name}
        telephone={item.telephone}
        email={item.email}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      {/* {jokeElement}
      <Color />
      < Joke  setup=" what's that? " punchLine=" nothing, like your brain" isPun= {true} />
      < Joke  setup=" what's that? " punchLine=" nothing, like your brain" isPun= {true} />
      < Joke  setup=" what's that? " punchLine=" nothing, like your brain" isPun= {true} />
      < Joke  punchLine=" nothing, like your brain" />
      < Joke  setup=" what's that? " /> */}
      <Hero />
      <section className='cards-list'>
        { cards }
      </section>
      <Counter />
      <section className='cards-list'>
        { contact }
      </section>
    </div>
  );
}
