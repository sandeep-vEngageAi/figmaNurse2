import { useLoading, Bars } from '@agney/react-loading';

function LoaderBar() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Bars width="30" />,
  });

  return (
    <section {...containerProps}>
      {indicatorEl} {/* renders only while loading */}
    </section>
  );
}

export default LoaderBar ;