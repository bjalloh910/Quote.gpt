import styles from './page.module.css';

export default function Home() {
  const handleButtonClick = async () => {
    try {
      const response = await fetch("./api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }, 
        body: JSON.stringify({
          someData: true,
        }),
      });

      if (response.ok) {
        const responseData = await response.json(); // Parse response body as JSON
        console.log("Response Data:", responseData);
      } else {
        console.error("Request failed with status:", response.status);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <main className={styles.main}>
      <p>Hello!</p>
      <p>hehe</p>
      <button onClick={handleButtonClick}>Hit API</button>
    </main>
  );
}

