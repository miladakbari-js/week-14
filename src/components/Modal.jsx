function Modal({onConfirm , onCancel , message}) {
  return (
    <div>
      <div>
        <p>{message}</p>
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default Modal;
