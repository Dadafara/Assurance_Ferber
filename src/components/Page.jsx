import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const Page = ({ title, metaName, metaContent, children, ...props }) => {
  return (
    <Fragment>
      <Helmet {...props}>
        <title>{title} | Assurances</title>
        <meta name={metaName} content={metaContent} />
      </Helmet>
      {children}
    </Fragment>
  );
};
//reuired title
Page.propTypes = {
  title: PropTypes.string.isRequired,
  metaName: PropTypes.string,
  metaContent: PropTypes.string,
};

export default Page;
