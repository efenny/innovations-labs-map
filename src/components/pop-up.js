import React from "react"

const ModalContent = props => {
  return (
    <div className={`lab`}>
      <div className="pop-up-inner">
        <h2
          className="lab-name"
          style={{ marginBottom: "0.5rem", color: "#12567b" }}
        >
          {props.lab["Name"]}
        </h2>
        <h4
          className="lab-location"
          style={{ marginBottom: "1rem", opacity: "0.75", color: "#12567b" }}
        >
          Location: {props.lab["Location"]}
        </h4>
        <h5
          className="lab-practices"
          style={{ marginBottom: "0.5rem", opacity: "0.75", color: "#12567b" }}
        >
          {props.lab["Innovation Practices"] ? `Innovation Practices:` : ``}{" "}
          {props.lab["Innovation Practices"].split(",").map((word, index) => (
            <span key={`lab-practice-${index}`} className="lab-practice">
              {word}
            </span>
          ))}
        </h5>
        <h6
          className="lab-concerns"
          style={{ marginBottom: "1rem", opacity: "0.75", color: "#12567b" }}
        >
          {props.lab["Lab Concerns"] ? `Concerns:` : ``}{" "}
          {props.lab["Lab Concerns"]}
        </h6>
        <p className="lab-about">{props.lab["About"]}</p>
        <p
          className="lab-important-links"
          style={{
            marginTop: "2rem",
            fontWeight: "700",
            color: "black",
          }}
        >
          {props.lab["Important Links"] ? (
            <a
              href={props.lab["Important Links"]}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "black", textDecoration: "none" }}
            >
              Learn More
            </a>
          ) : (
            ``
          )}
        </p>
      </div>
    </div>
  )
}

export default ModalContent
