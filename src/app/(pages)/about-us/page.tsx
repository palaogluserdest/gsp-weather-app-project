import './AboutUs.scss';

const AboutUs = () => {
  return (
    <div className="au-container">
      <h1 className="au-main-title">About Us</h1>
      <p className="au-main-text">
        Welcome to our weather application, designed with a focus on providing accurate, up-to-date weather information
        with a user-friendly, interactive experience. By integrating a powerful API for weather data, we aim to ensure
        that users have access to essential information wherever and whenever they need it. Our application connects to
        the Open Weather API, a well-regarded service in the weather industry, which provides data for current
        conditions, forecasts, and additional metrics such as temperature, humidity, and wind speed. With this data, we
        strive to deliver a comprehensive weather report that is easy to interpret and visually organized for enhanced
        usability.
      </p>
      <div className="au-content">
        <div className="au-content-item">
          <h2 className="au-sub-title">Core Features</h2>
          <p className="au-sub-text">
            The core functionality of our app is centered on providing a detailed, six-day forecast for any location
            users search. Whether you’re planning a trip or simply curious about the week ahead, our app lets you view
            an interactive summary that can be expanded for day-by-day details. Each weather card is collapsible,
            offering users a quick overview of the week’s weather trends or more in-depth details with a simple tap.
          </p>
        </div>
        <div className="au-content-item">
          <h2 className="au-sub-title">Personalized Experience</h2>
          <p className="au-sub-text">
            Our app encourages user engagement through interactive elements like favorites. By signing in, users can
            save their most-visited locations and easily access them without having to search repeatedly. For instance,
            if you frequently monitor the weather in a few key cities, you can simply add them to your favorites, where
            they will be readily available below the search bar. Additionally, users have control over their personal
            details, which can be managed through the profile page.
          </p>
        </div>
        <div className="au-content-item">
          <h2 className="au-sub-title">Community and Open-Source Commitment</h2>
          <p className="au-sub-text">
            As a community-driven and open-source project, we believe in the power of collective improvement. Our
            platform is open-source, allowing developers to access, modify, and contribute to the codebase on GitHub. We
            encourage collaboration, and you are welcome to join our growing community by reaching out via GitHub for
            suggestions, improvements, or potential feature requests.
          </p>
        </div>
        <div className="au-content-item">
          <h2 className="au-sub-title">Limitations and Future Prospects</h2>
          <p className="au-sub-text">
            Currently, our app uses Firebase’s database in a test environment, so data persistence may reset monthly.
            However, we are working toward a more permanent storage solution for our users’ saved data. Moreover, as we
            utilize the free tier of the Open Weather API, request frequency may be limited, so we encourage users to
            avoid excessive requests to maintain optimal app performance.
          </p>
        </div>
        <p className="au-main-text">
          We’re thrilled to provide a reliable, community-driven weather application, and we look forward to your
          feedback and continued support!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
