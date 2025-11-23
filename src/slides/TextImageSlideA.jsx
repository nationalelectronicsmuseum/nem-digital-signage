import "../styles/Slides.css";

export default function TextImageSlideA({ artifactID }) {
  const artifact = data.concept[conceptId];
  return (
    <div className="fg">
      <div className="bg">
        <div className="left description">
          <Speech text={artifact.description} />
          <p style={{ fontSize: `${settings.fontSize}` }}>
            {artifact.description}
          </p>
          <ul>
            {artifact.info.map((el) => {
              return (
                <li key={el.id} className="info">
                  <span className="info-major"
                    style={{
                      fontSize: `${settings.fontSize}`
                    }}
                  >
                    {el.title}
                  </span>
                  <span className="info-minor"
                    style={{
                      fontSize: `${settings.fontSize}`
                    }}
                  >
                    {el.text}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="right">
          {artifactImg1 ? <SlideImage img={artifactImg1} /> : ""}
        </div>
      </div>
    </div>
  );
}
