
const CardCode = ({ card }) => {
  return (
    <pre className="bg-gray-100 p-4 rounded">
      <code className="language-">
        {card}
      </code>
    </pre>
  );
};

export default CardCode;
