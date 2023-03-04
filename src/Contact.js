import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">contact us</h2>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3628.4802682686577!2d80.84241541404178!3d24.57261626278739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39847fd6da160ecf%3A0xbfd0407a14dd4f76!2sHRFW%2B522%20Bus%20Stand%20Satna%2C%20Navrang%20Park%20Colony%2C%20Sindhi%20Colony%2C%20Satna%2C%20Madhya%20Pradesh%20485001!3m2!1d24.5728737!2d80.84502839999999!5e0!3m2!1sen!2sin!4v1677916646247!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xbjeypan"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              placeholder="Email"
              name="Email"
              autoComplete="off"
              required
            />

            <textarea
              placeholder="enter your message"
              cols="30"
              rows="10"
              name="message"
              required
              autoComplete="off"
            ></textarea>
            <input type="submit"  />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
