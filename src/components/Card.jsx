// import star from '../image/Star.png'
/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card(props) {
    // console.log(props) //in normal case: returns object
    // console.log(props.img)
    // console.log(props) // when data={data} is passed as whole data => will give data object //hence have to modify in contnet
    let badgeText;
    if(props.data.openSpots===0){
        badgeText="SOLD OUT"
    }else if(props.data.location==="Online"){
        badgeText="ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>} {/*will render the element if badgeText exist or truthy value*/}
            {/* // use when image is imported when it is passed  */}
            {/* <img className='card-img' src={props.img} alt="katie-zaferes" />  */}

            <img className='card-img' src={`../assets/${props.data.coverImg}`} alt="katie-zaferes" />
            {/* //use when direct img url string is passed and make sure assets file is in public folder to work this */}

            <div className="rating">
                <img className='star' src='../assets/Star.png' alt="star icon" />
                <span>{props.data.stats.rating}</span>
                <span className='gray'>({props.data.stats.reviewCount})</span>
                <span className='gray'>{props.data.country}</span>
            </div>
            <h2 className="card-title">{props.data.title}</h2>
            <p className="card-price"><b>From ${props.data.price}</b> / person
            </p>
        </div>
    )
}