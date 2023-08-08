import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();

  return (
    <div id='errorpage'>
      <p>
        <i>{error.status} - {error.statusText || error.message}</i>
      </p>
    </div>
  );
}