import "./styles.css";

const limite = 100;
const fizzbuzzArray = [];
let string = "";

// make styles
const styles = (item) => {
  return item === "fizzbuzz"
    ? "color:magenta;"
    : item === "buzz"
    ? "color:green;"
    : item === "fizz"
    ? "color:red;"
    : "";
};

// Fizz Or Buzz
for (let i = 1; i < limite; i += 1) {
  const both = (i % 3) + (i % 5) === 0 ? "fizzbuzz" : null;
  const buzz = i % 5 === 0 ? "buzz" : null;
  const fizz = i % 3 === 0 ? "fizz" : null;
  fizzbuzzArray.push(both || buzz || fizz || i);
}

// make html
for (const elem of fizzbuzzArray) {
  string += `<li style="${styles(elem)}">${elem}</li>`;
}

// to front
document.getElementById("app").innerHTML = `
 <div>
  <h1>Fizz Buzz</h1>
  <ul>
    ${string}
  </ul>
</div>`;
