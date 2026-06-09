import React, { useState, useEffect } from 'react';
import { Activity, Award, Code2, Film, Music, ExternalLink } from 'lucide-react';

// Import the images directly from assets
import swim1 from '../assets/Screenshot 2026-06-09 161407.png';
import swim2 from '../assets/Screenshot 2026-06-09 161439.png';

const fallbackPosters = [
  'https://image.tmdb.org/t/p/w200/gEU2QlsEOWpNATsc9pbD01Xn12A.jpg', // Interstellar
  'https://image.tmdb.org/t/p/w200/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg', // Matrix
  'https://image.tmdb.org/t/p/w200/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg', // Blade Runner 2049
  'https://image.tmdb.org/t/p/w200/52iZ1H2w7Qo8sK4D1IeB1yX5sXj.jpg', // Akira
  'https://image.tmdb.org/t/p/w200/39wmItIWsg5sZMyRU84vP4P1P1o.jpg', // Spirited Away
  'https://image.tmdb.org/t/p/w200/vfVF8ZXwuCicaX1vR5Ld0a6wBwF.jpg', // Your Name
  'https://image.tmdb.org/t/p/w200/8c4a8kE7PizaGQQnditMmI1xbCw.jpg', // Matrix Reloaded
];

export default function Passions({ revealRef }) {
  const [moviePosters, setMoviePosters] = useState(fallbackPosters);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const traktClientId = import.meta.env.VITE_TRAKT_CLIENT_ID;
        const tmdbApiKey = import.meta.env.VITE_TMDB_API_KEY;
        const username = 'LucaRobus99';

        if (!traktClientId || !tmdbApiKey) return;

        // Fetch recent movies from Trakt
        const traktRes = await fetch(`https://api.trakt.tv/users/${username}/history/movies?limit=10`, {
          headers: {
            'Content-Type': 'application/json',
            'trakt-api-version': '2',
            'trakt-api-key': traktClientId
          }
        });
        
        if (!traktRes.ok) throw new Error('Trakt fetch failed');
        const history = await traktRes.json();
        
        const fetchedPosters = [];
        // Extract TMDB ID from Trakt and fetch the poster from TMDB
        for (const item of history) {
          const tmdbId = item.movie?.ids?.tmdb;
          if (!tmdbId) continue;
          
          const tmdbRes = await fetch(`https://api.themoviedb.org/3/movie/${tmdbId}?api_key=${tmdbApiKey}`);
          if (!tmdbRes.ok) continue;
          
          const movieData = await tmdbRes.json();
          if (movieData.poster_path) {
            fetchedPosters.push(`https://image.tmdb.org/t/p/w200${movieData.poster_path}`);
          }
        }
        
        if (fetchedPosters.length > 0) {
          setMoviePosters(fetchedPosters);
        }
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      }
    }
    fetchMovies();
  }, []);

  return (
    <section id="passions" className="section">
      <h2 className="section-title reveal" ref={revealRef}>
        <Activity size={36} className="floating-icon" color="var(--accent-blue)"/>
        Beyond the Code
      </h2>
      <div className="grid" style={{ gap: '2rem' }}>
        {/* Sports & Fitness */}
        <div className="glass-panel reveal" ref={revealRef}>
          <div className="flex-between" style={{ marginBottom: '1.2rem' }}>
            <h3 className="flex-center" style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>
              <Award size={22} color="var(--accent-purple)" /> Competitive Swimming & Fitness
            </h3>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'flex-start' }}>
            <div style={{ flex: '2 1 400px' }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.8' }}>
                I spent 15 years as a competitive swimmer, participating in regional and international competitions and winning several gold medals. Although I retired from competitive racing a few years ago, the water remains my natural element.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                Today, I swim purely for the joy and nostalgia of it. Out of the pool, I keep myself challenged and fit with bodyweight training and weighted calisthenics. The discipline, focus, and resilience I built during my athletic career are the exact same qualities I bring to software engineering.
              </p>
              <a href="https://www.tuttosport.com/news/piemonte-news/2021/07/07-83378507/aquatica_torino_ottimi_risultati_ottenuti_nel_passato_weekend" target="_blank" rel="noreferrer" className="flex-center nav-link" style={{ display: 'inline-flex', color: 'var(--accent-blue)', fontWeight: 'bold' }}>
                <ExternalLink size={16} /> Read about my team's results on Tuttosport
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: '1 1 250px', alignItems: 'center' }}>
              {/* Images imported from assets - stacked vertically and larger */}
              <img src={swim1} alt="Swimming Competition" style={{ width: '90%', borderRadius: '12px', objectFit: 'cover', border: '3px solid var(--accent-blue)', boxShadow: '0 5px 15px rgba(69, 243, 255, 0.2)' }} />
              <img src={swim2} alt="Swimming" style={{ width: '90%', borderRadius: '12px', objectFit: 'cover', border: '3px solid var(--accent-purple)', boxShadow: '0 5px 15px rgba(197, 108, 240, 0.2)' }} />
            </div>
          </div>
        </div>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {/* Tech Enthusiast */}
          <div className="glass-panel reveal" ref={revealRef}>
            <h3 className="flex-center" style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>
              <Code2 size={22} color="var(--accent-blue)" /> The Tech World
            </h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Beyond my academic studies, I have a deep and ever-growing passion for the entire tech ecosystem. I spend my free time exploring new software architectures, experimenting with emerging frameworks, and understanding how complex systems are built under the hood. For me, software development isn't just a career path—it's a creative outlet.
            </p>
          </div>

          {/* Movies & Anime */}
          <div className="glass-panel reveal delay-100" ref={revealRef} style={{ overflow: 'hidden' }}>
            <h3 className="flex-center" style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>
              <Film size={22} color="var(--accent-purple)" /> Sci-Fi & Anime
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              I am a huge movie buff, with a special place in my heart for mind-bending science fiction films. I'm also an avid watcher of anime, appreciating both the intricate storytelling and incredible animation styles.
            </p>
            <a href="https://trakt.tv/users/LucaRobus99/history" target="_blank" rel="noreferrer" className="flex-center nav-link" style={{ display: 'inline-flex', color: 'var(--accent-blue)', fontWeight: 'bold' }}>
              <ExternalLink size={16} /> View my Trakt History
            </a>
            
            {/* Scrolling Movies Marquee */}
            <div className="marquee-container">
              <div className="marquee-content">
                {/* Duplicate the list twice for infinite smooth scroll effect */}
                {[...moviePosters, ...moviePosters].map((url, index) => (
                  <img key={index} src={url} alt="Movie Poster" className="movie-poster" />
                ))}
              </div>
            </div>
          </div>

          {/* Music & Waves */}
          <div className="glass-panel reveal delay-200" ref={revealRef}>
            <h3 className="flex-center" style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>
              <Music size={22} color="var(--accent-blue)" /> Music & Waves
            </h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              When I need to completely disconnect from the digital world, I challenge myself in new ways. I'm currently learning to play the keyboard (there's still a lot of work to do, but I'm enjoying the process!). During the summer, I chase the waves and practice surfing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
