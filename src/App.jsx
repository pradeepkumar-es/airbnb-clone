import './App.css'
import Navabar from './components/Navabar'
import Hero from './components/Hero'
import Card from './components/Card'
// import katieZaferes from './assets/katie-zaferes.png'
import data from './data'
function App() {
  /*
  Challenge: Build the Navbar component.
  Check the Figma file for the design specifics.
  */
  /*
  Challenge: Build the Hero component.
  Check the Figma file for the design specifics.
  */
  /*
  Challenge: Pass props to the Card component and display that data
  
  - img ("katie-zaferes.png")
  - rating ("5.0")
  - reviewCount (6)
  - country (Whatever you want)
  - title ("Life Lessons with Katie Zaferes")
  - price (136)
  
  */
  /* JSX return regular javascript */
  // const element = <h1>hello</h1>
  // console.log(element)
  /*{
      $$typeof:  Symbol(react.element)
      key: null 
      props: {children: 'hello'}
      ref: null
      type: "h1"
      _owner: FiberNode {tag: 0, key: null, stateNode: null, elementType: ƒ, type: ƒ, …}
      _store: {validated: false}
      _self: undefined
      _source: {fileName: 'C:/Users/Pradeep/OneDrive/Desktop/mini-projects/AirBnb-Clone/src/App.jsx', lineNumber: 27, columnNumber: 19}
      [[Prototype]]: Object 
    }*/

  /*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
(in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/
  const card = data.map(data => {
    // console.log(data.coverImg)
    return (
      <Card

        //passing hard coded props
        // img={katieZaferes}  //in case of image is imported
        // //  img1='katie-zaferes.png'
        // rating='5.0'
        // reviewCount='(6)'
        // country='USA'
        // title="Life Lessons with Katie Zaferes"
        // price={136}

        //passing props using map
        /*to avoid Warning: Each child in a list should have a unique "key" prop, pass key prop */
        key = {data.id}
        // img={data.coverImg}
        // rating={data.stats.rating}
        // reviewCount={data.stats.reviewCount}
        // country={data.location}
        // title={data.title}
        // price={data.price}
        // openSpots={data.openSpots}

        data={data} //passing whole data as prop

        //spread object as props
        // {...data} //this is equivalent to id={data.id} title={data.title} ......
      />
    )
  })
  return (
    <>
      <Navabar />
      <Hero />
      <section className='cards-list'>
        {card}
      </section>
    </>
  )
}

export default App
