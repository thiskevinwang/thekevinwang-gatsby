export const partials = {
  display: "flex",
  flexDirection: "column",
  minWidth: 375,
  minHeight: 515.625,
  height: `calc(100% - 20px)`,
  background: "#F1F7FC",
}

export const leftPage = {
  marginTop: 10,
  marginLeft: 10,
  marginBottom: 10,
}

export const rightPage = {
  marginTop: 10,
  marginRight: 10,
  marginBottom: 10,
}

export const pageTabHigh = {
  fontSize: 12,
  lineHeight: 1,
  position: "absolute",
  top: 0,
  right: 0,
  marginTop: 90,
  marginRight: -20, //-10 for `rightPage`
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  transform: `rotate(-90deg)`,
}

export const pageTabLow = {
  fontSize: 12,
  lineHeight: 1,
  position: "absolute",
  right: 0,
  bottom: 0,
  marginRight: -20, //-10 for `rightPage`
  marginBottom: 90,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  transform: `rotate(-90deg)`,
}
