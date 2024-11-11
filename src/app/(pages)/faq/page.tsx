import Collapse from '@/app/components/shared/Collapse';
import './Faq.scss';

const faq = [
  {
    question: 'How does our service work?',
    answer:
      'Our service provides a 6-day weather forecast for any location you type into the search bar. The displayed weather cards are collapsible; you can click on them to see more detailed information for each day. If you sign in, you can add or remove locations from your favorites. Additionally, you can update your personal information on the profile page.',
  },
  {
    question: 'How do I add or remove locations from my favorites?',
    answer:
      'Once signed in, you’ll see favorite icons next to each location. An empty star indicates the location is not in your favorites, while a filled star means it is. Your favorite locations will be displayed below the search bar. To remove a location from favorites, simply click on it to bring it up on the screen, then click the favorite icon to remove it.',
  },
  {
    question: 'Is this project open-source?',
    answer:
      "Yes, this project is open-source. You are free to download and develop it as you like. If you'd like to contribute to the development alongside me, feel free to reach out on GitHub and send a request. However, please remember to credit the source when using the project.",
  },
  {
    question: 'Is the project database unlimited?',
    answer:
      "No, the project uses Firebase's test version, which has a one-month trial period. After the trial expires, the database will be reset, meaning previously registered information will no longer be available. You can re-register at that time.",
  },
  {
    question: 'What API is used for weather data, and does it have limitations?',
    answer:
      'The weather data is provided by the Open Weather API, using the free version with a limited capacity. Please avoid making frequent requests to ensure continuous access.',
  },
];

const FAQ = () => {
  return (
    <div className="faq-wrapper-container">
      <Collapse items={faq} />
    </div>
  );
};

export default FAQ;
