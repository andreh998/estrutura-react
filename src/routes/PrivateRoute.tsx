
interface PrivateRouteProps {
  element: React.ComponentType<any>;
}

export default function PrivateRoute({ element: Component }: PrivateRouteProps) {
  const isAuthenticated = true;

  return isAuthenticated ? <Component /> : <div>You must be logged in to view this page.</div>;
}