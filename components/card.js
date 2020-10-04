import styles from "./card.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Card(props) {
  const { data } = props;
  return (
    <div className={"card"}>
      <Link key={data.__resourcePath} href={formatPath(data.__resourcePath)}>
          <div className={styles.card_inner}>
            <div className="card-image">
              <figure className="image">
                <picture>
                  <source
                    srcSet={require(`../public/images/devs/${
                      data.image || "user-placeholder.png"
                    }?webp`)}
                    alt={data.name}
                    type="image/webp"
                  />
                  <img className="image is-256x256"
                    src={require(`../public/images/devs/${
                      data.image || "user-placeholder.png"
                    }`)}
                    alt={data.name}
                  />
                </picture>
              </figure>
            </div>
            <div className={`card-content ${styles.card_content}`}>
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">{data.name}</p>
                  <p className="subtitle is-6">{data.address}</p>
                </div>
              </div>
              <div className={`content ${styles.content}`}>
                <div className={styles.tags}>
                  {data.tags && data.tags.sort(() => 0.5 - Math.random()).slice(0,3).map((tag, idx) => (
                    <span
                      key={idx.toString()}
                      className={`tag is-rounded ${styles.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p>
                {data.description}
                </p>
              </div>
            </div>
          </div>
      </Link>
      <footer className="card-footer">
        <div className={styles.links}>
          {data.links && data.links.map((link, idx) => {
            return (
              <a alt={link.name} key={idx.toString()} href={link.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={["fab", link.name]} size="2x" />
                <FontAwesomeIcon icon={link.name} size="2x" />
              </a>
            );
          })}
        </div>
      </footer>
    </div>
  );
}
function formatPath(p) {
  return p.replace(/\.mdx$/, "");
}