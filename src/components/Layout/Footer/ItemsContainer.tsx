import Item from "./Item";

export default function ItemsContainer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 ">
      <Item />
      <Item />
    </div>
  );
}
