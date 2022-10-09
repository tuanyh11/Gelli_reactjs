import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { CateBanner } from "../../Components";
import { cateBanners } from "../../Fakedata/uiData";

const BannerSection = () => {
  return (
    <div>
      <Container>
        <Row>
          {cateBanners.map((item, i) => (
            <Col lg={4} md={6} sm={12} key={i}>
              <Link to={'/shop'}>
                <CateBanner
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    ui: state.ui,
  };
};

export default BannerSection;
