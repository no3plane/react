// @enableJsxOutlining
function Component({arr}) {
  const x = useX();
  return arr.map(i => {
    <>
      {arr.map((i, id) => {
        let child = (
          <Bar x={x}>
            <Baz i={i}></Baz>
          </Bar>
        );

        let jsx = <div>{child}</div>;
        return jsx;
      })}
    </>;
  });
}

function Bar({x, children}) {
  return (
    <>
      {x}
      {children}
    </>
  );
}

function Baz({i}) {
  return <>{i}</>;
}

function useX() {
  return 'x';
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{arr: ['foo', 'bar']}],
};
