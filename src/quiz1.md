1. What do props help us accomplish?
Ans: props helps to make components reusable


2. How do you pass a prop into a component?
Ans: I will pass propsname="value"
i.e. <componets propsname="value" />


3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
Ans: No, Bcz the JSX we use to describe native DOM elements will converted into real DOM elements by react
and in real DOM element only properties/attributes are defined in specified in HTML specification.
which does not include properties like blahblahblah.


4. How do I receive props in a component?
function Navbar() {
    return (
        <header>
            ...
        </header>
    )
}
Ans: by writing props/whatever suitable word for you in parenthesis of the function
function Navbar(props) {
    return (
        <header>
            ...
        </header>
    )
}

5. What data type is `props` when the component receives it?
Ans: it is an object