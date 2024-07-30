const loadingStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  margin: "3rem 1rem 1rem",
};

export default function Loading() {
  return <div style={loadingStyles}>Loading...</div>;
}
