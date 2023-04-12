import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Modal from "react-modal";

import useWindowDimensions from "../hooks/useWindowDimensions";
import styles from "../styles/Home.module.css";
import sec2BGImg from "../public/section2_background.svg";

const customStyles = (width) => {
  return {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width,
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      position: "fixed",
      zIndex: 1020,
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0, 0, 0, 0.75)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
};

const wid_break = 800;

const events = {
  competitions: {
    arr: [0, 1, 2, 3],
    detailData: [
      {
        head: "ROV Mania",
        desc: "In this competition, teams will design, build, and operate ROVs (Remotely Operated Vehicle) capable of maneuvering through obstacles and detecting objects. Participants will showcase their technical expertise and problem-solving skills as they compete in maneuvering and detection tasks.",
        details: [
          {
            head: "Cash Prize",
            value: "1,50,000",
          },
          {
            head: "Date and Time",
            value: "15 Apr - 01:00 PM",
          },
          {
            head: "Venue",
            value: "DOE - Wave Basin, IITM",
          },
        ],
      },
      {
        head: "ML for oceanography",
        desc: "Machine Learning competition on Kaggle, where the problem statement focuses on Ocean Engineering concepts. Participants will need to apply their predictive analysis skills to develop machine learning models, followed by a data-driven case study. Top teams get to present their solutions to take home the cash prize.",
        details: [
          {
            head: "Cash Prize",
            value: "50,000",
          },
          {
            head: "Date and Time",
            value: "15 Apr - 02:00 PM",
          },
          {
            head: "Venue",
            value: "DOE - Seminal Hall, IITM",
          },
        ],
      },
      {
        head: "Ensemble: Float a Boat",
        desc: "Participants will have limited time to design and construct ship hulls using provided materials. The vessels will then be tested in Towing tank and Wave condition tests, demonstrating participants strategic and creative skills.",
        details: [
          {
            head: "Cash Prize",
            value: "8,000",
          },
          {
            head: "Date and Time",
            value: "16 Apr - 10:00 AM",
          },
          {
            head: "Venue",
            value: "DOE - Wave Basin, IITM",
          },
        ],
      },
      {
        head: "Ocean Engineering for Kids",
        desc: "Exciting painting competition, essay writing and quiz events for kids where they get to show off their artistic skills and creativity and win fantastic prizes. Don't miss out on the fun - sign up your kids today!",
        details: [
          {
            head: "Cash Prize",
            value: "5,000",
          },
          {
            head: "Date and Time",
            value: "16 Apr - 09:00 AM",
          },
          {
            head: "Venue",
            value: "DOE - Seminar Hall, IITM",
          },
        ],
      },
    ],
    height: 400,
    width: 500,
  },
  lectures: {
    arr: [0, 1, 2, 3, 4],
    height: 350,
    width: 300,
  },
  workshops: {
    arr: [0],
    height: 400,
    width: 500,
  },
};

const teams = [0, 1, 2, 3, 4, 5, 6, 7];

const sponsors = [0, 1, 2, 3, 4];

const footerItems = [
  {
    icon: "map",
    text: "OE, IITM",
    href: "https://www.google.com/maps/search/oe+iitm/@12.9947794,80.2244701,15z/data=!3m1!4b1",
  },
  {
    icon: "whatsapp",
    text: "+91 9330513379",
    href: "https://api.whatsapp.com/send?phone=919330513379&text=",
  },
  {
    icon: "email",
    text: "oceana@doe.iitm.ac.in",
    href: "mailto:oceana@doe.iitm.ac.in",
  },
];

