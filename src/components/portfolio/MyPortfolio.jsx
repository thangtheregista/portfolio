import "./myportfolio.scss";

export default function MyPortfolio() {
  return (
    <div className="my-portfolio section" id="my-portfolio">
      <div className="my-portfolio-left-wrapper">
        <div className="my-portfolio-about">
          <h1>About Me</h1>
          <ul className="my-portfolio-list">
            <li className="my-portfolio-item">Hi, my name is Tran Thang.</li>
            <li className="my-portfolio-item">
              I was born in Vung Tau, the year 1998.
            </li>
            <li className="my-portfolio-item">I love music.</li>
            <li className="my-portfolio-item">
              I love my friends and my family.
            </li>
            <li className="my-portfolio-item">
              <a href="https://christmastmer.w3spaces.com/"></a>
            </li>
          </ul>
        </div>
        <div className="my-portfolio-skills">
          <h1>My skills</h1>
          <ul className="my-portfolio-list">
            <li className="my-portfolio-item">I am good at English.</li>
            <li className="my-portfolio-item">
              I have some experiences working with HTML, CSS, and Javascript.
            </li>
            <li className="my-portfolio-item">
              I've also learnt the basics of SQLite, SQL Server Management
              Studio, python, C#, through school.
            </li>
            <li className="my-portfolio-item">
              I am taking the next step by learning ReactJS.
            </li>
            <li className="my-portfolio-item">
              If you are interested in hiring me.{" "}
              <a href="#contact">Here are my contacts.</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="my-portfolio-right-wrapper">
        <img
          src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.6435-9/149304363_1602944739876077_2170631125087323418_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=_Ye9mZTSb10AX-auTYt&tn=hSqEtKyIEqRSfcs6&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT9PXotR4I1ofH-L1jN6w3O3HI8mIc5V7BUPU49LXOHpag&oe=61FDEF7A"
          alt="me-and-my-friends"
        />
      </div>
    </div>
  );
}
