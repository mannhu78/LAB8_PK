import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div>
      <Header />

      <main style={styles.main}>
        <h1>Welcome to React Movie App </h1>
        <p>Browse and explore popular movies!</p>

        <div style={styles.movieGrid}>
      <div style={styles.movieCard}>
        <img
          style={styles.movieImage}
          src="https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg"
          alt="Movie 1"
        />
        <div style={styles.movieTitle}>AVENGER </div>
      </div>

      <div style={styles.movieCard}>
        <img
          style={styles.movieImage}
          src="https://upload.wikimedia.org/wikipedia/vi/f/fe/1917_%282019%29_Film_Poster.jpeg"
          alt="Movie 2"
        />
        <div style={styles.movieTitle}>1917</div>
      </div>

      <div style={styles.movieCard}>
        <img
          style={styles.movieImage}
          src="https://upload.wikimedia.org/wikipedia/vi/thumb/2/2d/Poster_phim_K%E1%BB%B5_s%C4%A9_b%C3%B3ng_%C4%91%C3%AAm_2008.jpg/250px-Poster_phim_K%E1%BB%B5_s%C4%A9_b%C3%B3ng_%C4%91%C3%AAm_2008.jpg"
          alt="Movie 3"
        />
        <div style={styles.movieTitle}>The Dark Knight</div>
      </div>
    </div>
      </main>

      <Footer />
    </div>
  );
}

const styles = {
  main: {
    padding: '20px',
    textAlign: 'center',
  },
  movieGrid: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
  },
  movieCard: {
    width: '150px',
    height: '250px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  movieImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  movieTitle: {
    padding: '10px',
    fontWeight: 'bold',
  },
};
