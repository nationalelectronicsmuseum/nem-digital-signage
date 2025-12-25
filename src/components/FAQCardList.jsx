import FAQCard from "./FAQCard.jsx";

export default function FAQCardList({ componentObject }) {
  return (
    <div>
        {componentObject.map((el, j) => (
          <FAQCard componentObject={el} key={j} />
        ))}
    </div>
  );
}
