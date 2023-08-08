import Card from "../components/Card";

export default function Root() {
  return (
    <div id="main">
      <div>
        <h1 id="heading">Lui Grosz</h1>
        <p>Fullstack Developer</p>
      </div>
      <div className="info-container">
        <h3>About</h3>
        <p className="info">
          I enjoy building dynamic things that solves specific problems. Focused
          on developing experiences that evolve based on user feedback. Always
          looking for new ways to improve life.
        </p>
      </div>
      <div className="info-container">
        <h3>Demos</h3>
        <Card name={"DicomViewer"} url="google.com"></Card>
      </div>
    </div>
  );
}
