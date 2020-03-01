/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main style={{ marginBottom: "4rem" }}>{children}</main>
        <footer
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link
            to="/about/"
            style={{
              marginRight: "0.5rem",
              fontSize: "0.8rem",
              textDecoration: "none",
              color: "black",
            }}
          >
            About
          </Link>
          <Link
            to="/credits/"
            style={{
              fontSize: "0.8rem",
              textDecoration: "none",
              color: "black",
            }}
          >
            Credits
          </Link>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
