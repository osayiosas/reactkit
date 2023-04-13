import { Link } from "react-router-dom"

const About = () => {
  return (
    <div>
      <h1>About page</h1>
      <Link to='/' className="btn">
        Back Home
      </Link>
    </div>
  )
}

export default About
