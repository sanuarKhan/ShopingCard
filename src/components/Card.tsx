import { Accessibility, Computer, Phone } from "lucide-react";

export default function Card() {
  return (
    <div>
      <img src="" alt="" />
      <div>
        <Computer />
        <Phone />
        <Accessibility />
      </div>
      <div>
        <span>10.45 $</span>
        <span>cart +</span>
      </div>
      <h2>Title</h2>
    </div>
  );
}
