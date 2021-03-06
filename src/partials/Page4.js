import * as React from "react"
import {
  partials,
  rightPage,
  pageTabLow,
  MARGIN,
  TEXTSTYLE,
} from "../shared/styles"
import { Page4_collage } from "../images"

export default function Page4() {
  return (
    <div style={{ ...partials, ...rightPage }}>
      <div
        className="pageTab--high"
        style={{ ...pageTabLow, marginRight: -10 }}
      >
        <div className="pageTab-date">180731</div>
        <div className="pageTab-number">CHENG, page 4</div>
      </div>

      <div className="row" style={{ marginTop: MARGIN }}>
        <div className="image" style={{}}>
          {Page4_collage}
        </div>
      </div>

      <div
        className="row"
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div className="text" style={{ width: `40%`, margin: MARGIN }}>
          {TEXT}
        </div>
      </div>
    </div>
  )
}

const TEXT = (
  <div style={TEXTSTYLE}>
    I had been a part of the design team since the schematic design phase,
    during which I worked on materials for presentations and developed the 3D
    model in Revit.
    <br />
    <br />
    Due to a sensitive budget, campus specific requirements, and net zero energy
    goals, the design underwent several rounds of value engineering - I helped
    to ensure that documents reflected corresponding changes.
    <br />
    <br />
    I was responsible for parts of the construction documents, including
    interior elevations, typical power/finish/reflected-ceiling plans, and
    material selections.
    <br />
    <br />
    I enjoyed working together with other team memebrs to review submittals and
    shop drawings and to respond to requests for information.
    <br />
    <br />
    I enjoyed working together with other team members to review submittals and
    shop drawings and to respond to requests for information.
    <br />
    <br />
    The residence hall is slated for completed this fall.
  </div>
)
