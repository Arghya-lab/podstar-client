import { useRouteError } from "react-router-dom";

type RouteError =
  | {
      statusText?: string;
      message?: string;
    }
  | undefined;

export default function Error() {
  const error = useRouteError() as RouteError;

  return (
    <main id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {error?.statusText || error?.message ? (
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      ) : null}
    </main>
  );
}
