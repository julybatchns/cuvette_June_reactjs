import { useState, useEffect } from "react";

function withLoading(WrappedComponent) {
  return function WithLoadingComponent() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
      setTimeout(() => {
        setData({ message: "Data has been loaded!" });
        setLoading(false);
      }, 2000);
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent data={data} />;
  };
}

export default withLoading;
