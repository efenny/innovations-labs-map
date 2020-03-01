import React, { useState, useEffect } from "react"

import JSONData from "../../content/lab-data.json"
import ModalContent from "../components/pop-up"
import CanadaMap from "../components/canada-map"
import Layout from "../components/layout"
import Modal from "react-modal"

const IndexPage = () => {
  const [labData, setLabData] = useState([])
  const [currentCard, setCurrentCard] = useState(0)
  const [modalIsOpen, setIsOpen] = useState(false)
  const [mapFilter, setMapFilter] = useState("")

  useEffect(() => {
    setLabData(JSONData)
  }, [])

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const afterOpenModal = () => {
    console.log("after open")
  }

  const getItemName = name => {
    console.log(name)
    setCurrentCard(name)
  }

  const customStyles = {
    content: {
      width: "100%",
      maxWidth: "780px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      flexDirection: "column",
    },
  }

  const provinceClick = province => {
    setMapFilter(province)
  }

  const labCards = labData
    .filter(lab => lab["Province"] === mapFilter)
    .sort((a, b) =>
      a["Name"].toLowerCase() < b["Name"].toLowerCase() ? -1 : 1
    )
    .map((lab, index) => {
      return (
        <div
          className="lab"
          key={index}
          style={{
            width: "100%",
            paddingBottom: "1rem",
            marginBottom: "1rem",
            borderBottom: "1px solid rgb(161, 161, 161)",
          }}
        >
          <button
            onClick={() => {
              getItemName(lab["Name"])
              openModal()
            }}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0",
              margin: "0",
              marginBottom: "0.5rem",
              textAlign: "left",
            }}
          >
            <h4
              className="lab-name"
              style={{ margin: "0", color: "rgb(49, 49, 49)" }}
            >
              {lab["Name"]}
            </h4>
          </button>
          <h5
            className="lab-location"
            style={{ opacity: "0.75", margin: "0", color: "rgb(49, 49, 49)" }}
          >
            {lab["Location"]}
          </h5>
        </div>
      )
    })

  return (
    <Layout>
      <div className="map" style={{ marginBottom: "2rem" }}>
        <div className="map-2">
          <div className="map-3">
            <div className="map-4">
              <div className="map-5">
                <CanadaMap provinceClick={provinceClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul style={{ margin: "0" }}>
        {mapFilter
          ? labCards.length !== 0
            ? labCards
            : `Province does not have any innovation labs.`
          : `Please select a province to see the innovation labs.`}
      </ul>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
      >
        <button
          onClick={closeModal}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0",
            margin: "0",
            alignSelf: "flex-end",
            fontWeight: "700",
          }}
        >
          close
        </button>
        <div>
          <ModalContent
            lab={labData.find(lab => lab["Name"] === currentCard)}
          />
        </div>
      </Modal>
    </Layout>
  )
}

export default IndexPage
