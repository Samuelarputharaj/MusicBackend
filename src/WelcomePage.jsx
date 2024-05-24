import './Welcomepage.css'
function WelcomePage() {
    return(
        <>
        <div className="box">
        <div className="create">
          <i className="fa-solid fa-arrow-left fa-3x" />
        </div>
        <div className="acc">Create account</div>
      </div>
      <div className="det">
        <section className="email">What's Your email address ?</section>
        <input type="email" id="square" />
        <div className="cap">You'll need to confirm this email later.</div>
        <div className="nex">next</div>
      </div>
    </>
    );
}
export default WelcomePage;