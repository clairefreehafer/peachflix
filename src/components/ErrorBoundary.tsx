import { useRouteError } from "react-router-dom";

const errorStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  margin: "3rem 1rem 1rem",
};

export default function ErrorBoundary() {
  const error = useRouteError() as Error;
  console.error(error);
  return (
    <div style={errorStyles}>
      ❌ ERROR: {error.message} Please refresh the page and try again.
    </div>
  );
}
