import { createRoot } from "react-dom/client";



const rootElement = document.querySelector('#root');

function App() {
    return (
        <div>
            <Header />
            <TeamMembers />
        </div>
    )
}



function Header() {
     return (
         <div className="title">
            <h1>Team Members</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam cupiditate odit ipsam corrupti sapiente iusto molestias est quidem exercitationem nesciunt!</p>
         </div>
     )
}

function TeamMembers() {
    return (
        <ul className="team">
            <TeamMember/>
            <TeamMember/>
            <TeamMember/>
        </ul>
    )
}

function TeamMember()
{
    return (
        <li className="member co-funder">
            <div className="thumb"><img src="https://assets.codepen.io/3/internal/avatars/users/default.png?fit=crop&format=auto&height=120&width=120"/></div>
                <div className="description">
                    <h3>Chris Coyier</h3>
                    <p>
                        Chris is a front-end developer and designer. He writes a bunch of HTML, CSS, and JavaScript and shakes the pom-poms for CodePen.
                        <br/>
                        <a href="https://codepen.io/chriscoyier/">@chriscoyier</a>
                    </p>
                </div>
        </li>
    )
}



createRoot(rootElement).render(
    <App />
)