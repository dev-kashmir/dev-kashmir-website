import Navbar from "../components/navbar";
import { NextSeo } from "next-seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/footer";
import Link from "next/link";

export default function Nominate() {
  return (
    <>
      <NextSeo
        title="Nominate - Kashmiri Devs"
        canonical="https://kashmiri.dev/nominate"
        openGraph={{
          title: "Nominate - Kashmiri Devs",
          url: "https://kashmiri.dev/nominate",
        }}
      />
      <Navbar />
      <div className="section">
        <div className="container">
          <h1 className="title is-size-1">
            Nominate a <highlight>Developer</highlight>
          </h1>
          <div className="section has-text-justified content">
            Help us build the directory of Kashmiris thriving in the field of
            programming. If you know someone who deserves to be on the list,
            nominate them by clicking the Nominate button and filling the form.
            And hey, it's alright to nominate yourself. 😊
          </div>
          <div className="buttons">
            <Link href="/fillform">
            <a
              className="button is-large">
              Submit a Form
            </a>
           </Link>
            <a
              href="https://github.com/dev-kashmir/dev-kashmir-website"
              target="_blank"
              rel="noopener noreferrer"
              className="button is-large is-dark"
            >
              <FontAwesomeIcon className="fa-icon" icon={["fab", "github"]} size="lg" />
              Open a PR
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
