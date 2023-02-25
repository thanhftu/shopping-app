import React, { useRef } from "react";

interface ShoppingListFormProps {
  onAddItem: (item: string, quantity: number) => void;
}

function ShoppingListForm({ onAddItem }: ShoppingListFormProps) {
  const productInputRef = useRef<HTMLInputElement>(null);
  const quantityInputRef = useRef<HTMLInputElement>(null);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newProductName = productInputRef.current!.value;
    const newQuantity = parseInt(quantityInputRef.current!.value);
    onAddItem(newProductName, newQuantity);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" ref={productInputRef} />
      <input type="number" min={0} ref={quantityInputRef} />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ShoppingListForm;
