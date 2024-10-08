import Card from "./Card";
import { cards } from "../../data";

export default function CardList() {
  return (
    <div className="wrapper">
      {cards.map((card) => {
        return <Card key={card.id} {...card} />;
      })}
    </div>
  );
}
