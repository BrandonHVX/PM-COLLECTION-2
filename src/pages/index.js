import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import bannerpic from "../images/banner.jpg"
import aboutpic from "../images/about.jpg"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0,
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this)
    this.setModal = this.setModal.bind(this)
  }

  handlePortfolioClick(index, e) {
    e.preventDefault()
    this.setModal(true, index)
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current,
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <section className="page-section bg-primary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center">
                <h2 className="text-white mt-0">About Us</h2>
                <hr className="divider light my-4" />
                <p className="text-white-50 mb-4">
                  We’re a seasonal mushroom farm, operating May – December,
                  serving local markets, CSAs and farm-to-table restaurants.
                  With humble beginnings in the heart of Denver, we’ve upscaled
                  and moved our production to Conifer, CO, enabling us to
                  sustainably serve our community.
                </p>
                <a
                  className="btn btn-light btn-xl js-scroll-trigger"
                  href="#services"
                  onClick={Scroller.handleAnchorScroll}
                >
                  Learn More
                </a>
              </div>
              <div className="col-md-5 text-center mt-5">
                <img src={aboutpic} style={{ width: "100%" }} />
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="services">
          <div className="container">
            <h2 className="text-center mt-0">Why PM Collection?</h2>
            <hr className="divider my-4" />
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-spa text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Highest Quality</h3>
                  <p className="text-muted mb-0">
                    Our mushrooms are handpicked for top quality.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-seedling text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Growth Process</h3>
                  <p className="text-muted mb-0">
                    Exclusive Growth process cultivated in Florida!
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-medal text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Stellar Service</h3>
                  <p className="text-muted mb-0">
                    Our Customer service Team is here to serve you.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-heart text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Grown with Love</h3>
                  <p className="text-muted mb-0">
                    Is it really not a mushroom if it's not grown with love?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/1.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 0)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[0].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption"></div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/2.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 1)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[1].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption"></div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/3.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 2)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[2].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50"></div>
                    <div className="project-name"></div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="images/portfolio/fullsize/4.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 3)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[3].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50"></div>
                    <div className="project-name"></div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/5.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 4)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[4].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50"></div>
                    <div className="project-name"></div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/6.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 5)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[5].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption p-3">
                    <div className="project-category text-white-50"></div>
                    <div className="project-name"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="services">
          <h2 className="text-center mt-0">CULTIVATED MUSHROOMS</h2>
          <hr className="divider my-4" />
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="card-content m-2">
                  <div class="card-img">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/54a9876de4b0ab38fee816ca/1556682819852-THHDZS8XBWJ6Z5X19BGD/ke17ZwdGBToddI8pDm48kB7DiEaQPtbLpZUSAlxSpcpZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwsrWTrzQlF3xucut5eoCUIIY3nbGZKxQz4LlVGm-I253LeJoRRqNmMHU3ZPtDez1g/Mile+High+Fungi+Shitake+Mushrooms+Colorado?format=1000w"
                      alt=""
                    />
                    <span>
                      <h4>Products</h4>
                    </span>
                  </div>
                  <div class="card-desc">
                    <h3>SHIITAKE</h3>
                    <p>
                      Shiitake mushrooms have a rich buttery flavor with a firm
                      meaty texture. Their strong umami is intensified when
                      dried, lending smoky notes to their composition.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card-content m-2">
                  <div class="card-img">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/54a9876de4b0ab38fee816ca/1555988717263-NBR1PYI4NY3NTGXYXNVQ/ke17ZwdGBToddI8pDm48kB7DiEaQPtbLpZUSAlxSpcpZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwsrWTrzQlF3xucut5eoCUIIY3nbGZKxQz4LlVGm-I253LeJoRRqNmMHU3ZPtDez1g/blueoyster1.jpg?format=1000w"
                      alt=""
                    />
                    <span>
                      <h4>Products</h4>
                    </span>
                  </div>
                  <div class="card-desc">
                    <h3>BLUE OYSTERS </h3>
                    <p>
                      The flavor of Blue Oyster mushrooms is subtle with light
                      seafood or anise notes. Their caps have a lovely
                      tenderness while the stems tend to be a bit firmer giving
                      them a nice textural diversity.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card-content m-2">
                  <div class="card-img">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/54a9876de4b0ab38fee816ca/1555989196673-LNJC0M83IBV963S70MXF/ke17ZwdGBToddI8pDm48kB7DiEaQPtbLpZUSAlxSpcpZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwsrWTrzQlF3xucut5eoCUIIY3nbGZKxQz4LlVGm-I253LeJoRRqNmMHU3ZPtDez1g/Mile+High+Fungi+Maitake+Mushrooms?format=1000w"
                      alt=""
                    />
                    <span>
                      <h4>Products</h4>
                    </span>
                  </div>
                  <div class="card-desc">
                    <h3>MAITAKE </h3>
                    <p>
                      Due to the plumage-like formations, these mushrooms are
                      known as Hen of the Woods, not to be confused with Chicken
                      of the Woods. They have rich, deep and nuanced flavors
                      full of umami.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="card-content m-2">
                  <div class="card-img">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/54a9876de4b0ab38fee816ca/1556682423110-BNHEIDF1MAJZNOKNHYT7/ke17ZwdGBToddI8pDm48kB7DiEaQPtbLpZUSAlxSpcpZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwsrWTrzQlF3xucut5eoCUIIY3nbGZKxQz4LlVGm-I253LeJoRRqNmMHU3ZPtDez1g/phoenixoyster1.jpg?format=1000w"
                      alt=""
                    />
                    <span>
                      <h4>Products</h4>
                    </span>
                  </div>
                  <div class="card-desc">
                    <h3>PHOENIX OYSTERS</h3>
                    <p>
                      Phoenix oysters are a beautiful brown color with large,
                      voluminous caps. Typically lighter than their blue
                      counterparts with lots of surface area with a subtle,
                      versatile flavor.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card-content m-2">
                  <div class="card-img">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/54a9876de4b0ab38fee816ca/1555988669560-TGWTHBWAFT7ZW3MOYC0X/ke17ZwdGBToddI8pDm48kB7DiEaQPtbLpZUSAlxSpcpZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwsrWTrzQlF3xucut5eoCUIIY3nbGZKxQz4LlVGm-I253LeJoRRqNmMHU3ZPtDez1g/pioppini1.jpg?format=1000w"
                      alt=""
                    />
                    <span>
                      <h4>Products</h4>
                    </span>
                  </div>
                  <div class="card-desc">
                    <h3>PIOPPINI </h3>
                    <p>
                      Popular in Italian cuisine, the Pioppini or Black Poplar
                      mushrooms have brown caps and firm beige stems. Similar to
                      Chestnuts their flavor is nutty, earthy and strong with a
                      nice firm texture.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card-content m-2">
                  <div class="card-img">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/54a9876de4b0ab38fee816ca/1557279257419-7UIWQYFA3UQWKT8YNGJL/ke17ZwdGBToddI8pDm48kB7DiEaQPtbLpZUSAlxSpcpZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwsrWTrzQlF3xucut5eoCUIIY3nbGZKxQz4LlVGm-I253LeJoRRqNmMHU3ZPtDez1g/Mile+High+Fungi+Nebrodini+Mushrooms?format=1000w"
                      alt=""
                    />
                    <span>
                      <h4>Products </h4>
                    </span>
                  </div>
                  <div class="card-desc">
                    <h3>NEBRODINI </h3>

                    <p>
                      Originating from Sicily, these mushrooms are also known as
                      Italian oysters. They are meaty and packed with a buttery
                      flavor. Having many similarities to Kings they stand apart
                      as the mushrooms are almost entirely a cap.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section
            className="page-section bg-dark text-white"
            style={{
              backgroundImage: `url(${bannerpic})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="container text-center">
              <h2 className="mb-4">COME MEET US & OUR MUSHROOMS</h2>

              <a
                className="btn btn-primary btn-xl js-scroll-trigger"
                href="#contact"
                onClick={Scroller.handleAnchorScroll}
              >
                Contact Us Today!
              </a>
            </div>
          </section>
          <h2 className="text-center mt-5">WILD FORAGED MUSHROOMS</h2>
          <hr className="divider my-4" />
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="card-content m-2">
                  <div class="card-img">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/54a9876de4b0ab38fee816ca/1556682819852-THHDZS8XBWJ6Z5X19BGD/ke17ZwdGBToddI8pDm48kB7DiEaQPtbLpZUSAlxSpcpZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwsrWTrzQlF3xucut5eoCUIIY3nbGZKxQz4LlVGm-I253LeJoRRqNmMHU3ZPtDez1g/Mile+High+Fungi+Shitake+Mushrooms+Colorado?format=1000w"
                      alt=""
                    />
                    <span>
                      <h4>Products</h4>
                    </span>
                  </div>
                  <div class="card-desc">
                    <h3>CHANTERELLE</h3>
                    <p>
                      Chanterelles are rich in flavor, with a distinctive taste
                      and aroma difficult to characterize. Some species have
                      fruity, apricot notes, others a more woody, earthy
                      fragrance, and still others can even be considered spicy.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card-content m-2">
                  <div class="card-img">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/54a9876de4b0ab38fee816ca/1555988717263-NBR1PYI4NY3NTGXYXNVQ/ke17ZwdGBToddI8pDm48kB7DiEaQPtbLpZUSAlxSpcpZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwsrWTrzQlF3xucut5eoCUIIY3nbGZKxQz4LlVGm-I253LeJoRRqNmMHU3ZPtDez1g/blueoyster1.jpg?format=1000w"
                      alt=""
                    />
                    <span>
                      <h4>Products</h4>
                    </span>
                  </div>
                  <div class="card-desc">
                    <h3>MOREL </h3>
                    <p>
                      Morels have a distinct and earthy flavor. Both meaty and
                      tender these mushrooms have a delightful texture. Their
                      hollow body and honeycomb cap make them unique amongst
                      their wild foraged counterparts.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card-content m-2">
                  <div class="card-img">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/54a9876de4b0ab38fee816ca/1555989196673-LNJC0M83IBV963S70MXF/ke17ZwdGBToddI8pDm48kB7DiEaQPtbLpZUSAlxSpcpZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwsrWTrzQlF3xucut5eoCUIIY3nbGZKxQz4LlVGm-I253LeJoRRqNmMHU3ZPtDez1g/Mile+High+Fungi+Maitake+Mushrooms?format=1000w"
                      alt=""
                    />
                    <span>
                      <h4>Products</h4>
                    </span>
                  </div>
                  <div class="card-desc">
                    <h3>PORCINI</h3>
                    <p>
                      These rich-tasting mushrooms impart a pungent, woodsy
                      flavor to any number of dishes. They have a beautiful
                      smooth texture and are used both fresh and dried, as their
                      flavor intensifies with drying.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="card-content m-2">
                  <div class="card-img">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/54a9876de4b0ab38fee816ca/1556682423110-BNHEIDF1MAJZNOKNHYT7/ke17ZwdGBToddI8pDm48kB7DiEaQPtbLpZUSAlxSpcpZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwsrWTrzQlF3xucut5eoCUIIY3nbGZKxQz4LlVGm-I253LeJoRRqNmMHU3ZPtDez1g/phoenixoyster1.jpg?format=1000w"
                      alt=""
                    />
                    <span>
                      <h4>Products</h4>
                    </span>
                  </div>
                  <div class="card-desc">
                    <h3>CHICKEN OF THE WOODS </h3>
                    <p>
                      As the name suggests many believe this mushroom literally
                      tastes like chicken. A show stopping display of bright
                      pinks and oranges makes it not only delicious, but
                      incredibly beautiful.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card-content m-2">
                  <div class="card-img">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/54a9876de4b0ab38fee816ca/1555988669560-TGWTHBWAFT7ZW3MOYC0X/ke17ZwdGBToddI8pDm48kB7DiEaQPtbLpZUSAlxSpcpZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwsrWTrzQlF3xucut5eoCUIIY3nbGZKxQz4LlVGm-I253LeJoRRqNmMHU3ZPtDez1g/pioppini1.jpg?format=1000w"
                      alt=""
                    />
                    <span>
                      <h4>Products</h4>
                    </span>
                  </div>
                  <div class="card-desc">
                    <h3>LOBSTER </h3>
                    <p>
                      Not only do they resemble lobsters in their vivid
                      coloration, these mushrooms also have a seafood-like
                      flavor and a firm, dense texture, working well in chowders
                      and seafood inspired dishes.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card-content m-2">
                  <div class="card-img">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/54a9876de4b0ab38fee816ca/1557279257419-7UIWQYFA3UQWKT8YNGJL/ke17ZwdGBToddI8pDm48kB7DiEaQPtbLpZUSAlxSpcpZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwsrWTrzQlF3xucut5eoCUIIY3nbGZKxQz4LlVGm-I253LeJoRRqNmMHU3ZPtDez1g/Mile+High+Fungi+Nebrodini+Mushrooms?format=1000w"
                      alt=""
                    />
                    <span>
                      <h4>Products </h4>
                    </span>
                  </div>
                  <div class="card-desc">
                    <h3>NEBRODINI </h3>

                    <p>
                      Originating from Sicily, these mushrooms are also known as
                      Italian oysters. They are meaty and packed with a buttery
                      flavor. Having many similarities to Kings they stand apart
                      as the mushrooms are almost entirely a cap.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section bg-primary text-white" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Let's Get In Touch!</h2>
                <hr className="divider my-4" />
                <p className=" mb-5 text-white">
                  Ready to grow with us? Give us a call or send us an email and
                  we will get back to you as soon as possible!
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center  mb-5 mb-lg-0">
                <i className="fas fa-phone-square fa-3x mb-3 text-white"></i>
                <div>+1 (202) 555-0149</div>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="fas fa-envelope-square fa-3x mb-3 text-white"></i>
                <a
                  className="d-block text-white"
                  href="mailto:contact@yourwebsite.com"
                >
                  contact@yourwebsite.com
                </a>
              </div>
            </div>
          </div>
        </section>
        <PortfolioModal
          show={this.state.modalShow}
          onHide={() => this.setModal(false, 0)}
        >
          <PortfolioCarousel
            images={this.props.data.images.edges}
            current={this.state.modalCurrent}
          />
        </PortfolioModal>
      </Layout>
    )
  }
}

export const imageData = graphql`
  query {
    images: allFile(
      filter: { relativePath: { glob: "portfolio/fullsize/*.jpg" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
