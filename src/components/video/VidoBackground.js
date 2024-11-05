import styles from './VideoBackground.css';

const VideoBackground = () => {
  return (
    <div className={styles.videoBackground}>
      <video className='casa-vl-video' autoPlay muted loop playsInline>
        <source src="/images/casa-vl-video.MP4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
      <div className={styles.content}>
        
      </div>
    </div>
  );
};

export default VideoBackground;


