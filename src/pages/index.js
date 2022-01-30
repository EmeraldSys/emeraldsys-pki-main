import * as React from "react"
import "../styles/index.css"
import { Helmet } from "react-helmet"

const IndexPage = () => {
  return (
      <main>
        <Helmet>
          <title>EmeraldSys PKI</title>
        </Helmet>
        <header className="mainHeader">
          <div className="alignHeader">
            <div className="mainHeaderContainer alignHeader">
              <div className="mainHeaderLinks">
                <a href="/">
                  <img src="https://edge.cdn.emeraldsys.xyz/internal/assets/emeraldsys_new_nobg.png" alt="Logo" style={{ height: "50px" }} />
                </a>
                <span style={{ fontSize: "30px", marginBottom: "5px" }}>PKI</span>
                <ul className="mainHeaderRefs">
                  <li className="mainHeaderRef">
                    <a href="https://docs.pki.emeraldsys.xyz">Documentation</a>
                  </li>
                  <li className="mainHeaderRef">
                    <a href="https://account.pki.emeraldsys.xyz">Dashboard</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mainHeaderContainer">
              <div className="subMainHeaderContainer">
                <h1 className="headerTitle">Certificate Authority for all.</h1>
                <div>Helping small projects by issuing certificates for cheap.</div>
              </div>
            </div>
          </div>
        </header>
        <section className="alignHeader" style={{ height: "250px" }}>
          <div style={{ marginBottom: "50px", marginTop: "50px" }} align="center">
            <h1 style={{ marginBottom: "30px", marginTop: "30px", fontSize: "35px" }} id="features">Features</h1>
          </div>
          <div className="featuresRow">
            <table align="center">
              <tbody>
              <tr>
                <td>
                  <div className="featureCard">
                    <h3 className="featureTitle">Scalable</h3>
                    <p className="featureDesc">Deploy certificates anywhere for any purpose, whether it be an API or an application.</p>
                  </div>
                </td>
                <td>
                  <div className="featureCard">
                    <h3 className="featureTitle">Maintainable</h3>
                    <p className="featureDesc">Certificates are easy to maintain through the account dashboard, no need to keep track.</p>
                  </div>
                </td>
                <td>
                  <div className="featureCard">
                    <h3 className="featureTitle">Customizable</h3>
                    <p className="featureDesc">Certificates are easily customizable for any purpose. You can add extra fields to your certificate to identify it even.</p>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section />
        <footer className="mainFooter">
          <div>
            <p align="center" style={{ marginTop: "50px", verticalAlign: "middle", color: "rgba(255, 255, 255, 50%)" }}>Copyright &copy; 2022 EmeraldSys. All rights reserved.</p>
          </div>
        </footer>
      </main>
  );
};

export default IndexPage