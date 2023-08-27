export default function Footer() {
  return (
    <>
      <div className="footer-primary mb-4">
        <div className="footer-primary-inner container">
          <section className="footer-nav">
            <ul>
              <li>
                <a href="/" title="Information">
                  Information
                </a>
              </li>

              <li>
                <a href="/" title="Contact us">
                  Contact us
                </a>
              </li>

              <li>
                <a href="/" title="Track my order">
                  Track my order
                </a>
              </li>

              <li>
                <a href="/" title="Shipping">
                  Shipping
                </a>
              </li>

              <li>
                <a href="/" title="Free returns">
                  Free returns*
                </a>
              </li>

              <li>
                <a href="/" title="My account">
                  My account
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="/" title="Services">
                  Services
                </a>
              </li>
              <li>
                <a href="/" title="Ship to store">
                  Ship to store
                </a>
              </li>
              <li>
                <a href="/" title="Gift card">
                  Gift card
                </a>
              </li>
              <li>
                <a href="/" title="Online only">
                  Online only
                </a>
              </li>
              <li>
                <a href="/" title="Tips & tricks">
                  Tips & tricks
                </a>
              </li>

              <li>
                <a href="/" title="Home">
                  Home
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="/" title="Loyalty programs">
                  Loyalty programs
                </a>
              </li>

              <li>
                <a href="/" title="Sign up to the Simons">
                  Sign up to the Simons
                </a>
              </li>

              <li>
                <a href="/" title="My account">
                  My account
                </a>
              </li>

              <li>
                <a href="/" title="Conditions">
                  Conditions
                </a>
              </li>

              <li>
                <a href="/" title="Faq">
                  Faq
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="/" title="Careers">
                  Careers
                </a>
              </li>

              <li>
                <a href="/" title="About us">
                  About us
                </a>
              </li>

              <li>
                <a href="/" title="Our story">
                  Our story
                </a>
              </li>
              <li>
                <a href="/" title="Art & Culture">
                  Art & Culture
                </a>
              </li>

              <li>
                <a href="/" title="Our private labels">
                  Our private labels
                </a>
              </li>

              <li>
                <a href="/" title="Stores">
                  Stores
                </a>
              </li>
            </ul>
          </section>

          <section className="footer-contact">
            <h1>
              <span>Thread Affair</span> Milano
            </h1>

            <p>
              <span>Largo Augusto 3, Milano, 20122, Milano, IT</span>

              <span>
                Tel:{' '}
                <a
                  href="tel:+0039 02 760 003 66"
                  title="Thread Affair phone number"
                >
                  0039 02 760 003 66
                </a>
              </span>

              <span>
                <a
                  href="mailto:office@thread-affair.com"
                  title="Thread Affair email adress"
                >
                  office@thread-affair.com
                </a>
              </span>
            </p>
          </section>

          <section className="footer-connect">
            <ul>
              <li>
                <a href="tel:+0039 02 760 003 66" title="Call us">
                  <i className="fa-solid fa-phone"></i>
                  Support
                </a>
              </li>

              <li>
                <a href="/" title="Ask us a question">
                  <i class="fa-brands fa-rocketchat"></i>
                  Chat
                </a>
              </li>

              <li>
                <a href="mailto:office@thread-affair.com" title="E-mail us">
                  <i class="fa-regular fa-envelope"></i>
                  Email
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>

      <div className="footer-secondary container">
        <p className="mb-2">©2020 THREAD AFFAIR. All Rights Reserved.</p>

        <p className="d-flex gap-2 justify-content-center align-items-center">
          Designed by
          <a
            href="http://www.pixellab.ro/"
            title="Pixellab website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <picture>
              <img src="/images/pixellab_logo.jpg" alt="Pixellab Logo" />
            </picture>
          </a>
        </p>
      </div>
    </>
  );
}
