import React from "react"

const ModalContent = props => {
  return (
    <div className={`lab`}>
      <div className="pop-up-inner">
        <h2 className="lab-name">{props.lab["Name"]}</h2>
        <h3 className="lab-location">{props.lab["Location"]}</h3>
        <h4 className="lab-practices">
          {props.lab["Innovation Practices"].split(",").map((word, index) => (
            <span key={`lab-practice-${index}`} className="lab-practice">
              {word}
            </span>
          ))}
        </h4>
        <h5 className="lab-concerns">{props.lab["Lab Concerns"]}</h5>
        <h6 className="lab-department">{props.lab["Government Department"]}</h6>
        <p className="lab-contact">{props.lab["Contact"]}</p>
        <p className="lab-contact-position">
          {props.lab["Contact's Position"]}
        </p>
        <p className="lab-contact-email">{props.lab["Contact Email"]}</p>
        <p className="lab-about">{props.lab["About"]}</p>
        <p className="lab-attachments">{props.lab["Attachments"]}</p>
        <p className="lab-important-links">
          <a
            href={props.lab["Important Links"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.lab["Important Links"]}
          </a>
        </p>
      </div>
    </div>
  )
}

export default ModalContent