const Home = () => {
  const [eventTab, setEventTab] = useState(0);
  const { width } = useWindowDimensions();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    setModalData(events.competitions.detailData[0]);
  }, []);

  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Wavez</title>
        <meta name="description" content="OE IITM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header id="home" className={styles.header}>
          <Image
            src="/images/logo.png" // Route of the image file
            height={width > wid_break ? 55 : 30} // Desired size with correct aspect ratio
            width={width > wid_break ? 80 : 45} // Desired size with correct aspect ratio
            alt="Wavez"
          />
          <div className={styles.headerBtns}>
            <Link href="#home" scroll={false}>
              <div className={styles.headerBtn}>Home</div>
            </Link>
            <Link href="#events" scroll={false}>
              <div className={styles.headerBtn}>Events</div>
            </Link>
            <Link href="#sponsors" scroll={false}>
              <div className={styles.headerBtn}>Sponsors</div>
            </Link>
            <Link href="#contactUs" scroll={false}>
              <div className={styles.headerBtn}>Contact Us</div>
            </Link>
          </div>
        </header>

        <Modal
          isOpen={modalData && modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles(width > wid_break ? "60%" : "95%")}
          contentLabel="Example Modal"
        >
          <h2 className={styles.modalHead}>{modalData?.head}</h2>
          <div className={styles.modalDesc}>{modalData?.desc}</div>
          <div className={styles.modalDetCont}>
            {modalData?.details?.map((dt, i) => (
              <div key={i} className={styles.modalDetDataCont}>
                <div className={styles.modalDetHead}>{dt.head}</div>
                <div className={styles.modalDetDesc}>{dt.value}</div>
              </div>
            ))}
          </div>
        </Modal>

        <section className={styles.hero}>
          <video autoPlay={true} muted loop className={styles.video}>
            <source
              src="https://waveziitm.s3.ap-south-1.amazonaws.com/wavez_theme_video.mp4"
              type="video/mp4"
            />
          </video>

          <div className={styles.heroContent}>
            <div className={styles.headContainer}>
              <h2 className={styles.heroh2}>WAVEZ 2023</h2>
              <h1 className={styles.heroh1}>NAUTICAL NEXUS</h1>
              <h3 className={styles.heroh3}>April 15 - April 16</h3>
            </div>
          </div>
        </section>

        <section
          className={styles.section2}
          style={{
            backgroundImage: `url(${sec2BGImg.src})`,
            width: "100%",
            height: "100%",
          }}
        >
          <div className={styles.sec2LeftContent}>
            <div className={styles.sec2LeftHeader}>Wavez</div>
            <div className={styles.sec2LeftDesc}>
              Wavez is the annual Flagship Fest of the Department of Ocean
              Engineering at IIT Madras, bringing together tech enthusiasts,
              researchers, and explorers to showcase their knowledge, projects,
              and technical skills. It features workshops, lectures, and
              competitions that encourage innovation, creativity, and exchange
              of ideas.
            </div>
          </div>

          <Image
            src="/wavez_logo_big.png" // Route of the image file
            height={width > wid_break ? 250 : 150} // Desired size with correct aspect ratio
            width={width > wid_break ? 250 : 150} // Desired size with correct aspect ratio
            alt="Wavez"
          />
        </section>

        <section id="events" className={styles.section3}>
          <div
            className={styles.sec2LeftHeader}
            style={{ textAlign: "center" }}
          >
            Events
          </div>
          <div
            className={styles.sec2LeftDesc}
            style={{ textAlign: "center", width: "80%" }}
          >
            Wavez features a range of exciting events, including workshops,
            lectures, and competitions, which anyone ranging from tech
            enthusiasts, explorers or even kids can participate in.
          </div>
        </section>

        <section className={styles.section4}>
          <div className={styles.tabsContainer}>
            <div
              className={styles[eventTab === 0 ? "tabSelected" : "tab"]}
              onClick={() => setEventTab(0)}
            >
              Competitions
            </div>
            <div
              className={styles[eventTab === 1 ? "tabSelected" : "tab"]}
              onClick={() => setEventTab(1)}
            >
              Lectures
            </div>
            <div
              className={styles[eventTab === 2 ? "tabSelected" : "tab"]}
              onClick={() => setEventTab(2)}
            >
              Workshops
            </div>
          </div>

          <div
            className={styles.cardsContainer}
            style={{
              gridTemplateColumns:
                width < wid_break
                  ? "1fr"
                  : eventTab === 1
                  ? "auto auto auto auto"
                  : "auto auto",
            }}
          >
            {events[Object.keys(events)[eventTab]].arr.map((num, i) => (
              <div
                key={i}
                className={styles.gridItem}
                onClick={() => {
                  if (eventTab === 0) {
                    setModalData(events.competitions.detailData[i]);
                    openModal();
                  }
                }}
              >
                <Image
                  className="pointer"
                  src={`/events/${Object.keys(events)[eventTab]}/${num}.svg`} // Route of the image file
                  height={events[Object.keys(events)[eventTab]].height} // Desired size with correct aspect ratio
                  width={events[Object.keys(events)[eventTab]].width} // Desired size with correct aspect ratio
                  alt="Wavez"
                />
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section5}>
          <div
            className={styles.sec2LeftHeader}
            style={{ textAlign: "center" }}
          >
            Timeline
          </div>

          <div style={{ marginTop: width > wid_break ? -200 : -60 }}>
            <Image
              src="/timeline.svg" // Route of the image file
              height={width > wid_break ? 1000 : 500} // Desired size with correct aspect ratio
              width={width > wid_break ? 1000 : 500} // Desired size with correct aspect ratio
              alt="Wavez"
            />
          </div>
        </section>

        <section
          className={styles.section6}
          style={{ marginTop: width > wid_break ? -300 : -150 }}
        >
          <div
            className={styles.sec2LeftHeader}
            style={{ textAlign: "center" }}
          >
            Our Core Team
          </div>

          <div
            className={styles.cardsContainer}
            style={{
              gridTemplateColumns:
                width > wid_break ? "auto auto auto auto" : "auto auto",
            }}
          >
            {teams.map((t, i) => (
              <div key={i} className={styles.gridItem}>
                <Image
                  src={`/teams/${t}.svg`} // Route of the image file
                  height={400} // Desired size with correct aspect ratio
                  width={300} // Desired size with correct aspect ratio
                  alt="Wavez"
                />
              </div>
            ))}
          </div>
        </section>

        <section
          id="sponsors"
          className={styles.section6}
          style={{ marginTop: width > wid_break ? 0 : 0 }}
        >
          <div
            className={styles.sec2LeftHeader}
            style={{ textAlign: "center" }}
          >
            Our Sponsors
          </div>

          <div
            className={styles.cardsContainer}
            style={{
              gridTemplateColumns: width > wid_break ? "auto auto" : "auto",
            }}
          >
            {sponsors.map((t, i) => {
              if (t > 1) return <></>;
              return (
                <div key={i} className={styles.gridItem}>
                  <Image
                    src={`/sponsors/${t}.png`} // Route of the image file
                    height={width > wid_break ? 150 : 80} // Desired size with correct aspect ratio
                    width={width > wid_break ? 300 : 160} // Desired size with correct aspect ratio
                    alt="Wavez"
                  />
                </div>
              );
            })}
          </div>
          <div
            className={styles.cardsContainer}
            style={{
              gridTemplateColumns:
                width > wid_break ? "auto auto auto" : "auto",
            }}
          >
            {sponsors.map((t, i) => {
              if (t <= 1) return <></>;
              return (
                <div key={i} className={styles.gridItem}>
                  <Image
                    src={`/sponsors/${t}.png`} // Route of the image file
                    height={width > wid_break ? 300 : 160} // Desired size with correct aspect ratio
                    width={width > wid_break ? 300 : 160} // Desired size with correct aspect ratio
                    alt="Wavez"
                  />
                </div>
              );
            })}
          </div>
        </section>

        <footer id="contactUs" className={styles.footer}>
          <div className={styles.footerSec1}>
            <div className={styles.footerLeftCont}>
              <div className={styles.footerHeader}>Contact Us</div>
              {footerItems.map((item, i) => (
                <div key={i} className={styles.footerItem}>
                  <Image
                    src={`/icons/${item.icon}.svg`} // Route of the image file
                    height={40} // Desired size with correct aspect ratio
                    width={30} // Desired size with correct aspect ratio
                    alt="Wavez"
                  />
                  <Link key={i} href={item.href} target="_blank">
                    <div className={styles.footerItemText}>{item.text}</div>
                  </Link>
                </div>
              ))}
            </div>
            <div className={styles.footerRightCont}>
              {["facebook", "linkedin", "instagram"].map((s, i) => (
                <div key={i} className={styles.socialIcon}>
                  <Image
                    src={`/icons/${s}.svg`} // Route of the image file
                    height={40} // Desired size with correct aspect ratio
                    width={40} // Desired size with correct aspect ratio
                    alt="Wavez"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.copyright}>
            © Copyright 2023. All Rights Reserved.
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;
