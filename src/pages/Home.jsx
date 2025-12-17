import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>Smart Health USA – Science-Based Wellness</title>

        <meta
          name="description"
          content="Smart Health USA provides evidence-based wellness, metabolism, fitness, and health education for USA readers."
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Smart Health USA" />

        <link
          rel="canonical"
          href="https://smarthealthusa.netlify.app/"
        />
      </Helmet>

      {/* existing content */}
      <div>
        <h1>Welcome to Smart Health USA</h1>
      </div>
    </>
  );
}

export default Home;
