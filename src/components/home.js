import Page from '../src/components/page'
import Heading from '../src/components/heading'
import SubHeading from '../src/components/subheading'
import { Follow } from 'react-twitter-widgets'

export default () => (
  <Page>
    <Heading>Hi, I'm Brandon</Heading>
    <p>I'm a software engineer living in Austin, TX. I currently work as an iOS Developer at <a href="https://www.malauzai.com" rel="external nofollow">Malauzai Software</a>.</p>

    <p>I attended <a href="https://www.utdallas.edu" rel="external nofollow">The University of Texas at Dallas</a> where I majored in Software Engineering.</p>

    <p>My email is <a href="mailto:brandonsroeder@gmail.com">brandonsroeder@gmail.com</a>. Feel free to check out my <a href="/static/resume.pdf">resume</a>, <a href="https://www.github.com/brandonroeder" rel="external nofollow">Github</a>, or <a href="https://www.linkedin.com/in/brandonroeder" rel="external nofollow">LinkedIn</a>.</p>

    <Follow username="brandonscott" options={{size: "large"}} />

  </Page>
)
