function test(text) {
  alert(text);
}

export default function Button({ children }) {
  return <button onClick={() => test("Hello Dibya.")}>{children}</button>;
}
