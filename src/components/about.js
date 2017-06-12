import Page from '../src/components/page'
import { Follow } from 'react-twitter-widgets'

export default () => (
  <Page>
  	<p>I am a iOS engineer focused on making awesome apps. I attended <a href="https://www.utdallas.edu" rel="external nofollow">The University of Texas at Dallas</a> where I majored in Software Engineering.</p>

    <p>My email is <a href="mailto:brandonsroeder@gmail.com">brandonsroeder@gmail.com</a>. Feel free to check out my <a href="/static/resume.pdf">resume</a>, <a href="https://www.github.com/brandonroeder" rel="external nofollow">Github</a>, or <a href="https://www.linkedin.com/in/brandonroeder" rel="external nofollow">LinkedIn</a>.</p>

    <Follow username="brandonscott" options={{size: "large"}} />
  </Page>
)
